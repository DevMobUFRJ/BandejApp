import Cabecalho from "../../Components/Cabecalho";
import { BalaoBanner, BalaoDescription, BalaoInfo, BalaoTitle,
    FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./style";

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Check from '../../Assets/FaleConosco/check.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';
import DevMobBanner from '../../Assets/FaleConosco/devmobBanner.svg';
import RUbanner from '../../Assets/FaleConosco/ruBanner.svg';

import { useState, useEffect } from "react";

type copiado = {
    id: string;
    timeout: NodeJS.Timeout;
}

export default function FaleConosco() {

    const emailRU = 'admruufrj@gmail.com';
    const form = 'https://docs.google.com/forms/d/e/1FAIpQLSctq79DYLYzK3IZ_dPuCewiu3g9gG46Px_ngzo5OzTLrtlDRA/viewform';
    const devmob = 'devmob@dcc.ufrj.br';

    const [copiado, Copiar] = useState<Array<copiado>>([]);

    const copiando = async(id: string) => {
        console.log(copiado);
        const ultimoTimeout = copiado.find(par => par.id === id);
        window.clearTimeout(ultimoTimeout?.timeout);
        Copiar(copiado.filter((par) => par.id != id));
        
        await new Promise((resposta) => {
            const tempoId = setTimeout(resposta, 2000);
            Copiar(copiado.concat({id: id, timeout: tempoId}));
        });

        Copiar(copiado.filter((par) => par.id != id));
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
                        <InfoLink id="ru" onClick={elem => copiando(elem.currentTarget.id)}>
                            <LinkName>{emailRU}</LinkName>
                            <LinkIcon src={copiado?.find(par => par.id === 'ru')?Check:Copy}/>
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
                        <InfoLink id="devmob" onClick={elem => copiando(elem.currentTarget.id)}>
                            <LinkName>{devmob}</LinkName>
                            <LinkIcon src={copiado?.find(par => par.id === 'devmob')?Check:Copy}/>
                        </InfoLink>
                    </Links>
                </div>
            </BalaoInfo>
        </FaleDiv>
    );
}