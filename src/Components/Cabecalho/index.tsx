import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";
import { abrirSideBar } from "../../Functions/SideBar/abrirEfechar";

import { PlaceHolderCabecalho, CabecaDiv, PageTitle, DivAjustes, IconeAjustes,
    NotifDiv, NotifInside, SideButton, NotifIcon } from "./style";

import SideBar from "../SideBar";
import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Cardapio/Ajustes.svg';
import Close from '../../Assets/Close.svg';

type Nome = { 
    nome: string;
    setOpcoes?: Function;
}

const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
let aberto = true;

const fadeAjustes = (abrindo: boolean, setOpcoes: Function) => {
    const acoes = document.getElementById('acoes');
    const conteudo = document.getElementById('conteudo');
    if (!acoes || !conteudo)
        return;

    requestAnimationFrame(() => {
        if (!abrindo) {
            acoes.style.opacity = '0';
            acoes.style.pointerEvents = 'none';
            conteudo.style.marginTop = '0';
        }
        else {
            acoes.style.opacity = '1';
            acoes.style.pointerEvents = 'auto';
            conteudo.style.marginTop = '29vh';
        }
    })

    setOpcoes(abrindo);
};

const clique = (controle?: Function, setar?: Function) => {
    if (controle) {
        controle(!aberto, setar); 
        aberto = !aberto;
    }
}

export default function Cabecalho({nome, setOpcoes}: Nome) {
    const { pendingNotification } = useContext(NotificationContext);

    return (
        <PlaceHolderCabecalho style={window.innerWidth/window.innerHeight <= 1 ? {height: 'calc(8vh + 2.25vh)'} : {height: 'unset', width: '100%'}}
            // style={{height: (window.innerWidth/window.innerHeight) <= 1 ? 'calc(8vh + 2.25vh)' : 'unset'}}
        >
            <SideBar/>
    
            {(window.innerWidth/window.innerHeight) <= 1 &&
                <CabecaDiv style={{boxShadow:`${nome === 'Cardápio' ? '' : boxshadow}`}}>
                    <NotifDiv onClick={abrirSideBar}>
                        <SideButton src={Menu} alt='Ícone para abrir o menu lateral'/>

                        <NotifIcon style={{display: `${pendingNotification? '':'none'}`}}>
                            <NotifInside/>
                        </NotifIcon>
                    </NotifDiv>

                    <PageTitle>{nome}</PageTitle>

                    <DivAjustes>
                        <IconeAjustes style={{display: `${nome === 'Cardápio' ? '' : 'none'}`}}
                        src={aberto ? Close : Ajustes} 
                        alt={aberto ? 'Ícone para fechar ajustes' : 'Ícone para abrir ajustes'} 
                        onClick={() => clique(fadeAjustes, setOpcoes)}/>
                    </DivAjustes>
                </CabecaDiv>}
        </PlaceHolderCabecalho>
    );
}