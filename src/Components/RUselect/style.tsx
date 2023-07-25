import styled from "styled-components";
import { global } from "../../globalStyle";

/*
    Correção da primeira transição da animação.
    https://stackoverflow.com/questions/67732010/css-transition-is-not-working-for-the-first-time
*/

export const DropDiv = styled.div `
    display: block;
    flex-direction: row;
    width: 76.63vw;
    height: 7.5vh;

    align-items: center;
    overflow-y: hidden;
    z-index: 1;

    border-radius: 16px;
    background: ${global.colors.branco};
`;

export const Opcoes = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const DropItem = styled.button `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: 7.5vh;
    width: 100%;

    z-index: 3;

    font-size: 16px;
    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    
    color: ${global.colors.cinza};

    border: none;
`;

export const DropArrow = styled.img `
    width: 3.33vw;
    margin-right: 6.1vw;
`;

export const PinLugar = styled.img `
    width: 3.88vw;
    margin-left: 6.1vw;
`;