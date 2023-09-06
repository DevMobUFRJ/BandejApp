import { PopButton, PopButtonDiv, PopDiv, PopOuterDiv, PopTexto, PopTitulo } from "./style";

type PopInfo = {
    opcoes: Array<string>;
    tiposOpcoes: Array<number>;
    funcoesOpcoes: Array<Function>;
    titulo: string;
    texto: string;
}

export default function PopUp(
    {opcoes, tiposOpcoes, funcoesOpcoes, titulo, texto}: PopInfo
) {
    return (
        <PopOuterDiv id="popupDiv">
            <PopDiv id="popup">
                <PopTitulo>{titulo}</PopTitulo>
                <PopTexto>{texto}</PopTexto>
                <PopButtonDiv>
                    { opcoes?.map((opcao, index) =>
                        <PopButton key={index}
                        className={tiposOpcoes[index] === 1? 'segundoTipo':''}
                        onClick={() => funcoesOpcoes[index]}
                        >
                            {opcao}
                        </PopButton>
                    )}
                </PopButtonDiv>
            </PopDiv>
        </PopOuterDiv>
    );
}