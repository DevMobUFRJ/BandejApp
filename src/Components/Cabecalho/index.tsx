import SideBar from "../SideBar";
import { CabecaDiv, PageTitle } from "./style";

type Nome = { nome: string };

export default function Cabecalho({nome}: Nome) {
    return (
        <CabecaDiv>
            <SideBar/>
            <PageTitle>{nome}</PageTitle>
        </CabecaDiv>
    );
}