import styled from "styled-components";
import { global } from "../../globalStyle";

export const FaleDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};
`;

/*----------------------------------------------------------------------------*/

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

export const BalaoTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const BalaoDescription = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    color: ${global.colors.cinzaTexto};
`;

/*----------------------------------------------------------------------------*/

export const Links = styled.div `
    display: grid;
    grid-template-rows: auto;
    grid-gap: 2vh;

    border-radius: 4.44vw;
`;

export const InfoLink = styled.a `
    display: grid;
    grid-template-columns: 85% 15%;
    width: 100%;
    height: 7.5vh;

    align-items: center;

    border: solid 2px ${global.colors.cinzaOF};
    border-radius: 4.44vw;
`;

export const LinkName = styled.p `
    padding: 4.44vw;
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const LinkIcon = styled.img `
    width: 6.66vw;
`;