import { CloseImg, Direita, ItemName, ItemsDiv, LogoImg, LogoUfrj, NotifNumber, 
        Rodape, 
        SideBarDiv, SideHeader, SideIcon, SideItem, Versao } from "./style";

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

import Ru from '../../Assets/SideBar/logo-ru.svg';
import Ufrj from '../../Assets/SideBar/logo-ufrj.svg';

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
                <CloseImg id="closeButton" src={Close} onClick={fechaDiv()}/>
            </SideHeader>

{/*--------------------------------------------------------------------------*/}

            <ItemsDiv>
                {
                    rotasTelas.map((rota, indice) => 
                        <SideItem key={indice} onClick={() => cliqueHandler(rota)}>
                            <SideIcon src={icones[indice]} style={{filter: rotaAtual(rota) ? laranjar : ''}}/>
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
            <Rodape>
                <img src={Ru} alt="Logo do RU"/>
                <Direita>
                    <LogoUfrj src={Ufrj} alt="Logo da UFRJ"/>
                    <Versao>Versão 0.0.2</Versao>
                </Direita>
            </Rodape>
        </SideBarDiv>
    );
}