import SideBar from "../SideBar";
import { PlaceHolderCabecalho, BlurDiv, CabecaDiv, PageTitle, 
        DivAjustes, IconeAjustes, NotifDiv, NotifInside, SideButton, NotifIcon } from "./style";
import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Ajustes.svg';
import Close from '../../Assets/Close.svg';
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

type Nome = { nome: string 
            setOpcoes?: Function};
const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

let aberto = true;

const toggleSide = (abrindo: boolean) => {
    const sidebar = document.getElementById('sidebar');
    const blurdiv = document.getElementById('blurdiv');
    const closeButton = document.getElementById('closeButton');
    if (!sidebar || !blurdiv || !closeButton)
        return;

    blurdiv.addEventListener('click', () => toggleSide(!abrindo));
    closeButton.addEventListener('click', () => toggleSide(!abrindo));

    requestAnimationFrame(() => {
        if (abrindo) {
            blurdiv.classList.add('sideBlur');
            sidebar.style.width = '72.22vw';
        }
        else {
            blurdiv.classList.remove('sideBlur');
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
                <BlurDiv id="blurdiv"/>
                <SideBar fechaDiv={() => toggleSide(false)}/>
                <NotifDiv onClick={() => toggleSide(true)}>
                    <NotifIcon>
                        <NotifInside style={{display: `${pendingNotification? '':'none'}`}}/>
                    </NotifIcon>
                    <SideButton src={Menu}/>
                </NotifDiv>
                <PageTitle>{nome}</PageTitle>
                <DivAjustes>
                    <IconeAjustes style={{display: `${nome === 'Cardápio' ? '' : 'none'}`}}
                    src={aberto ? Close : Ajustes} 
                    onClick={() => clique(fadeAjustes, setOpcoes)}/>
                </DivAjustes>
            </CabecaDiv>
        </PlaceHolderCabecalho>
    );
}