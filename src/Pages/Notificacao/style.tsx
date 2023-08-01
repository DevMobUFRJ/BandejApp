import styled from "styled-components";
import { global } from "../../globalStyle";

interface CardProps {
    new?: boolean;
}

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;
    align-items: center;

    background: ${global.colors.fundo};
`;

export const BalaoSemMensagens = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2vh;

    width: 91.1vw;
    height: 21vh;

    background:${global.colors.cinzaOpaco(0.10)};

    border-radius: 16px;
`;

export const IconeSemMensagens = styled.img `
    margin-top: 4.25vh;

    width: 13.33vw;
`;

export const TextoSemMensagens = styled.p `
    margin-top: 1.25vh;

    width: 79.7vw;

    color: ${global.colors.cinza};
    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 16px;
    font-weight: 700;
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

export const CardMensagem = styled.div `

`;

export const CardData = styled.div `

`;

export const Container = styled.div `
    width: 89.85vw;
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

export const Card = styled.div<CardProps>`
    padding: 2.125vh 6.66vw 2vh 6.66vw;
    background: ${(props) => props.new ? global.colors.branco : global.colors.cinzaOpaco(0.04)};
    font-family: ${global.fonts.quickSand};
`;

export const DataRelativa = styled.h3<CardProps>`
    font-family: ${global.fonts.quickSand};
    color: ${(props) => props.new ? global.colors.laranja : global.colors.cinza};
    font-size: 20px;
    font-weight: 700;
`;

export const TextData = styled.p<CardProps>`
    margin-top: 0.5vh; 
    font-family: ${global.fonts.quickSand};
    color: ${(props) => props.new ? global.colors.laranja : global.colors.cinza};
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

export const SideIcon = styled.img `
    width: 4vw;
`;

export const CardTop = styled.section`
    display: grid;
    grid-template-columns: 90% auto;
`;