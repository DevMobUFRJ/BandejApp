import styled from "styled-components";
import { global } from "../../globalStyle";

export const CabecaDiv = styled.header `
    display: inline-flex;
    width: 76.63vw;

    margin: 2.59vh 0 2.37vh 0;

    .sideBlur {
        display: flex;
        z-index: 2;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% { backdrop-filter: blur(0px); }
            25% { backdrop-filter: blur(1px); }
            50% { backdrop-filter: blur(2px); }
            100% { backdrop-filter: blur(3px); }
        }
    }

    .dropBlur {
        display: flex;
        z-index: 1;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% { backdrop-filter: blur(0px); }
            25% { backdrop-filter: blur(1px); }
            50% { backdrop-filter: blur(2px); }
            100% { backdrop-filter: blur(3px); }
        }
    }
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


export const BlurDiv = styled.div `
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    background: rgba(0, 0, 0, 0.2);
`;