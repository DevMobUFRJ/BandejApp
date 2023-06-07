import styled from "styled-components";
import { global } from "../../globalStyle";

export const ExplicDiv = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`;

export const ExplicBg = styled.img `
    width: 100vw;
    position: absolute;
    filter: drop-shadow(0 10px 4px rgb(0, 0, 0, 0.3));
    z-index: -1;
`;
export const ExplicImg = styled.img `
    margin-top: 6.5vh;
    filter: drop-shadow(0 7px 21px rgb(0, 0, 0, 0.25));
`;

export const ExplicTitulo = styled.h1 `
    align-self: flex-start;
    color: ${global.colors.laranja};
    font-family: ${global.fonts.nunito};
    font-size: 4.3vh;
    margin: 6vh 0 0 3vh;
`;

export const ExplicTexto = styled.p `
    align-self: flex-start;
    margin: 0 0 0 3vh;
    color: ${global.colors.cinzaTexto};
    font-family: ${global.fonts.nunito};
    font-size: 2.1vh;
    max-width: 80vw;
`;

export const ExplicProximo = styled.img `
    position: fixed;
    bottom: 3vh;
    right: 5vh;
`;