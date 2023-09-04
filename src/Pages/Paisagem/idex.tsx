import { BandejAppLogo, Disgurpa, PaisagemDiv, PaisagemErro } from "./style";

import Logo from '../../Assets/Paisagem/LogoBandejapp.svg';

export default function Paisagem() {
    return (
        <PaisagemDiv>
            <Disgurpa>Desculpe !!!</Disgurpa>

            <PaisagemErro>
                A nossa página ainda não está disponível
                para esta visão.
            </PaisagemErro>

            <BandejAppLogo src={Logo}/>
        </PaisagemDiv>
    );
}