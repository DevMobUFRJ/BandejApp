import { PopButton, PopButtonDiv, PopDiv, PopTexto, PopTitulo } from "./style";

type PopInfo = {
    opcoes?: Array<string>;
    tiposOpcao: Array<number>;
    titulo?: string;
    texto?: string;
}

export default function PopUp(
    {opcoes, tiposOpcao, titulo, texto}: PopInfo
) {
    return (
        <PopDiv id="popup" className="">
            <PopTitulo>{titulo}</PopTitulo>
            <PopTexto>{texto}</PopTexto>

            <PopButtonDiv>
                { opcoes?.map((opcao, index) => 
                    <PopButton
                    key={index} className={tiposOpcao[index] === 1? 'segundoTipo':''}>
                        {opcao}
                    </PopButton>
                )}
            </PopButtonDiv>
        </PopDiv>
    );
}