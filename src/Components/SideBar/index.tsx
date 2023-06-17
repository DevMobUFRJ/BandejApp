import { CloseImg, ItemName, ItemsDiv, LogoImg, SideBarDiv,
    SideDiv, SideHeader, SideIcon,
    SideImg, SideItem } from "./style";

import Menu from '../../Assets/SideBar/menu.svg';
import Logo from '../../Assets/SideBar/logo.svg';
import Close from '../../Assets/SideBar/close.svg';
import Home from '../../Assets/SideBar/cardapio.svg';
import Aval from '../../Assets/SideBar/avaliacao.svg';
import Comun from '../../Assets/SideBar/comunicados.svg';
import Info from '../../Assets/SideBar/sobrenos.svg';
import Fale from '../../Assets/SideBar/faleconosco.svg';

import { useHistory } from "react-router-dom";

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
            if(sidebar) sidebar.style.width = '72.22vw';
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
            <SideImg onClick={OpenSide} src={Menu}/>
            <SideBarDiv id="sidebar">
                <SideHeader>
                    <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                    <CloseImg id="closeButton" src={Close} onClick={CloseSide}/>
                </SideHeader>

{/*--------------------------------------------------------------------------*/}

                <ItemsDiv>
                    <SideItem onClick={() => {(history.location.pathname !== '/Cardapio') ? history.push('/Cardapio') : CloseSide()}}>
                        <SideIcon src={Home}/>
                        <ItemName>Cardápio</ItemName>
                    </SideItem>

                    <SideItem onClick={() => {(history.location.pathname !== '/Notificacao') ? history.push('/Notificacao') : CloseSide()}}>
                        <SideIcon src={Comun}/>
                        <ItemName>Comunicados</ItemName>
                    </SideItem>

                    <SideItem onClick={() => {(history.location.pathname !== '/Avaliacao') ? history.push('/Avaliacao') : CloseSide()}}>
                        <SideIcon src={Aval}/>
                        <ItemName>Avaliação</ItemName>
                    </SideItem>

                    <SideItem onClick={() => {(history.location.pathname !== '/Avaliacao') ? history.push('/Avaliacao') : CloseSide()}}>
                        <SideIcon src={Info}/>
                        <ItemName>Informações</ItemName>
                    </SideItem>

                    <SideItem onClick={() => {(history.location.pathname !== '/Avaliacao') ? history.push('/Avaliacao') : CloseSide()}}>
                        <SideIcon src={Fale}/>
                        <ItemName>Sobre</ItemName>
                    </SideItem>
                </ItemsDiv>
            </SideBarDiv>
        </SideDiv>
    );
}