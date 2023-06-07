import styled from "styled-components";
import { global } from "../../globalStyle";

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    align-items: center;
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
    margin-top: 10px;
    position: relative;
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(217, 217, 217, 0.38);
    font-family: ${global.fonts.nunito};
    &:before{
        content: "";
        position: absolute;
        top: 10px;
        left: -20px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent rgba(217, 217, 217, 0.38) transparent transparent;
    }
`;

export const CardMensagem = styled.div `
`;

export const CardData = styled.div `
    margin-top: 15px;
`;

export const Container = styled.div `
    width: 80%;
`;

export const TextMensagem = styled.p `
    font-family: ${global.fonts.nunito};
`;

export const TextData = styled.p `
    font-family: ${global.fonts.nunito};
    font-size: 12px;
    color: #666666;
`;