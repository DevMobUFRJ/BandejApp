import styled from "styled-components";
import { global } from "../../globalStyle";

export const InformDiv = styled.div `
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    align-items: center;

    background: ${global.colors.fundo};
`;

/*----------------------------------------------------------------------------*/

export const SelecionaInfoDiv = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 2vh;
    height: 11.5vh;
    width: 91.1vw;

    border-radius: 16px;
    background: ${global.colors.branco};
`;

export const BalaoInfo = styled.section `
    display: grid;
    grid-template-rows: auto auto;
    grid-row-gap: 2vh;
    width: 82.23vw;

    margin: 2vh 0 0 0;
    padding: 3.33vw 4.44vw;

    border-radius: 4.44vw;
    background-color: ${global.colors.branco};
`;

export const InfoTitle = styled.h3 `
    padding: 0 0 0 1%;
    
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;

    color: ${global.colors.cinza};
`;

export const InfoValor = styled.h4 `
    width: 70%;

    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;

    color: ${global.colors.cinzaPratos};
`;

export const InfoSubtitle = styled.p `
    margin: 0 0 0.5vh 0;
    padding: 0 0 0 1%;

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
    
    align-self: flex-start;
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