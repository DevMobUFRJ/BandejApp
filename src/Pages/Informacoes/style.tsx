import styled from "styled-components";
import { global } from "../../globalStyle";

export const InformDiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};
`;

/*----------------------------------------------------------------------------*/

export const InfoTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const InfoValor = styled.h4 `
    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinzaPratos};
`;

export const InfoSubtitle = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinzaClaro};
`;

export const InfoGrid = styled.div `
    display: grid;
    grid-template-rows: auto auto;
    row-gap: 0.5vh;
`;

/*----------------------------------------------------------------------------*/

export const InfoArea = styled.section `
    display: grid;
    grid-template-columns: 50% 50%;
    grid-column-gap: 5%;
    width: 95%;
    align-items: center;
`;

export const InfoBalao = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    padding: 2vh 0;
    
    align-items: center;

    border: solid 1px ${global.colors.cinzaOpaco(.16)};
    border-radius: 4.44vw;
`;

export const InfoUndertitle = styled.p `
    padding: 0 0 3vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;

    text-align: center;
    color: ${global.colors.cinzaClaro};
`;