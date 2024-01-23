import styled from "styled-components";
import { global } from "../../globalStyle";

export const Conteudo = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;

    background: ${global.colors.branco};
`;

export const PratoDiv = styled.div `
    display: flex;

    width: 100%;
    min-height: 12vh;

    align-items: flex-start;
    padding: 1.2vw;
`;

export const Emoji = styled.img `
    width: 3.75vw;
`;

export const Infos = styled.div `
    display: flex;
    flex-direction: column;
    width: 75%;

    padding-left: 1.5vw;
`;

export const Linha = styled.div `
    display: flex;
    width: 90%;
    height: 1px;
    align-self: center;
    background: ${global.colors.cinzaOpaco(.16)};
`;

export const Tipo = styled.p `
    padding: 0 0 0.5vh 0;
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinzaClaro};
    
    font-size: 24px;
    font-weight: 500;
`;

export const Descricao = styled.p `
    display: flex;
    align-items: center;

    width: 94%;
    height: 90px;

    font-family: ${global.fonts.quickSand};
    color: ${global.colors.cinzaPratos};

    font-size: 24px;
    font-weight: 700;

    word-break: normal;
`;
