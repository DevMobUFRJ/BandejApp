import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar";
import Horario from "../../Components/Horario";
import RUselect from "../../Components/RUselect";

import Dia from "../../Components/Dia";
import { CardapioDiv, IconeAjustes, Sombra, ActionsDiv, 
        DropHeader, AvisoAtt, Conteudo} from "./style";

import DownPop from "../../Components/PopUp";
import Load from "../../Components/Load";
import { ICardapioProps, ISemana } from "../../Types/storage";

import FontSize from "../../Functions/FontSize";
import Ajustes from '../../Assets/Ajustes.svg';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";

let fading: NodeJS.Timer;
let interromper = false;
let consultando = false;

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
        if (consultando)
            return;
            
        consultando = true;
        fetch(`${process.env.REACT_APP_CARDAPIO_API_URL}`)
            .then((data) => data.json())
            .then((post) => {
                // post = {}
                if(JSON.stringify(post) === "{}"){
                    if (loading === false)
                        toast.error("Erro ao consultar o servidor. Aguarde, em breve o cardápio será atualizado");

                    setTimeout(()=> {
                        consultando = false;
                        consultarCardapio();
                    }, 500);
                    return;
                }
                setCardapio(post);
                localStorage.setItem("bandejapp:ultimoCardapio", JSON.stringify(post));    
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Erro de rede. Tente novamente mais tarde");
                setTimeout(()=> {
                    consultando = false;
                    consultarCardapio();
                }, 500);
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

    const fade = (abrindo: boolean) => {
        if (interromper)
            return;
        
        interromper = true;
        setTimeout(() => {
            interromper = false;
        }, 350)

        const direcao = abrindo ? 1 : -1;
        requestAnimationFrame(() => {
            const acoes = document.getElementById('acoes');
            const conteudo = document.getElementById('conteudo');
            if (!acoes || !conteudo)
                return;

            if (!acoes.style.opacity)
                acoes.style.opacity = '1';
                
            clearInterval(fading);
            acoes.style.display = 'flex';

            requestAnimationFrame (() => {
                conteudo.style.transition = '0.25s ease';
                conteudo.style.transform = `translateY(${28.5 * direcao}vh)`;
            });
            fading = setInterval (() => {
                requestAnimationFrame(() => {
                    let opacidade = parseFloat(acoes.style.opacity);
    
                    if ((abrindo && opacidade < 1) || (!abrindo && opacidade > 0))
                        acoes.style.opacity = `${opacidade + 0.02 * direcao}`
                    else {
                        clearInterval(fading);
                        requestAnimationFrame(() => {
                            if (!abrindo) {
                                acoes.style.display = 'none';
                                conteudo.style.marginTop = '0';
                            }
                            else {
                                conteudo.style.marginTop = '28.5vh';
                            }
                            conteudo.style.transition = '';
                            conteudo.style.transform = `translateY(0px)`;
                        })
                    }
                })
            }, 5);
        })
        setOpcoes(abrindo);
    };


/* - - - - - Fim das funções - - - - - */

    if(loading)
        return <Load />

    return(
        <CardapioDiv id="cardapio">
            
            <ToastContainer />
            <Cabecalho nome="Cardápio"/>
            <IconeAjustes src={Ajustes} onClick={() => fade(!opcoes)}/>
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