import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import { useContext, useEffect, useState } from "react";

import { TemplateDiv, PlaceHolderCabecalho, Shade, 
    CabecaDiv, PageTitle, DivAjustes, IconeAjustes, NotifDiv, 
    NotifInside, SideButton, NotifIcon, Fundo } from "./style";    

import SideBar from "../SideBar";

import Menu from '../../Assets/SideBar/menu.svg';
import Ajustes from '../../Assets/Cardapio/Ajustes.svg';
import Close from '../../Assets/Close.svg';

import { useDrag } from '@use-gesture/react';

const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

const toggleSide = (abrindo: boolean) => {
    const sidebar = document.getElementById('sidebar');
    const shade = document.getElementById('shade');
    const closeButton = document.getElementById('closeButton');
    if (!sidebar || !shade || !closeButton)
        return;

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

export default function Template(props: {children: JSX.Element, nome: string}) {
    const { pendingNotification } = useContext(NotificationContext);
    const [ajustesAbertos, setAjustes] = useState(true);

    const abremenu = useDrag(({last, velocity: [vx, vy], movement, xy}) => {
        const THRESHOLD = 0.6;
        const vw = window.innerWidth / 100;

        if (last && xy[0] < 50 * vw && movement[0] > 0 && vx > THRESHOLD) {
            toggleSide(true);
        }
    })

    const cliqueAjustes = (valorAtual: boolean, animacao?: Function) => {
        const cabecalho = document.getElementById('cabecalho');
    
        if (animacao) {
            animacao(!ajustesAbertos); 
            setAjustes(!ajustesAbertos);
    
            if (cabecalho) {
                    cabecalho.style.boxShadow = valorAtual ? boxshadow : '';
            }
        }
    }
    

    useEffect(() => {
        
    }, [])

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
                        src={ajustesAbertos ? Close : Ajustes} 
                        alt={ajustesAbertos ? 'Ícone para fechar ajustes' : 'Ícone para abrir ajustes'} 
                        onClick={() => cliqueAjustes(ajustesAbertos, fadeAjustes)}/>
                    </DivAjustes>

                    <Shade id="shade" onClick={() => toggleSide(false)}/>
                    <SideBar fechaDiv={() => toggleSide(false)}/>
                </CabecaDiv>
            </PlaceHolderCabecalho>
            <Fundo>
                {props.children}
            </Fundo>
        </TemplateDiv>
    );
}