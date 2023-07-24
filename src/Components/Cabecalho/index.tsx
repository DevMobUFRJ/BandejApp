import SideBar from "../SideBar";
import { BlurDiv, CabecaDiv, PageTitle } from "./style";

type Nome = { nome: string };
const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

export default function Cabecalho({nome}: Nome) {
    return (
        <CabecaDiv style={{boxShadow:`${nome === 'Cardapio' ? '' : boxshadow}`}}>
            <BlurDiv id="blurdiv"/>
            <SideBar/>
            <PageTitle>{nome}</PageTitle>
        </CabecaDiv>
    );
}