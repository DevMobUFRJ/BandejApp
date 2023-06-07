import { ExplicDiv, ExplicImg, ExplicTexto, 
        ExplicTitulo, ExplicProximo, ExplicBg } from "./style";
import BotaoNext from "../../Assets/Tutorial/NextButton.svg";
import Background from "../../Assets/Tutorial/BgInicial.svg";

type info = {
    display: boolean;
    descricao: string;
    titulo: string;
    imagem: string;
    nextPage: Function;
    width: string;
}

export default function Explicacao(
    {descricao, titulo, imagem, display, nextPage, width}: info
) {
    return (
        <ExplicDiv style={{display: display?'flex':'none'}}>
            <ExplicBg src={Background}/>
            <ExplicImg src={imagem} style={{width: width}}/>
            <ExplicTitulo>{titulo}</ExplicTitulo>
            <ExplicTexto>{descricao}</ExplicTexto>
            <ExplicProximo src={BotaoNext} alt="Avançar" onClick={()=>nextPage()}/>
        </ExplicDiv>
    );
};