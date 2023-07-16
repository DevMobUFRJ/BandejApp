import styled from "styled-components";
import { global } from "../../globalStyle";

export const InformDiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    align-items: center;
`;

/*----------------------------------------------------------------------------*/

export const InfoTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const InfoSubtitle = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinzaTexto};
`;

export const InfoGrid = styled.div `
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 0.5vh;
`;

export const InfoArea = styled.section `
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 5%;
    width: 95%;
    align-items: center;
`;

export const InfoBalao = styled.div `
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 3vh;
    width: 100%;

    padding: 2vh 0;
    
    justify-content: center;

    border: solid 1px ${global.colors.desativado};
    border-radius: 4.44vw;
`;

export const InfoUndertitle = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    text-align: center;
    color: ${global.colors.cinzaTexto};
`;