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

export const SemMensagens = styled.p `
    margin-top: 2vh;

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};

    font-size: 16px;
`;

export const MensagensNaoLidas = styled.button `
    width: 91vw;
    height: 6vh;
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
    
export const Container = styled.div `
    width: 89.85vw;
`;

export const Card = styled.div `
    padding: 2.125vh 6.66vw 2vh 6.66vw;
    background: ${global.colors.branco};
    font-family: ${global.fonts.quickSand};
`;

export const DataRelativa = styled.h3 `

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
    font-size: 20px;
    font-weight: 700;
`;

export const TextData = styled.p `
    margin-top: 0.5vh;
    
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};
    font-size: 16px;
    font-weight: 500;    
`;

export const TextMensagem = styled.p `
    margin-top: 3vh;

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinza};

    font-size: 16px;
    font-weight: 500;
    line-height: 28px; /* 175% */
    word-wrap: break-word;
`;