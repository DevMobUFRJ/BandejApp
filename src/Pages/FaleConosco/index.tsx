import Cabecalho from "../../Components/Cabecalho";
import { BalaoBanner, BalaoDescription, BalaoInfo, BalaoTitle,
    FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./style";

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Check from '../../Assets/FaleConosco/check.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';
import DownPop from "../../Components/PopUp";
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { useContext } from "react";
import DevMobBanner from '../../Assets/FaleConosco/devmobBanner.svg';
import RUbanner from '../../Assets/FaleConosco/ruBanner.svg';
import copy from 'copy-to-clipboard';

type copiado = {
    id: string;
    ativo: boolean;
    timeout: NodeJS.Timeout;
}

export default function FaleConosco() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    const emailRU = 'admruufrj@gmail.com';

    const form = 'https://docs.google.com/forms/d/e/1FAIpQLSctq79DYLYzK3IZ_dPuCewiu3g9gG46Px_ngzo5OzTLrtlDRA/viewform';
    const devmob = 'devmob@dcc.ufrj.br';

    const timers: copiado[] = [];
    const copiar = (id: string, link: string) => {
        copy(link);

        const alvo = document.getElementById(id);
        if (!alvo) 
            return;

        const listado = timers.find((el) => el.id === id);

        if (!listado) {
            alvo.setAttribute('src', Check);
            const novoTimer = setTimeout(() => alvo.setAttribute('src', Copy), 2000)
            timers.push({id: id, ativo: true, timeout: novoTimer});
        }
        else {
            if (listado.ativo)
                window.clearTimeout(listado.timeout);
            else {
                alvo.setAttribute('src', Check);
                listado.ativo = true;
            }
            
            listado.timeout = setTimeout(() => {
                alvo.setAttribute('src', Copy)
                listado.ativo = false;
            }, 2000)
        }
    }


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
                        <InfoLink onClick={elem => copiar('ru', emailRU)}>
                            <LinkName>{emailRU}</LinkName>
                            <LinkIcon id='ru' src={Copy}/>
                        </InfoLink>
                        <InfoLink href={form}>
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
                    <Links>
                        <InfoLink onClick={elem => copiar('devmob', devmob)}>
                            <LinkName>{devmob}</LinkName>
                            <LinkIcon id='devmob' src={Copy}/>
                        </InfoLink>
                    </Links>
                </div>
            </BalaoInfo>
            {
                showInstallMessage &&
                <DownPop/>
            }
        </FaleDiv>
    );
}