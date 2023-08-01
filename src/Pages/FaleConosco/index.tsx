import Cabecalho from "../../Components/Cabecalho";
import { BalaoBanner, BalaoDescription, BalaoInfo, BalaoTitle,
    FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./style";

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';
import DevMobBanner from '../../Assets/FaleConosco/devmobBanner.svg';
import RUbanner from '../../Assets/FaleConosco/ruBanner.svg';


export default function FaleConosco() {

    const emailRU = 'admruufrj@gmail.com';
    const devmob = 'devmob'

    return (
        <FaleDiv>
            <Cabecalho nome='Fale conosco'/>
        
            <BalaoInfo>
                <BalaoBanner src={RUbanner}/>
                <div>
                    <BalaoTitle>Restaurante Universitário UFRJ</BalaoTitle>
                    <BalaoDescription>
                        Elogios, sugestões e/ou reclamações?
                        Fale com a gente através do formulário ou email.
                    </BalaoDescription>
                    <Links>
                        <InfoLink onClick={() => navigator.clipboard.writeText(emailRU)}>
                            <LinkName>email@gmail.com</LinkName>
                            <LinkIcon src={Copy}/>
                        </InfoLink>
                        <InfoLink href={'mailto: iagocesarts@gmail.com'}>
                            tem q colocar o link do form q eu não achei
                            <LinkName>Abrir formulário</LinkName>
                            <LinkIcon src={Redirect}/>
                        </InfoLink>
                    </Links>
                </div>
            </BalaoInfo>

            <BalaoInfo>
                <BalaoBanner src={DevMobBanner}/>
                <div>
                    <BalaoTitle>DevMob</BalaoTitle>
                    <BalaoDescription>
                        Fale com a equipe DevMob para tirar dúvidas,
                        enviar sugestões e tudo mais relacionado ao App.
                    </BalaoDescription>
                </div>
            </BalaoInfo>
        </FaleDiv>
    );
}