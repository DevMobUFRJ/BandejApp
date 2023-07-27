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

export const IconeAjustes = styled.img `
    position: absolute;
    right: 4.4vw;
    top: 6.5vh;
`;

export const Sombra = styled.div `
    width: 100vw;
    height: 1px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

/*-----------------------------------------------------------*/

export const ActionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 12.5vh;
    
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: ${global.colors.branco};
`;

export const DropHeader = styled.div `
    display: block;
    flex-direction: column;
    width: 76.63vw;
    min-height: 5.18vh;
    height: 5.18vh;

    margin: 0 0 2.26vh 0;

    position: relative;
`;

/*-----------------------------------------------------------*/

export const Conteudo = styled.div `
    display: flex;
    margin-top: 28.5vh;
    
    flex-direction: column;
    align-items: center;
`;

export const AvisoAtt = styled.h1 `
    padding-top: 0.5vh;
    font-family: ${global.fonts.quickSand};
    font-size: 11px;
    color: ${global.colors.laranja};
`;