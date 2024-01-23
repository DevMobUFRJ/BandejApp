import styled from "styled-components";
import { global } from "../../globalStyle";

/*
    Correção da primeira transição da animação.
    https://stackoverflow.com/questions/67732010/css-transition-is-not-working-for-the-first-time
*/

export const DropDiv = styled.div `
    display: flex;
    flex-direction: column;
    padding: 0;

    align-items: center;
    overflow-y: hidden;

    width: 100%;
`;

export const Selecionado = styled.div `
    display: flex;
    flex-direction: row;
    height: 7.5vh;
    width: 95%;
    
    background: ${global.colors.branco};
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 16px;
`;

export const IconeEsquerda = styled.img `
    width: 3.88vw;
    margin-left: 6.1vw;
`;

export const DropArrow = styled.img `
    width: 3.33vw;
    margin-right: 6.1vw;
`;

export const Opcoes = styled.div `
    display: block;
    height: 0;
    width: 95%;

    z-index: 1;

    opacity: 0;
    pointer-events: none;
    
    overflow: hidden;

    transform: translateY(-7.5vh);
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out, height 300ms ease-in-out;

    background: ${global.colors.branco};
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 16px;
`;

export const DropItem = styled.button `
    display: flex;
    flex-direction: row;
    padding-left: 3.6vw;
    align-items: center;

    width: 100%;
    height: 7.5vh;

    z-index: 1;

    font-size: 16px;
    font-family: ${global.fonts.quickSand};
    font-weight: 700;

    border: none;
    
    color: ${global.colors.cinza};
`;