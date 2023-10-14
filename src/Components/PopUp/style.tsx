import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopOuterDiv = styled.div `
    display: grid;

    position: absolute;
    top: 0;

    .segundoTipo {
        border: solid 0.25vh ${global.colors.laranja};
        border-radius: 4.44vw;

        background-color: ${global.colors.branco};
        color: ${global.colors.laranja};
    }
`;

export const PopDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 82.23vw;

    padding: 7vh 4.44vw 2vh 4.44vw;
    
    position: fixed;
    top: calc(50vh - 20vh);
    left: 4.44vw;
    z-index: 3;

    align-items: center;

    border: none;
    border-radius: 4.44vw;

    background-color: ${global.colors.branco};

    transition: transform 0.3s ease-in-out;
    transform: scale(0, 0);
`;

/*----------------------------------------------------------------------------*/

export const PopTitulo = styled.h2 `
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
/*     A partir daqui são os elementos para serem usados dentro do PopUp      */
/*----------------------------------------------------------------------------*/

export const PopTexto = styled.p `
    margin: 2vh 0 2vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    text-align: center;

    color: ${global.colors.cinzaPratos};
`;