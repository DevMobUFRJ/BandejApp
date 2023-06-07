import styled from "styled-components";
import { global } from "../../globalStyle";

export const CardsDiv = styled.div `
    display: inline-flex;
    width: 100vw;
    height: 58vh;
    margin: 1vh 0 3vh 0;

    align-items: center;

    overflow: auto;
    ::-webkit-scrollbar { display: none; }

    .bordaAtiva {
        background: #21b4d0;
        box-shadow: 0 0.8vh 20px 3px rgb(0, 0, 0, 0.3);
    }
`;

export const BorderDiv = styled.div `
    display: flex;

    padding: 1.4vw;
    margin: 0 3vw 0 3vw;

    border: none;
    border-radius: 5vw;
`;

export const Card = styled.button `
    display: flex;
    flex-direction: column;

    align-items: center;
    padding: 0 0 0.5vh 0;

    font-family: ${global.fonts.bebas};
    font-size: 7vw;
    font-weight: 500;
    
    background: ${global.colors.laranja};
    color: white;
    box-shadow: 0 0.8vh 15px 3px rgb(0, 0, 0, 0.3);

    border: none;
    border-radius: 4.67vw;
    outline: none;
`;

export const CardImg = styled.img `
    width: 74.766vw;
    margin: 0 0 1.5vh 0;
    border: none;
    border-radius: inherit;
`;