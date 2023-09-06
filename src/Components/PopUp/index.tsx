import { PopButton, PopButtonDiv, PopDiv, PopOuterDiv, PopTexto, PopTitulo } from "./style";

type PopInfo = {
    opcoes: Array<string>;
    tiposOpcoes: Array<number>;
    abreFecha: Function;
    titulo: string;
    texto: string;
}

export default function PopUp(
    {opcoes, tiposOpcoes, abreFecha, titulo, texto}: PopInfo
) {
    const fecha = (indice: number) => {
        if (indice === 0)
            abreFecha(false);
        else
            return;
    }
    return (
        <PopOuterDiv id="popupDiv">
            <PopDiv id="popup">
                <PopTitulo>{titulo}</PopTitulo>
                <PopTexto>{texto}</PopTexto>
                <PopButtonDiv>
                    { opcoes?.map((opcao, index) =>
                        <PopButton key={index}
                        className={tiposOpcoes[index] === 1? 'segundoTipo':''}
                        onClick={() => fecha(index)}
                        >
                            {opcao}
                        </PopButton>
                    )}
                </PopButtonDiv>
            </PopDiv>
        </PopOuterDiv>
    );
}