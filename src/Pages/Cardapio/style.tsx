import styled from "styled-components";
import { global } from "../../globalStyle";

export const CardapioDiv = styled.div `
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    align-items: center;

    background: ${global.colors.fundo};
`;
/*-----------------------------------------------------------*/


export const Sombra = styled.div `
    width: 100vw;
    height: 1px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------------*/

export const ActionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    
    position: absolute;
    /* Arredondamento/perda de precisão nas contas tava fazendo
    aparecer uma linhazinha em telas grandes */
    top: calc(2.25vh + 8vh); 
    z-index: 0;
    
    pointer-events: auto;
    opacity: 1;
    transition: opacity 300ms ease-in-out;

    align-items: center;
    justify-content: center;
    background: ${global.colors.branco};
`;

export const DropHeader = styled.div `
    display: block;
    flex-direction: column;
    width: 91.1vw;
    height: 7.5vh;
`;

/*-----------------------------------------------------------*/

export const Conteudo = styled.div `
    display: flex;
    margin-top: 38.75vh;
    
    transition: margin-top 300ms ease-in-out;
    flex-direction: column;
    align-items: center;
`;

export const AvisoAtt = styled.h1 `
    padding-top: 0.5vh;
    font-family: ${global.fonts.quickSand};
    font-size: 11px;
    color: ${global.colors.laranja};
`;