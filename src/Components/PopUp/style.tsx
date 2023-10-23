import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 82.23vw;
    max-height: 62.5vh;

    padding: 7vh 4.44vw 2vh 4.44vw;
    
    align-items: center;

    overflow: auto;

    border: none;
    border-radius: 4.44vw;

    background-color: ${global.colors.branco};

    transition: transform 0.3s ease-in-out;
    transform: scale(0, 0);
`;

/*----------------------------------------------------------------------------*/

export const PopTitulo = styled.h2 `
    margin: 0 0 3vh 0;
    font-family: ${global.fonts.quickSand};
    font-size: 3vh;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const PopButtonDiv = styled.div `
    width: 100%;
`;

export const PopButton = styled.button `
    width: 100%;
    height: 6vh;

    margin: 1vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;

    border: none;
    border-radius: 4.44vw;

    background-color: ${global.colors.laranja};
    color: ${global.colors.branco};
`;

/*----------------------------------------------------------------------------*/
/*  A partir daqui são os elementos para serem usados como conteúdo do PopUp  */
/*----------------------------------------------------------------------------*/

export const PopSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 3vh 0;
`;

export const PopTexto = styled.p `
    margin: 2vh 0 2vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    text-align: center;

    color: ${global.colors.cinzaPratos};
`;

export const PopSubtitle = styled.h3 `
    margin: 0 0 0.5vh 0;
    font-family: ${global.fonts.quickSand};
    font-size: 3.33vw;
    font-weight: 500;
`;

export const PopLink = styled.a `
    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 700;
    color: ${global.colors.cinzaPratos};
    text-decoration: underline;
`;