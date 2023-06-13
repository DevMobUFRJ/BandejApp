import { useEffect, useState } from "react";
import NavBar from "../../Components/Navbar";
import Horario from "../../Components/Horario";
import RUselect from "../../Components/RUselect";

import Dia from "../../Components/Dia";
import { ActionsDiv, AvisoAtt, CardapioDiv,
        DropHeader, HeaderDiv, PageTitle} from "./style";

import DownPop from "../../Components/PopUp";
import Load from "../../Components/Load";
import { ICardapioProps, ISemana } from "../../Types/storage";

import FontSize from "../../Functions/FontSize";
import SideBar from "../../Components/SideBar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cardapio() {
    const [cardapio, setCardapio] = useState<ICardapioProps>();

    const [dia, tggDia] = useState(0);
    const [hora, tggHora] = useState();
    const [showInstallMessage, setShowInstallMessage] = useState<boolean>()
    const [ruAtual, setRuAtual] = useState<string>();

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
        
        fetch(`${process.env.REACT_APP_CARDAPIO_API_URL}`)
            .then((data) => {
                return data.json();
            })
            .then((post) => {
                setCardapio(post);
                localStorage.setItem("bandejapp:ultimoCardapio", JSON.stringify(post));    
                setLoading(false)
            })
            .catch((error) => {
                toast.error("Erro de rede. Tente novamente mais tarde");
            });

    }, []);

    FontSize();

    function makePath(indexDia : Number){
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
        case 0:
            return temp?.domingo;
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
        }
    }

    function getAtt (restaurante: string)
    {
        let temp;
        switch(restaurante)
        {
            case 'ct':
                temp = cardapio?.ct.ultimaAtt;
                break;
            case 'pv':
                temp = cardapio?.pv.ultimaAtt;
                break;
            case 'dc':
                temp = cardapio?.dc.ultimaAtt;
                break;
            case 'mc':
                temp = cardapio?.mc.ultimaAtt;
                break;
        }
        return temp;
    }

/* - - - - - Fim das funções - - - - - */

    if(loading)
        return <Load />

    return(
        <CardapioDiv id="cardapio">
            <ToastContainer />
            <ActionsDiv>
                <HeaderDiv>
                    <SideBar/>
                    <PageTitle>Cardápio</PageTitle>
                </HeaderDiv>

                <DropHeader>
                    <RUselect text={localStorage.getItem("bandejapp:ruDefault") || ''} selecionaRU={selecionaRU}/>
                </DropHeader>

                <NavBar
                tggDia={tggDia}
                semana={cardapio?.semana as ISemana}/>

                <Horario
                hora={tggHora}/>
            </ActionsDiv>

            <Dia
            hora={hora}
            cardapio={makePath(dia)}
            />

            <AvisoAtt>Atualizado em: {`${getAtt(ruAtual + '')}`}</AvisoAtt>
            {
                showInstallMessage &&
                <DownPop/>
            }
        </CardapioDiv>
    );
}