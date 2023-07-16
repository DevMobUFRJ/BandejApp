import Cabecalho from "../../Components/Cabecalho";
import { BalaoInfo } from "../FaleConosco/style";
import { InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle, InfoUndertitle, InformDiv } from "./style";

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
                            <InfoTitle>10:30h às 15h</InfoTitle>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Janta</InfoUndertitle>
                            <InfoTitle>17:30 às 20h</InfoTitle>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>

                <InfoGrid>
                    <InfoSubtitle>Finais de semana e feriados:</InfoSubtitle>
                    <InfoArea>
                        <InfoBalao>
                            <InfoUndertitle>Almoço</InfoUndertitle>
                            <InfoTitle>10:30h às 15h</InfoTitle>
                        </InfoBalao>
                        <InfoBalao>
                            <InfoUndertitle>Janta</InfoUndertitle>
                            <InfoTitle>17:30 às 20h</InfoTitle>
                        </InfoBalao>
                    </InfoArea>
                </InfoGrid>
            </BalaoInfo>
        </InformDiv>
    );
}