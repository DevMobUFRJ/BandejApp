import styled from "styled-components";
import { global } from "../../globalStyle";

export const CardapioDiv = styled.div `
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};
`;
/*-----------------------------------------------------------*/

export const Sombra = styled.div `
    width: 100%;
    height: 1px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------------*/

export const ActionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 29vh;
    margin-top: 2vw;
    padding: 16px;

    border-radius: 16px;
    
    pointer-events: auto;
    opacity: 1;
    transition: opacity 300ms ease-in-out;

    align-items: center;
    justify-content: center;
    background: ${global.colors.cinza1};
`;

export const DropHeader = styled.div `
    display: block;
    flex-direction: column;
    width: 91.1%;
    height: 7.5vh;
`;

/*-----------------------------------------------------------*/

export const Conteudo = styled.div `
    display: flex;
    margin-top: 29vh;
    
    transition: margin-top 300ms ease-in-out;
    flex-direction: column;
    align-items: center;
`;

export const AvisoAtt = styled.h1 `
    padding: 0.5vh 0 0.5vh 0;
    font-family: ${global.fonts.quickSand};
    font-size: 11px;
    color: ${global.colors.cinzaPratos};
`;