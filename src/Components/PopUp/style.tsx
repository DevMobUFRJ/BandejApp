import styled from "styled-components";
import { global } from "../../globalStyle";

export const PopupDiv = styled.div `
    display: flex;
    width: 90%;
    position: fixed;
    bottom: 0;
    margin-bottom: 10px;
    border-radius: 3.5vw;
    background: ${global.colors.laranja};
    font-family: ${global.fonts.nunito};
    &:after {
        content: "";
        position: absolute;
        top: 100%; /* ajuste para posicionar a seta na borda inferior */
        left: 50%;
        margin-left: -10px;
        border-width: 10px;
        border-style: solid;
        border-color: ${global.colors.laranja} transparent transparent transparent; /* laranja */
    }
`;

export const PopText = styled.p `
    margin: 1vh 0 2vh 0;
    font-family: ${global.fonts.nunito};
    font-size: 3vw;
    font-weight: 500;
    text-align: center;
    color: white;
    padding: 0px 10px 0px 10px;
`;
