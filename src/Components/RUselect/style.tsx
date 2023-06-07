import styled from "styled-components";
import { global } from "../../globalStyle";

/*
    Correção da primeira transição da animação.
    https://stackoverflow.com/questions/67732010/css-transition-is-not-working-for-the-first-time
*/

export const DropDiv = styled.div `
    display: block;
    flex-direction: column;
    width: 76.63vw;
    min-height: 5.18vh;
    height: 5.18vh;

    overflow: hidden;
    z-index: 1;
    position: absolute;

    border-radius: 2vw;
    background: ${global.colors.laranja};

    transition: height 0.5s ease;

    .selected {
        top: 0;
        border: none;
        height: 5.18vh;
        text-shadow: none;
    }
`;

export const ItemsDiv = styled.div `
    display: flex;
`;

export const DropItem = styled.button `
    display: flex;
    height: 5.18vh;
    min-width: 85%;

    position: absolute;
    top: 5.18vh;
    z-index: 3;

    margin: 0 0 0 1.5vw;
    padding: 0 0 0 1.5vw;
    align-items: center;

    font-size: 4.3vw;
    font-family: ${global.fonts.nunito};
    font-weight: bold;

    outline: none;
    border: none;
    border-top: solid 0.25vh #EB4600;

    color: white;
    transition: transform 0.6s ease;
`;

export const DropArrow = styled.img `
    display: flex;
    height: 2.7vh;
    max-width: 15%;

    position: absolute;
    right: 3vw;
    top: 1.4vh;

    transition: transform 0.3s ease;
    transform: rotate(-90deg);
`;