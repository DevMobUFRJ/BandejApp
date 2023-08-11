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

    const ondeEstou = (ondeVou:string) => {
        if (history.location.pathname !== ondeVou)
            history.push(ondeVou);
        else
            fechaDiv();
    }

    return (
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                <CloseImg id="closeButton" src={Close} onClick={fechaDiv()}/>
            </SideHeader>

{/*--------------------------------------------------------------------------*/}

            <ItemsDiv>
                <SideItem onClick={() => ondeEstou('/Cardapio')}>
                    <SideIcon src={Home}/>
                    <ItemName>Cardápio</ItemName>
                </SideItem>

                <SideItem style={{gridTemplateColumns: "16% auto auto"}} onClick={() => {ondeEstou('/Notificacao')}}>
                    <SideIcon src={Comun}/>
                    <ItemName>Comunicados</ItemName>
                    {pendingNotification ?
                        <NotifNumber>Cadu</NotifNumber>
                        : null
                    }
                </SideItem>

                <SideItem onClick={() => {ondeEstou('/Avaliacao')}}>
                    <SideIcon src={Aval}/>
                    <ItemName>Avaliação</ItemName>
                </SideItem>

                <SideItem onClick={() => {ondeEstou('/Informacoes')}}>
                    <SideIcon src={Info}/>
                    <ItemName>Informações</ItemName>
                </SideItem>

                <SideItem onClick={() => {ondeEstou('/FaleConosco')}}>
                    <SideIcon src={Fale}/>
                    <ItemName>Fale conosco</ItemName>
                </SideItem>
            </ItemsDiv>
        </SideBarDiv>
    );
}