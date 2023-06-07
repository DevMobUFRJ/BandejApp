import styled from "styled-components";
import { global } from "../../globalStyle";

export const PratoDiv = styled.div `
    display: inline-flex;
    width: 88.88vw;
    height: 7.2vh;

    align-items: center;
    justify-content: space-evenly;

    border-radius: 2.33vw;
    box-shadow: 0 1.2vh 11px -1.1vh rgb(0, 0, 0, 0.25);

    margin-bottom: 2.4vh;

    background: ${global.colors.cinza1};
`;

export const Linha = styled.div `
    display: flex;
    width: 1px;
    height: 80%;

    background: rgb(0, 0, 0, 0.15);
    height: 70%;
`;

export const Descricao = styled.p `
    display: flex;
    width: 70%;
    height: 100%;

    align-items: center;

    font-family: ${global.fonts.nunito};
    font-size: 3.73vw;
    color: ${global.colors.laranja};
`;

export const Emoji = styled.p `
    display: center;
    justify-content: center;
    font-size: 4.3vh;
`;