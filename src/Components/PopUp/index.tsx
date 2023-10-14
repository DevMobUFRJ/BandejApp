import ReactDOM from "react-dom";
import { PopButton, PopButtonDiv, PopDiv, PopOuterDiv, PopTitulo } from "./style";

type PopInfo = {
    mostrar: boolean;
    titulo: string;
    componente?: JSX.Element;
    opcoes: Array<string>;
    tiposOpcoes: Array<number>;
    funcoesOpcoes: Array<Function>;
}

export default function PopUp(
    {mostrar, titulo, componente, opcoes, tiposOpcoes, funcoesOpcoes}: PopInfo
) {
    if(!mostrar) return null;

    const blurdiv = document.getElementById('BlurDiv');
    if(blurdiv) return (
        ReactDOM.createPortal(
            <PopOuterDiv id="popOuter">
                <PopDiv id="popup">
                    <PopTitulo>{titulo}</PopTitulo>
                    {
                        componente
                    }
                    <PopButtonDiv>
                        { opcoes?.map((opcao, index) =>
                            <PopButton key={index}
                                className={tiposOpcoes[index] === 1? 'segundoTipo':''}
                                onClick={() => funcoesOpcoes[index]()}
                            >
                                {opcao}
                            </PopButton>
                        )}
                    </PopButtonDiv>
                </PopDiv>
            </PopOuterDiv>
        , blurdiv)
    );
    else return null;
}