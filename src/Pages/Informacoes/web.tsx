import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import {
    SelecionaInfoDiv, InfoArea, InfoBalao, InfoGrid, InfoSubtitle, InfoTitle,
    InfoUndertitle, InformDiv, InfoValor, BalaoInfo, SelecionaInfoDivBlock, SubBalaoInfo, BaloesContainer
} from "./styleWeb";
import DropDown from "../../Components/DropDown";

type InformacoesProps = {
    showInstallMessage: boolean;
    options: string[];
    values: string[];
    ruSelecionado: string;
    setRU: React.Dispatch<React.SetStateAction<string>>;
    horarios: (option: string) => Array<string>;
};

export default function InformacoesWeb({ showInstallMessage, options, values, ruSelecionado, setRU, horarios }: InformacoesProps) {

    return (
        <InformDiv>
            <Cabecalho nome="Informações" />

            <SelecionaInfoDivBlock>
                <SelecionaInfoDiv>
                    <DropDown
                        height='4.69vw'
                        opcaoInicial={ruSelecionado}
                        valoresState={values}
                        valoresOpcoes={options}
                        tela="info"
                        alterarState={setRU} />
                </SelecionaInfoDiv>
            </SelecionaInfoDivBlock>

            <BaloesContainer>

                <BalaoInfo style={{ width: '20.47vw' }}>
                    <InfoTitle>Preços</InfoTitle>

                    <InfoGrid>
                        <InfoArea>
                            <InfoBalao style={{width: '13.20vw', height: '4.77vw'}}>
                                <InfoUndertitle>Alunos</InfoUndertitle>
                                <InfoValor>R$ 2,00</InfoValor>
                            </InfoBalao>
                            <InfoBalao style={{width: '13.20vw', height: '4.77vw'}}>
                                <InfoUndertitle>Servidores</InfoUndertitle>
                                <InfoValor>R$ {horarios(ruSelecionado)[4]}</InfoValor>
                            </InfoBalao>
                        </InfoArea>
                    </InfoGrid>
                </BalaoInfo>

                <BalaoInfo style={{ width: '46.64vw' }}>
                    <InfoTitle>Horário de funcionamento</InfoTitle>

                    <SubBalaoInfo>

                        <InfoGrid>
                            <InfoSubtitle>SEGUNDA A SEXTA:</InfoSubtitle>
                            <InfoArea>
                                <InfoBalao>
                                    <InfoUndertitle>Almoço</InfoUndertitle>
                                    <InfoValor>{`${horarios(ruSelecionado)[0]}`}</InfoValor>
                                </InfoBalao>
                                <InfoBalao>
                                    <InfoUndertitle>Jantar</InfoUndertitle>
                                    <InfoValor>{`${horarios(ruSelecionado)[1]}`}</InfoValor>
                                </InfoBalao>
                            </InfoArea>
                        </InfoGrid>

                        <InfoGrid>
                            <InfoSubtitle>FINAIS DE SEMANA E FERIADOS:</InfoSubtitle>
                            <InfoArea>
                                <InfoBalao>
                                    <InfoUndertitle>Almoço</InfoUndertitle>
                                    <InfoValor>{`${horarios(ruSelecionado)[2]}`}</InfoValor>
                                </InfoBalao>
                                <InfoBalao>
                                    <InfoUndertitle>Jantar</InfoUndertitle>
                                    <InfoValor>{`${horarios(ruSelecionado)[3]}`}</InfoValor>
                                </InfoBalao>
                            </InfoArea>
                        </InfoGrid>

                    </SubBalaoInfo>

                </BalaoInfo>

            </BaloesContainer>

            {
                showInstallMessage &&
                <DownPop />
            }
        </InformDiv>
    );
}