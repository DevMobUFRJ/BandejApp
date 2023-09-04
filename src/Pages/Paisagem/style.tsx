import { global } from "../../globalStyle";
import styled from "styled-components";

export const PaisagemDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    align-items: center;
    justify-content: center;
`;

export const PaisagemTitle = styled.h1 `
    font-family: ${global.fonts.quickSand};
    font-size: 6vw;
    font-weight: 800;
    color: ${global.colors.laranja};
`;

export const PaisagemErro = styled.h2 `
    width: 60%;
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-size: 3vw;
    font-weight: 800;
    color: ${global.colors.laranja};
`;

export const BandejAppLogo = styled.img `
    margin: 4vh 0 0 0;
    width: 30%;
`;