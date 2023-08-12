import { CloseImg, ItemName, ItemsDiv, LogoImg, NotifDiv, NotifIcon, NotifNumber, SideBarDiv,
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
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

import { global } from "../../globalStyle";

export default function SideBar() {
    const history = useHistory();
    const { pendingNotification } = useContext(NotificationContext); 

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

    const rotaAtual = (onde: string):boolean => {
        return (history.location.pathname === onde)
    }

    const cliqueHandler = (aqui: string) => {
        if (!rotaAtual(aqui))
            history.push(aqui)
        else 
            CloseSide();
    }

    const nomesTelas = ['Avaliação', 'Informações', 'Fale conosco'];
    const rotasTelas = ['/Avaliacao', '/Informacoes', '/FaleConosco'];
    const icones = [Home, Comun, Aval, Info, Fale];
    const laranjar = 'invert(48%) sepia(90%) saturate(1570%)' +
                    'hue-rotate(352deg) brightness(98%) contrast(102%)';

    return (
        <SideDiv>      
            <NotifDiv onClick={OpenSide}>
                <NotifIcon style={{display: `${pendingNotification? '':'none'}`}}/>
                <SideImg src={Menu}/>
            </NotifDiv>

            <SideBarDiv id="sidebar">
                <SideHeader>
                    <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                    <CloseImg id="closeButton" src={Close} onClick={CloseSide}/>
                </SideHeader>

{/*--------------------------------------------------------------------------*/}

                <ItemsDiv>

                    <SideItem onClick={() => cliqueHandler('/Cardapio')}>
                        <SideIcon src={Home} style={{filter: rotaAtual('/Cardapio') ? laranjar : ''}}/>
                        <ItemName style={{color: rotaAtual('/Cardapio') ? `${global.colors.laranja}`: ' '}}>Cardápio</ItemName>
                    </SideItem>

                    <SideItem style={{gridTemplateColumns: "16% auto auto"}} onClick={() => cliqueHandler('/Notificacao')}>
                        <SideIcon src={Comun} style={{filter: rotaAtual('/Notificacao') ? laranjar : ''}}/>
                        <ItemName style={{color: rotaAtual('/Notificacao') ? `${global.colors.laranja}`: ' '}}>Comunicados</ItemName>
                        {pendingNotification ?
                            <NotifNumber>Cadu</NotifNumber>
                            : null
                        }
                    </SideItem>
                    {
                        rotasTelas.map((rota, indice) => 
                            <SideItem onClick={() => cliqueHandler(rota)}>
                                <SideIcon src={icones[indice]} style={{filter: rotaAtual(rota) ? laranjar : ''}}/>
                                <ItemName style={{color: rotaAtual(rota) ? `${global.colors.laranja}`: ' '}}>
                                    {nomesTelas[indice]}
                                </ItemName>
                            </SideItem>
                        )
                    }
                </ItemsDiv>
            </SideBarDiv>
        </SideDiv>
    );
}