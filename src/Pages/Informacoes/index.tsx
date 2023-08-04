import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUp";

import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { useContext, useState } from "react";
import { SelecionaInfoDiv, InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle, 
        InfoUndertitle, InformDiv, InfoValor, BalaoInfo } from "./style";
import DropDown from "../../Components/DropDown";


export default function Informacoes() {

    const { showInstallMessage } = useContext(InstallMessageContext);

/*----------------------------------------------------------------------------*/

    const options = ['CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];
    const values = ['ct', 'central', 'lt', 'centro', 'pv', 'dc'];
    const [ruSelecionado, setRU] = useState('ct');

    return (
        <InformDiv>
            <Cabecalho nome="Informações"/>
            
            <SelecionaInfoDiv>
                <DropDown
                opcaoInicial={ruSelecionado}
                valoresState={values}
                valoresOpcoes={options}
                tela="info"
                alterarState={setRU}/>
            </SelecionaInfoDiv>

            <BalaoInfo>
                <InfoTitle>Horário de funcionamento</InfoTitle>

                <InfoGrid>
                    <InfoSubtitle>Segunda a Sexta:</InfoSubtitle>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Almoço</InfoUndertitle>
                            <InfoValor>10:30h às 15h</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Janta</InfoUndertitle>
                            <InfoValor>17:30 às 20h</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>

                <InfoGrid>
                    <InfoSubtitle>Finais de semana e feriados:</InfoSubtitle>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Almoço</InfoUndertitle>
                            <InfoValor>10:30h às 15h</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Janta</InfoUndertitle>
                            <InfoValor>17:30 às 20h</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>
            </BalaoInfo>

            <BalaoInfo>
                <InfoTitle>Preços</InfoTitle>

                <InfoGrid>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Alunos</InfoUndertitle>
                            <InfoValor>R$ 2,00</InfoValor>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Servidores</InfoUndertitle>
                            <InfoValor>R$ 14,00</InfoValor>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>
            </BalaoInfo>
            {
                showInstallMessage &&
                <DownPop/>
            }
        </InformDiv>
    );
}