import { CloseImg, SideBarDiv, SideDiv, SideFillDiv, SideHeader, SideIcon, SideImg, SideItem, SideTitle } from "./style";

import Menu from '../../Assets/Cardapio/Menu.svg';
import Close from '../../Assets/Cardapio/Close.svg';

import Home from '../../Assets/Cardapio/Home.svg';
import Aval from '../../Assets/Cardapio/AvaliacaoIcon.svg';
import Comun from '../../Assets/Cardapio/Notification.svg';
import { useHistory } from "react-router-dom";
import { BlurDiv } from "../../Pages/Cardapio/style";

export default function SideBar() {
    const history = useHistory();

    const OpenSide = () => {
        const sidebar = document.getElementById('sidebar');
        const blurdiv = document.getElementById('blurdiv');
        const closeButton = document.getElementById('closeButton');

        blurdiv?.addEventListener('click', CloseSide);
        closeButton?.addEventListener('click', CloseSide);

        requestAnimationFrame(() => {
            blurdiv?.classList.add('sideBlur');
            if(sidebar) sidebar.style.width = '71.96vw';
        });
    }

    const CloseSide = () => {
        const sidebar = document.getElementById('sidebar');
        const blurdiv = document.getElementById('blurdiv');
        const closeButton = document.getElementById('closeButton');

        blurdiv?.classList.remove('sideBlur');

        requestAnimationFrame(() => {
            if(sidebar) sidebar.style.width = '0';
        });

        blurdiv?.removeEventListener('click', CloseSide);
        closeButton?.removeEventListener('click', CloseSide);
    }


    return (
        <SideDiv>      
            <BlurDiv id="blurdiv"/>
            <SideImg onClick={OpenSide} src={Menu}/>
            <SideBarDiv id="sidebar">
                <SideHeader>
                    <SideTitle>MENU</SideTitle>
                    <CloseImg id="closeButton" src={Close} onClick={CloseSide}/>
                </SideHeader>

{/*--------------------------------------------------------------------------*/}

                <SideItem onClick={() => {(history.location.pathname !== '/Cardapio') ? history.push('/Cardapio') : CloseSide()}}>
                    <SideIcon src={Home}/>
                    Início
                </SideItem>

                <SideFillDiv/>

                <SideItem onClick={() => {(history.location.pathname !== '/Avaliacao') ? history.push('/Avaliacao') : CloseSide()}}>
                    <SideIcon src={Aval}/>
                    Avaliação
                </SideItem>

                <SideFillDiv/>

                <SideItem onClick={() => {(history.location.pathname !== '/Notificacao') ? history.push('/Notificacao') : CloseSide()}}>
                    <SideIcon src={Comun}/>
                    Comunicados
                </SideItem>
            </SideBarDiv>
        </SideDiv>
    );
}