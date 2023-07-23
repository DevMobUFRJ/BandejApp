import styled from "styled-components";
import { global } from "../../globalStyle";

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;

    background: ${global.colors.fundo};
`;

export const Titulo = styled.h1 `
    margin-top: 4.5vh;
    margin-bottom: 30px;
    font-family: ${global.fonts.nunito};
    font-size: 7vw;
    font-weight: 600;
`;

export const AvalImg = styled.img `
    width: 6.3vw;
    //padding: 0 4.9vw 0 9.6vw;
    display: flex;
    position: absolute;
    top: 5vh;
    left: 6.3vw;
    outline: none;
    border: none;
`;

export const Card = styled.div `
    padding: 6.6vw;
    background: ${global.colors.branco};
    font-family: ${global.fonts.nunito};
`;

export const CardMensagem = styled.div `

`;

export const CardData = styled.div `

`;

export const Container = styled.div `
    width: 89.85vw;
`;

export const TextMensagem = styled.p `
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
    margin-top: 2.9vh;

    font-size: 16px;
    font-weight: 500;
    line-height: 28px; /* 175% */
    word-wrap: break-word;
`;

export const TextData = styled.p `
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
    margin-top: 0.2vh;
    font-size: 16px;
    font-weight: 500;    
`;

export const MensagensNaoLidas = styled.button `
    width: 91vw;
    height: 5.8vh;
    margin-top: 2vh;
    background: ${global.colors.laranja};

    border-radius: 16px;
    border:none;

    text-align: center;
    color: ${global.colors.branco};
    font-family: ${global.fonts.quickSand};
    font-size: 16px;
    font-weight: 700;
`;

export const DataRelativa = styled.h3 `
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
    font-size: 20px;
    font-weight: 700;
`;

export const SemMensagens = styled.p `
    margin-top: 2vh;

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};

    font-size: 16px;
`;