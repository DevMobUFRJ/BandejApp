import Cabecalho from "../../Components/Cabecalho";
import { InformDiv } from "./style";

export default function Informacoes() {
    return (
        <InformDiv>
            <Cabecalho nome="Informações"/>
            <h1 style={{margin: '10vh 0 0 0'}}>
                ESSA PÁGINA ESTÁ EM ANDAMENTO,
                VOLTE MAIS TARDE OU CONSULTE
                SEU DESENVOLVEDOR MAIS PRÓXIMO :)
            </h1>
        </InformDiv>
    );
}