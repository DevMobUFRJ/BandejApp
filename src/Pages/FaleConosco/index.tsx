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

import { useState } from "react";

type copiado = {
    id: string;
    timeout: NodeJS.Timeout;
}

export default function FaleConosco() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    const emailRU = 'admruufrj@gmail.com';
    const form = 'https://docs.google.com/forms/d/e/1FAIpQLSctq79DYLYzK3IZ_dPuCewiu3g9gG46Px_ngzo5OzTLrtlDRA/viewform';

    const devmob = 'devmob@dcc.ufrj.br';

/*----------------------------------------------------------------------------*/

    const [copias, Copiar] = useState<Array<copiado>>([]);

    const copiando = async(id: string, texto: string) => {
        navigator.clipboard.writeText(texto);
        console.log(copias);
        const ultimoTimeout = copias.find(par => par.id === id)?.timeout;
        window.clearTimeout(ultimoTimeout);
        Copiar(copias.filter(par => par.timeout !== ultimoTimeout));

        const novoTimeout = await new Promise((): NodeJS.Timeout => {
            const timeout = setTimeout(() => {
                console.log('cabou');
                Copiar(copias.filter(par => par.id !== id));
            }, 2000);
            Copiar(copias.concat({id: id, timeout: timeout}));
            return timeout;
        })
        return novoTimeout;
    }

    const removerTimeout = (timeout: NodeJS.Timeout) {
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
                        <InfoLink id="ru" onClick={elem => copiando(elem.currentTarget.id, devmob)}>
                            <LinkName>{emailRU}</LinkName>
                            <LinkIcon src={copias?.find(par => par.id === 'ru')?Check:Copy}/>
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
                        <InfoLink id="devmob" onClick={elem => copiando(elem.currentTarget.id, devmob)}>
                            <LinkName>{devmob}</LinkName>
                            <LinkIcon src={copias?.find(par => par.id === 'devmob')?Check:Copy}/>
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