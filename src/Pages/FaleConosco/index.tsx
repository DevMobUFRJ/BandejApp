import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { useContext } from "react";

import Cabecalho from "../../Components/Cabecalho";

import { Balao, BalaoBanner, BalaoDescription, BalaoInfo, BalaoTitle,
    FaleDiv, InfoLink, LinkIcon, LinkName, Links } from "./style";
    
import DownPop from "../../Components/PopUpIOS";
import copy from 'copy-to-clipboard';

import Copy from '../../Assets/FaleConosco/copiar.svg';
import Check from '../../Assets/FaleConosco/check.svg';
import Redirect from '../../Assets/FaleConosco/redirect.svg';

import DevMobBanner from '../../Assets/FaleConosco/devmobBanner.svg';
import RUbanner from '../../Assets/FaleConosco/ruBanner.svg';
    
type copiado = {
    id: string;
    ativo: boolean;
    timeout: NodeJS.Timeout;
}


type Banner = {
    imagem: string;
    titulo: string;
    descricao: string;
    opcoes: Array<{
        tipo: number; /* 0 -> Link | != 0 -> copiar */
        nome: string; /* Se for texto para copiar, o nome DEVERIA ser o texto para copiar*/
        linkOuId:  string;
    }>;
    filtro: string;
}

export default function FaleConosco() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    const Baloes: Array<Banner> = [
        {
            imagem: RUbanner,
            titulo: 'Restaurante Universitário UFRJ',
            descricao: 'Elogios, sugestões e/ou reclamações?Fale com a gente através do formulário ou email.',
            opcoes: [
                {tipo: 1, nome: 'admruufrj@gmail.com', linkOuId: 'admruufrj@gmail.com'},
                {tipo: 0, nome: 'Abrir formulário', linkOuId: 'https://docs.google.com/forms/d/e/1FAIpQLSctq79DYLYzK3IZ_dPuCewiu3g9gG46Px_ngzo5OzTLrtlDRA/viewform'}
            ],
            filtro: ''
        },
        {
            imagem: DevMobBanner,
            titulo: '',
            descricao: 'Fale com a equipe DevMob para tirar dúvidas, enviar sugestões e tudo mais relacionado ao App.',
            opcoes: [{tipo: 1, nome: 'devmob@ic.ufrj.br', linkOuId: 'emailDevmob'}],
            filtro: 'invert(21%) sepia(74%) saturate(2729%) hue-rotate(196deg) brightness(87%) contrast(89%)'
        }
    ];


    const timers: copiado[] = [];
    const copiar = (id: string, link: string) => {
        copy(link);

        const alvo = document.getElementById(id);
        if (!alvo) 
            return;

        const listado = timers.find((el) => el.id === id);

        alvo.setAttribute('src', Check);
        if (!listado) {
            const novoTimer = setTimeout(() => alvo.setAttribute('src', Copy), 2000)
            timers.push({id: id, ativo: true, timeout: novoTimer});
        }
        else {
            if (listado.ativo)
                window.clearTimeout(listado.timeout);

            listado.ativo = true;
            listado.timeout = setTimeout(() => {
                listado.ativo = false;
                alvo.setAttribute('src', Copy)
            }, 2000)
        }
    }

    return (
        <FaleDiv>
            <Cabecalho nome='Fale conosco'/>

            {
                Baloes.map( banner => 
                    <Balao>
                        <BalaoBanner src={banner.imagem}/>

                        <BalaoInfo>
                            <BalaoTitle>{banner.titulo}</BalaoTitle>
                            <BalaoDescription>{banner.descricao}</BalaoDescription>
                            <Links>
                                {banner.opcoes.map((opcao) => 
                                    opcao.tipo === 0?
                                    <InfoLink href={opcao.linkOuId}>
                                        <LinkName>{opcao.nome}</LinkName>
                                        <LinkIcon src={Redirect}
                                        style={{filter: banner.filtro}}/>
                                    </InfoLink>

                                    :

                                    <InfoLink onClick={() => copiar(opcao.linkOuId, opcao.nome)}>
                                        <LinkName>{opcao.nome}</LinkName>
                                        <LinkIcon src={Copy} id={opcao.linkOuId}
                                        style={{filter: banner.filtro}}/>
                                    </InfoLink>
                                )}
                            </Links>
                        </BalaoInfo>
                    </Balao>
                )
            }
            {
                showInstallMessage &&
                <DownPop/>
            }
        </FaleDiv>
    );
}