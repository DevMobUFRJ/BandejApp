import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext, useState } from "react";

import { TemplateDiv, PlaceHolderCabecalho, Shade, 
    CabecaDiv, PageTitle, DivAjustes, IconeAjustes, NotifDiv, 
    NotifInside, SideButton, NotifIcon, Fundo } from "./style";    

import SideBar from "../SideBar";

import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Cardapio/Ajustes.svg';
import Close from '../../Assets/Close.svg';

import { useDrag } from '@use-gesture/react';
import { useSpring, animated } from '@react-spring/web';

const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
let aberto = true;

const toggleSide = (abrindo: boolean) => {
    const sidebar = document.getElementById('sidebar');
    const shade = document.getElementById('shade');
    const closeButton = document.getElementById('closeButton');
    if (!sidebar || !shade || !closeButton)
        return;

    if (abrindo) {
        shade.addEventListener('click', () => toggleSide(!abrindo));
        closeButton.addEventListener('click', () => toggleSide(!abrindo));
    }

    requestAnimationFrame(() => {
        if (abrindo) {
            shade.style.display = 'block';
            sidebar.style.width = '72.22vw';
        }
        else {
            shade.style.display = 'none';
            sidebar.style.width = '0';
        }
    });
}

const fadeAjustes = (abrindo: boolean) => {
    const acoes = document.getElementById('acoes');
    const conteudo = document.getElementById('conteudo');
    if (!acoes || !conteudo)
        return;

    requestAnimationFrame(() => {
        if (!abrindo) {
            acoes.style.opacity = '0';
            acoes.style.pointerEvents = 'none';
            conteudo.style.marginTop = '0';
        }
        else {
            acoes.style.opacity = '1';
            acoes.style.pointerEvents = 'auto';
            conteudo.style.marginTop = '29vh';
        }
    })
};

const cliqueAjustes = (controle?: Function) => {
    const cabecalho = document.getElementById('cabecalho');

    if (controle) {
        controle(!aberto); 
        aberto = !aberto;

        if (cabecalho) {
                cabecalho.style.boxShadow = aberto ? '' : boxshadow;
        }
    }
}

export default function Template(props: {children: JSX.Element, nome: string}) {
    const { pendingNotification } = useContext(NotificationContext);

    const abremenu = useDrag(params => {
        const insensibilidade = 10;
        const vw = window.innerWidth / 100;

        if (params.xy[0] < 30 * vw && params.movement[0] > insensibilidade)
            toggleSide(true);
    })

    return (
        <TemplateDiv {...abremenu()}>
            <PlaceHolderCabecalho>
                <CabecaDiv style={{boxShadow:`${props.nome === 'Cardápio' ? '' : boxshadow}`}} id={'cabecalho'}>
                    <NotifDiv onClick={() => toggleSide(true)}>
                        <SideButton src={Menu} alt='Ícone para abrir o menu lateral'/>

                        <NotifIcon style={{display: `${pendingNotification? '':'none'}`}}>
                            <NotifInside/>
                        </NotifIcon>
                    </NotifDiv>

                    <PageTitle>{props.nome}</PageTitle>

                    <DivAjustes>
                        <IconeAjustes style={{display: `${props.nome === 'Cardápio' ? '' : 'none'}`}}
                        src={aberto ? Close : Ajustes} 
                        alt={aberto ? 'Ícone para fechar ajustes' : 'Ícone para abrir ajustes'} 
                        onClick={() => cliqueAjustes(fadeAjustes)}/>
                    </DivAjustes>

                    <Shade id="shade"/>
                    <SideBar fechaDiv={() => toggleSide(false)}/>
                </CabecaDiv>
            </PlaceHolderCabecalho>
            <Fundo>
                {props.children}
            </Fundo>
        </TemplateDiv>
    );
}