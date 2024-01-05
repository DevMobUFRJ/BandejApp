import { useHistory } from "react-router-dom";

import { InstitutoDiv, ItemName, 
    ItemsDiv, Linha, LogoImg, NotifNumber, 
    SideBarDiv, SideHeader, SideIcon, SideItem,
    Versao, MostrarCreditos } from "./styleWeb";

import { global } from "../../globalStyle";
import PopUp from "../PopUp";
import Creditos from "../PopUp/Creditos";

import Logo from '../../Assets/SideBar/logo.svg';
import LogoIC from '../../Assets/SideBar/LogoIC.svg';
import LogoDevmob from '../../Assets/SideBar/LogoDevmob.svg';

type SideBarProps = { 
    pendingNotification: boolean;
    mostrarPopup: Function;
    rotaAtual: Function;
    nomesTelas: string[];
    rotasTelas: string[];
    icones: string[];
    laranjar: string;
    versao: string;
}

export default function SideBarWeb({pendingNotification, mostrarPopup, rotaAtual, nomesTelas, rotasTelas, icones, laranjar, versao}: SideBarProps) {
    const history = useHistory();

    return (    
        <SideBarDiv id="sidebar">
            <SideHeader>
                <LogoImg src={Logo} alt="Logo do aplicativo BandejApp."/>
                {/* <Versao>Versão {versao} · <MostrarCreditos onClick={() => mostrarPopup('creditos')}>
                        Ver créditos
                    </MostrarCreditos>
                </Versao> */}
            </SideHeader>

            <PopUp popID='creditos' titulo="Créditos"
                opcoes={['Fechar']} tiposOpcoes={[0]}
                funcoesOpcoes={[mostrarPopup]}
                componente={<Creditos/>}
            />

{/*--------------------------------------------------------------------------*/}
{/* `3px solid ${global.colors.laranja};` */}
            <ItemsDiv>
            {
                rotasTelas.map((rota, indice) => 
                    <SideItem key={indice} style={{ borderBottomColor:  rotaAtual(rota) ? global.colors.laranja : ''}} onClick={() => {
                        if(!rotaAtual(rota)) history.push(rota);
                    }}>

                        <SideIcon src={icones[indice]} alt={nomesTelas[indice]}
                            style={{filter: rotaAtual(rota) ? laranjar : ''}}
                        />

                        <ItemName style={{color: rotaAtual(rota) ? `${global.colors.laranja}`: ' '}}>
                            {nomesTelas[indice]}
                        </ItemName>

                        {(pendingNotification && nomesTelas[indice] === "Comunicados") ?
                            <NotifNumber/>
                            :
                            null
                        }
                    </SideItem>
                )
            }
            </ItemsDiv>

            {/* <InstitutoDiv>
                <img src={LogoIC} style={{width: '35%'}}
                alt="Logo do Institudo de Computação da UFRJ."/>
                <Linha/>
                <img src={LogoDevmob} style={{width: '22%', padding: '0 6.5% 0 6.5%'}}
                alt="Logo da Universidade Federal do Rio de Janeiro."/>
            </InstitutoDiv> */}
        </SideBarDiv>
    );
}