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

export const ActionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: white;
`;

/*-----------------------------------------------------------*/

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

/* Não faço a menor ideia do motivo desse aviso */
export const Aviso = styled.h1 `
    margin: 3vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-size: 3.73vw;
    color: ${global.colors.laranja};
`;

export const AvisoAtt = styled.h1 `
    padding-top: 0.2vh;
    font-family: ${global.fonts.quickSand};
    font-size: 11px;
    color: ${global.colors.laranja};
`;