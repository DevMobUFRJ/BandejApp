import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 82.23vw;

    padding: 10vh 4.44vw;
    margin-top: -25vh;
    
    position: fixed;
    top: 50%;
    z-index: 3;

    align-items: center;

    border: none;
    border-radius: 4.44vw;

    background-color: ${global.colors.branco};

    animation: zoom 0.3s ease-in-out both;
    @keyframes zoom {
        0% { transform: scale(0, 0); }
        100% { transform: scale(1, 1); }
    }

    .segundoTipo {
        border: solid 0.25vh ${global.colors.laranja};
        border-radius: 4.44vw;

        background-color: ${global.colors.branco};
        color: ${global.colors.laranja};
    }
`;

/*----------------------------------------------------------------------------*/

export const PopTitulo = styled.h2 `
    font-family: ${global.fonts.quickSand};
    font-size: 3vh;
    font-weight: 700;
    color: ${global.colors.cinza};
`;

export const PopTexto = styled.p `
    margin: 2vh 0 2vh 0;

    font-family: ${global.fonts.quickSand};
    font-size: 4.44vw;
    font-weight: 500;
    text-align: center;

    color: ${global.colors.cinzaPratos};
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