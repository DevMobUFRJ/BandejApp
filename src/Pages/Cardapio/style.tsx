import styled from "styled-components";
import { global } from "../../globalStyle";

export const CardapioDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

    align-items: center;

    background: #E3E3E3;
`;

export const BlurDiv = styled.div `
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgb(0, 0, 0, 0.05);
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

export const HeaderDiv = styled.header `
    display: inline-flex;
    width: 76.63vw;

    margin: 2.59vh 0 2.37vh 0;
`;

export const PageTitle = styled.h1 `
    width: fit-content;
    position: relative;
    left: 25%;

    font-size: 5.5vw;
    font-family: ${global.fonts.nunito};
    font-weight: 600;

    color: ${global.colors.cinzaTitulo};
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

/* Não faço a menor ideia do motivo desse aviso */
export const Aviso = styled.h1 `
    margin: 3vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-size: 3.73vw;
    color: ${global.colors.laranja};
`;

export const AvisoAtt = styled.h1 `
    font-family: ${global.fonts.nunito};
    font-size: 2.7vw;
    color: ${global.colors.laranja};
`;