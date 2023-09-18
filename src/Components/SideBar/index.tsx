import { CloseImg, InstitutoDiv, ItemName, 
    ItemsDiv, Linha, LogoImg, NotifNumber, 
    SideBarDiv, SideHeader, SideIcon, SideItem,
    Versao, FecharDiv, TextoFechar } from "./style";

import Logo from '../../Assets/SideBar/logo.svg';
import Close from '../../Assets/Close.svg';
import Home from '../../Assets/SideBar/cardapio.svg';
import Aval from '../../Assets/SideBar/avaliacao.svg';
import Comun from '../../Assets/SideBar/comunicados.svg';
import Info from '../../Assets/SideBar/sobrenos.svg';
import Fale from '../../Assets/SideBar/faleconosco.svg';

import { useHistory } from "react-router-dom";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext } from "react";

import { global } from "../../globalStyle";

import logoIC from '../../Assets/FaleConosco/LogoIC.svg';
import logoUfrj from '../../Assets/FaleConosco/LogoUFRJ.svg';
import logoDevMob from '../../Assets/SideBar/DevMob.svg'

type props = {
    fechaDiv: Function 
}

export default function SideBar({fechaDiv}: props) {
    const history = useHistory();
    const { pendingNotification } = useContext(NotificationContext); 

    const rotaAtual = (onde: string):boolean => {
        return (history.location.pathname === onde)
    }

    const cliqueHandler = (aqui: string) => {
        if (!rotaAtual(aqui))
            history.push(aqui)
        else 
            fechaDiv();
    }

    const nomesTelas = ['Cardapio', 'Comunicados', 'Avaliação', 'Informações', 'Fale conosco'];
    const rotasTelas = ['/Cardapio', '/Notificacao', '/Avaliacao', '/Informacoes', '/FaleConosco'];
    const icones = [Home, Comun, Aval, Info, Fale];
    const laranjar = 'invert(48%) sepia(90%) saturate(1570%)' +
                    'hue-rotate(352deg) brightness(98%) contrast(102%)';

    return (    
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                <Versao>Versão 0.0.3</Versao>
            </SideHeader>

{/*--------------------------------------------------------------------------*/}

            <ItemsDiv>
                {
                    rotasTelas.map((rota, indice) => 
                        <SideItem key={indice} onClick={() => cliqueHandler(rota)}>
                            <SideIcon src={icones[indice]} alt={nomesTelas[indice]} style={{filter: rotaAtual(rota) ? laranjar : ''}}/>
                            <ItemName style={{color: rotaAtual(rota) ? `${global.colors.laranja}`: ' '}}>
                                {nomesTelas[indice]}
                            </ItemName>
                            {(pendingNotification && nomesTelas[indice] === "Comunicados") ?
                                <NotifNumber></NotifNumber>
                                : null
                            }
                        </SideItem>
                    )
                }
            </ItemsDiv>
            <InstitutoDiv>
                <img src={logoIC} style={{width: '35%'}}
                alt="Logo do Institudo de Computação da UFRJ."/>
                <Linha/>
                <img src={logoDevMob} style={{width: '22%', padding: '0 6.5% 0 6.5%'}}
                alt="Logo da Universidade Federal do Rio de Janeiro."/>
            </InstitutoDiv>
            <FecharDiv onClick={() => fechaDiv()}>
                <CloseImg id="closeButton" src={Close} alt='Ícone para fechar menu lateral'/>
                <TextoFechar>Fechar</TextoFechar>
            </FecharDiv>
        </SideBarDiv>
    );
}