import { useContext } from "react";
import { CreditosDiv, FooterDiv, InstitutoDiv, LogoBandejApp, MostrarCreditos, Versao } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

import Logo from '../../Assets/SideBar/logo.svg';
import LogoIC from '../../Assets/SideBar/LogoIC.svg';
import LogoDevmob from '../../Assets/SideBar/LogoDevmob.svg';
import { global } from "../../globalStyle";
import PopUp from "../PopUp";
import Creditos from "../PopUp/Creditos";

export default function Footer() {
  const { mostrarPopup } = useContext(PopupContext);

  return window.innerWidth/window.innerHeight > 1 ? (
    <FooterDiv>
      <PopUp popID='creditos' titulo="Créditos"
          opcoes={['Fechar']} tiposOpcoes={[0]}
          funcoesOpcoes={[mostrarPopup]}
          componente={<Creditos/>}
      />
      <CreditosDiv>
        <LogoBandejApp src={Logo} alt="Logo do aplicativo BandejApp."/>
        <Versao>Versão 1.0.3</Versao>
        <MostrarCreditos onClick={() => mostrarPopup('creditos')}>Ver créditos</MostrarCreditos>
      </CreditosDiv>
      <InstitutoDiv>
        <img src={LogoIC} style={{width: '8.75vw', borderRight: `1px solid ${global.colors.cinzaClaro}`, paddingRight: '2vw'}} alt="Logo do Institudo de Computação da UFRJ."/>
        <img src={LogoDevmob} style={{width: '5vw', marginLeft: '2vw'}} alt="Logo da Universidade Federal do Rio de Janeiro."/>
      </InstitutoDiv>
    </FooterDiv>
  ) : <></>;
}