import Cabecalho from "../../Components/Cabecalho";
import { BalaoDescription, BalaoInfo, BalaoTitle,
    FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./style";

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';

export default function FaleConosco() {
    return (
        <FaleDiv>
            <Cabecalho nome="Fale conosco"/>

            <BalaoInfo>
                <BalaoTitle>Restaurante Universitário UFRJ</BalaoTitle>
                <BalaoDescription>
                    Elogios, sugestões e/ou reclamações? 
                    Fale com a gente através do formulário ou email.
                </BalaoDescription>

                <Links>
                    <InfoLink href={'mailto: iagocesarts@gmail.com'}>
                        <LinkName>email@gmail.com</LinkName>
                        <LinkIcon src={Copy}/>
                    </InfoLink>

                    <InfoLink href={'mailto: iagocesarts@gmail.com'}>
                        <LinkName>email@gmail.com</LinkName>
                        <LinkIcon src={Redirect}/>
                    </InfoLink>
                </Links>
            </BalaoInfo>

            <BalaoInfo>
                <BalaoTitle>DevMob</BalaoTitle>
                <BalaoDescription>
                    Fale com a equipe DevMob para tirar dúvidas, 
                    enviar sugestões e tudo mais relacionado ao App.
                </BalaoDescription>
            </BalaoInfo>
        </FaleDiv>
    );
}