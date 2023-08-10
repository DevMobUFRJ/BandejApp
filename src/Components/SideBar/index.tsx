import { CloseImg, ItemName, ItemsDiv, LogoImg, NotifNumber, 
        SideBarDiv, SideHeader, SideIcon, SideItem } from "./style";

import Logo from '../../Assets/SideBar/logo.svg';
import Close from '../../Assets/SideBar/close.svg';
import Home from '../../Assets/SideBar/cardapio.svg';
import Aval from '../../Assets/SideBar/avaliacao.svg';
import Comun from '../../Assets/SideBar/comunicados.svg';
import Info from '../../Assets/SideBar/sobrenos.svg';
import Fale from '../../Assets/SideBar/faleconosco.svg';

import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

type props = {
    fechaDiv: Function 
}

export default function SideBar({fechaDiv}: props) {
    const history = useHistory();
    const { pendingNotification } = useContext(NotificationContext); 

    return (
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                <CloseImg id="closeButton" src={Close} onClick={fechaDiv()}/>
            </SideHeader>

{/*--------------------------------------------------------------------------*/}

            <ItemsDiv>
                <SideItem onClick={() => {(history.location.pathname !== '/Cardapio') ? history.push('/Cardapio') : fechaDiv}}>
                    <SideIcon src={Home}/>
                    <ItemName>Cardápio</ItemName>
                </SideItem>

                <SideItem style={{gridTemplateColumns: "16% auto auto"}} onClick={() => {(history.location.pathname !== '/Notificacao') ? history.push('/Notificacao') : fechaDiv}}>
                    <SideIcon src={Comun}/>
                    <ItemName>Comunicados</ItemName>
                    {pendingNotification ?
                        <NotifNumber>Cadu</NotifNumber>
                        : null
                    }
                </SideItem>

                <SideItem onClick={() => {(history.location.pathname !== '/Avaliacao') ? history.push('/Avaliacao') : fechaDiv}}>
                    <SideIcon src={Aval}/>
                    <ItemName>Avaliação</ItemName>
                </SideItem>

                <SideItem onClick={() => {(history.location.pathname !== '/Informacoes') ? history.push('/Informacoes') : fechaDiv}}>
                    <SideIcon src={Info}/>
                    <ItemName>Informações</ItemName>
                </SideItem>

                <SideItem onClick={() => {(history.location.pathname !== '/FaleConosco') ? history.push('/FaleConosco') : fechaDiv}}>
                    <SideIcon src={Fale}/>
                    <ItemName>Fale conosco</ItemName>
                </SideItem>
            </ItemsDiv>
        </SideBarDiv>
    );
}