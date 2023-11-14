import { useContext, useEffect, useState } from "react";
import { ICardapioProps, ISemana } from "../../Types/storage";
import { ToastContainer, toast } from 'react-toastify';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { CardapioDiv, Sombra, ActionsDiv, HorarioDiv, HoraButton,
        DropHeader, AvisoAtt, Conteudo, Turno} from "./style";

import { global } from "../../globalStyle";
    
import { useHistory } from "react-router-dom";

import NavBar from "../../Components/Navbar";
import DropDown from "../../Components/DropDown";
import Dia from "../../Components/Dia";
import DownPop from "../../Components/PopUpIOS";
import Load from "../../Components/Load";
import FontSize from "../../Functions/Cardapio/FontSize";

import "react-toastify/dist/ReactToastify.css";

import ReactGA from "react-ga4";

import { useDrag } from '@use-gesture/react';

let consultando = false;

const estadosRestaurante = ['ct', 'pv', 'dc', 'mc'];
const opcoesRestaurante = ['Central, CT e Letras', 'IFCS e Praia Vermelha',
                        'Duque de Caxias', 'Macaé'];

export default function Cardapio() {
    const history = useHistory();


    const [cardapio, setCardapio] = useState<ICardapioProps>();

    const [dia, tggDia] = useState(0);
    const [hora, tggHora] = useState(0);
    const [ruAtual, setRuAtual] = useState<string>();

    const [loading, setLoading] = useState(true);

    const { showInstallMessage } = useContext(InstallMessageContext);
    
    function selecionaRU(restaurante : string){
        localStorage.setItem("bandejapp:ruDefault", restaurante);
        setRuAtual(restaurante);
    }

    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const mudaHora = async (turno: number) => {
        tggHora(turno);
        const conteudo = document.getElementById('conteudo');
        if (!conteudo){
            await sleep(20);
            mudaHora(turno);
            return;
        }

        conteudo.scrollTo(turno === 0 ? 0 : 1000, 0);
    }
    
    useEffect(() => {
        if (!localStorage.getItem("bandejapp:ruDefault")) history.push('/Restaurante');

        const agora = (((new Date().getHours()) > 14) ? 1 : 0);
        mudaHora(agora);
        
        ReactGA.send({hitType: "pageview", page: "/Cardapio", title: 'Cardapio'});
        let tentativas = 0;
        async function consultarCardapio():Promise<boolean> {
            tentativas++;
            try {
                const data = await fetch(`${process.env.REACT_APP_CARDAPIO_API_URL}`) 
                let post = await data.json(); 
                if(JSON.stringify(post) === "{}"){
                    throw new Error("ObjetoNulo");
                }
                setCardapio(post);
                localStorage.setItem("bandejapp:ultimoCardapio", JSON.stringify(post));    
                setLoading(false);
                consultando = false;
                return true;
            }
            catch {
                await sleep(2500);
                consultando = false;
                if(tentativas === 5 && localStorage.getItem("bandejapp:ultimoCardapio")){
                    throw new Error();
                }
                return consultarCardapio();
            }
        }
        
        let ultimoCardapio = localStorage.getItem("bandejapp:ultimoCardapio");
        setRuAtual(localStorage.getItem("bandejapp:ruDefault") + '');
        if(ultimoCardapio){ 
            setCardapio(JSON.parse(ultimoCardapio));
            setLoading(false);
        }

        if (!consultando) {
            consultando = true
            toast.promise(
                consultarCardapio(),
                {
                    pending: 'Atualizando cardápio...',
                    success: 'Cardápio atualizado',
                    error: 'Não foi possível atualizar o cardápio'
                },
                {position: toast.POSITION.BOTTOM_CENTER}
            )
        }
    }, []);

    FontSize();


    const scrollEntreOsTurnos = useDrag(({last, velocity: [vx, vy], movement}) => {
        const THRESHOLD = 0.6;

        if (last && vx > THRESHOLD) {
            if (movement[0] > 0 && hora === 1)
                mudaHora(0);    
            else if (movement[0] < 0 && hora === 0) 
                mudaHora(1);
        }
    })

    function makePath(indexDia : Number) {
        let ru = localStorage.getItem("bandejapp:ruDefault");
        let temp;

        switch (ru) {
        case 'ct':
            temp = cardapio?.ct;
            break;
        case 'pv':
            temp = cardapio?.pv;
            break;
        case 'dc':
            temp = cardapio?.dc;
            break;
        case 'mc':
            temp = cardapio?.mc;
            break;
        }

        switch (indexDia) {
        case 1:
            return temp?.segunda;
        case 2:
            return temp?.terca;
        case 3:
            return temp?.quarta;
        case 4:
            return temp?.quinta;
        case 5:
            return temp?.sexta;
        case 6:
            return temp?.sabado;
        case 7:
            return temp?.domingo;
        }
    }

    function getAtt (restaurante: string) {
        switch(restaurante)
        {
        case 'ct':
            return cardapio?.ct.ultimaAtt;
        case 'pv':
            return cardapio?.pv.ultimaAtt;
        case 'dc':
            return cardapio?.dc.ultimaAtt;
        case 'mc':
            return cardapio?.mc.ultimaAtt;
        }
    }

    function passaSemana (semana: ISemana): string[] {
        const lista = [''];
        lista.pop();

        lista.push(semana?.segunda);
        lista.push(semana?.terca);
        lista.push(semana?.quarta);
        lista.push(semana?.quinta);
        lista.push(semana?.sexta);
        lista.push(semana?.sabado);
        lista.push(semana?.domingo);

        return lista;
    }


/* - - - - - Fim das funções - - - - - */

    return(
        <CardapioDiv id="cardapio">
            <ToastContainer autoClose={2000}/>
            {
                (loading) ?
                    <Load />
            : 
            <>

                <ActionsDiv id='acoes'>
                    <DropHeader>
                        <DropDown 
                        opcaoInicial={localStorage.getItem("bandejapp:ruDefault") || ''}
                        valoresState={estadosRestaurante}
                        valoresOpcoes={opcoesRestaurante}
                        tela='cardapio'
                        alterarState={selecionaRU}/>
                    </DropHeader>

                    <NavBar
                    tggDia={tggDia}
                    semana={passaSemana(cardapio?.semana as ISemana)}/>
                    <HorarioDiv>
                        <HoraButton id="Sol" onClick={() => {mudaHora(0)}} 
                        style={{color: hora === 0 ?`${global.colors.laranja}` : '', 
                        borderBottom: hora === 0 ? `0.5vh solid ${global.colors.laranja}` : '',
                        fontWeight: hora === 0 ? '700' : ''}}>
                            Almoço
                        </HoraButton>

                        <HoraButton id="Lua" onClick={() => {mudaHora(1)}} 
                        style={{color: hora === 1 ?`${global.colors.laranja}` : '', 
                        borderBottom: hora === 1 ? `0.5vh solid ${global.colors.laranja}` : '',
                        fontWeight: hora === 1 ? '700' : ''}}>
                            Jantar
                        </HoraButton>
                    </HorarioDiv>
                </ActionsDiv>
                    <Conteudo id='conteudo' {...scrollEntreOsTurnos()}>
                        <Turno>
                            <Dia
                            hora={0}
                            cardapio={makePath(dia)}
                            />
                            <AvisoAtt>Atualizado em: {`${getAtt(ruAtual + '')}`}</AvisoAtt>
                        </Turno>
                        <Turno>
                            <Dia
                            hora={1}
                            cardapio={makePath(dia)}
                            />
                            <AvisoAtt>Atualizado em: {`${getAtt(ruAtual + '')}`}</AvisoAtt>
                        </Turno>
                    </Conteudo>
                {
                    showInstallMessage &&
                    <DownPop/>
                }
            </>
            }
        </CardapioDiv>
    );
}
