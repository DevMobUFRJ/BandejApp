import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

import { PlaceHolderCabecalho, Shade, CabecaDiv, PageTitle, 
    DivAjustes, IconeAjustes, NotifDiv, NotifInside, SideButton, NotifIcon } from "./style";    

import SideBar from "../SideBar";

import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Cardapio/Ajustes.svg';
import Close from '../../Assets/SideBar/close.svg';

type Nome = { nome: string 
            setOpcoes?: Function};
const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

let aberto = true;

const toggleSide = (abrindo: boolean) => {
    const sidebar = document.getElementById('sidebar');
    const shade = document.getElementById('shade');
    const closeButton = document.getElementById('closeButton');
    if (!sidebar || !shade || !closeButton)
        return;

    shade.addEventListener('click', () => toggleSide(!abrindo));
    closeButton.addEventListener('click', () => toggleSide(!abrindo));

    requestAnimationFrame(() => {
        if (abrindo) {
            shade.style.display = 'block';
            sidebar.style.width = '72.22vw';
        }
        else {
            shade.style.display = 'none';
            sidebar.style.width = '0';
        }
    });
}

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
        <PlaceHolderCabecalho>
            <CabecaDiv style={{boxShadow:`${nome === 'Cardápio' ? '' : boxshadow}`}}>
                <NotifDiv onClick={() => toggleSide(true)}>
                    <SideButton src={Menu}/>

                    <NotifIcon style={{display: `${pendingNotification? '':'none'}`}}>
                        <NotifInside/>
                    </NotifIcon>
                </NotifDiv>

                <PageTitle>{nome}</PageTitle>

                <DivAjustes>
                    <IconeAjustes style={{display: `${nome === 'Cardápio' ? '' : 'none'}`}}
                    src={aberto ? Close : Ajustes} 
                    onClick={() => clique(fadeAjustes, setOpcoes)}/>
                </DivAjustes>

                <Shade id="shade"/>
                <SideBar fechaDiv={() => toggleSide(false)}/>
            </CabecaDiv>
        </PlaceHolderCabecalho>
    );
}