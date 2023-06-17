import SideBar from "../SideBar";
import { BlurDiv, CabecaDiv, PageTitle } from "./style";

type Nome = { nome: string };

export default function Cabecalho({nome}: Nome) {
    return (
        <CabecaDiv>
            <BlurDiv id="blurdiv"/>
            <SideBar/>
            <PageTitle>{nome}</PageTitle>
        </CabecaDiv>
    );
}