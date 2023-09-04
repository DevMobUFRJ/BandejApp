import { BandejAppLogo, Disgurpa, PaisagemDiv, PaisagemErro } from "./style";

import Logo from '../../Assets/Paisagem/LogoBandejapp.svg';

export default function Paisagem() {
    return (
        <PaisagemDiv>
            <Disgurpa>Modo Paisagem</Disgurpa>

            <PaisagemErro>
                O BandejApp ainda não está disponível em modo paisagem mas já
                estamos trabalhando para resolver isso em breve !!!
            </PaisagemErro>
            <PaisagemErro>🚧👷🏽🛠️🚧</PaisagemErro>

            <BandejAppLogo src={Logo}/>
        </PaisagemDiv>
    );
}