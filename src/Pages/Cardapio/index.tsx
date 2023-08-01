import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar";
import Horario from "../../Components/Horario";
import RUselect from "../../Components/RUselect";

import Dia from "../../Components/Dia";
import { CardapioDiv, Sombra, ActionsDiv, 
        DropHeader, AvisoAtt, Conteudo} from "./style";

import DownPop from "../../Components/PopUp";
import Load from "../../Components/Load";
import { ICardapioProps, ISemana } from "../../Types/storage";

import FontSize from "../../Functions/FontSize";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";

export default function Cardapio() {
    const [cardapio, setCardapio] = useState<ICardapioProps>();

    const [dia, tggDia] = useState(0);
    const [hora, tggHora] = useState();
    const [showInstallMessage, setShowInstallMessage] = useState<boolean>()
    const [ruAtual, setRuAtual] = useState<string>();

    const [opcoes, setOpcoes] = useState(true);
    const [loading, setLoading] = useState(true);

    function selecionaRU(restaurante : string){
        localStorage.setItem("bandejapp:ruDefault", restaurante);
        setRuAtual(restaurante);
    }

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
      }
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);    
    
    useEffect(() => {
        if (isIos() && !isInStandaloneMode()) { 
            setShowInstallMessage(true);
        } else{
            setShowInstallMessage(false);
        }

        let ultimoCardapio = localStorage.getItem("bandejapp:ultimoCardapio");
        setRuAtual(localStorage.getItem("bandejapp:ruDefault") + '');
        if(ultimoCardapio){ 
            setCardapio(JSON.parse(ultimoCardapio));
            setLoading(false);
        }
        
        consultarCardapio();
    }, []);

    function consultarCardapio() {
        fetch(`${process.env.REACT_APP_CARDAPIO_API_URL}`)
            .then((data) => data.json())
            .then((post) => {
                // post = {}
                if(JSON.stringify(post) === "{}"){
                    if (loading === false)
                        toast.error("Erro ao consultar o servidor. Aguarde, em breve o cardápio será atualizado");

                    consultarCardapio();
                    return;
                }
                setCardapio(post);
                localStorage.setItem("bandejapp:ultimoCardapio", JSON.stringify(post));    
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Erro de rede. Tente novamente mais tarde");
            });
    }

    FontSize();

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

    if(loading)
        return <Load />

    return(
        <CardapioDiv id="cardapio">
            
            <ToastContainer />
            <Cabecalho nome="Cardápio" setOpcoes={setOpcoes}/>
            <Sombra style={{display: opcoes ? 'none' : ''}}/>

            <ActionsDiv id='acoes'>
                <DropHeader>
                    <RUselect text={localStorage.getItem("bandejapp:ruDefault") || ''}
                    selecionaRU={selecionaRU}/>
                </DropHeader>

                <NavBar
                tggDia={tggDia}
                semana={passaSemana(cardapio?.semana as ISemana)}/>
                <Horario
                hora={tggHora}/>
            </ActionsDiv>
            <Conteudo id='conteudo'>
                <Dia
                hora={hora}
                cardapio={makePath(dia)}
                />
                <AvisoAtt>Atualizado em: {`${getAtt(ruAtual + '')}`}</AvisoAtt>
                <AvisoAtt>Versão 0.0.2</AvisoAtt>
                {
                    showInstallMessage &&
                    <DownPop/>
                }
            </Conteudo>
        </CardapioDiv>
    );
}