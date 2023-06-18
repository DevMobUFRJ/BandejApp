import Cabecalho from "../../Components/Cabecalho";
import { InformDiv } from "./style";

export default function Informacoes() {
    return (
        <InformDiv>
            <Cabecalho nome="Informações"/>
            <h3 style={{margin: '10vh 0 0 0'}}>
                ESSA PÁGINA ESTÁ EM ANDAMENTO,
                VOLTE MAIS TARDE :)
            </h3>

            
            <h2>OU</h2>

            <h3>
                CONSULTE SEU DESENVOLVEDOR MAIS PRÓXIMO :)
            </h3>
        </InformDiv>
    );
}