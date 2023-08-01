import Cabecalho from "../../Components/Cabecalho";
import RUselect from "../../Components/RUselect";
import { BalaoInfo } from "../FaleConosco/style";
import { InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle, 
        InfoUndertitle, InformDiv, InfoValor } from "./style";

export default function Informacoes() {
    return (
        <InformDiv>
            <Cabecalho nome="Informações"/>

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
        </InformDiv>
    );
}