import styled from "styled-components";
import { global } from "../../globalStyle";

export const BlurDiv = styled.div `
    display: none;
    width: 100vw;
    height: 100vh;

    position: fixed;
    top: 0;
    z-index: 3;

    background: rgba(0, 0, 0, 0.4);
`;

export const PopOuterDiv = styled.div `
    display: none;
    width: 100vw;
    height: 100vh;

    z-index: 5;
    position: fixed;
    top: 0;

    align-items: center;
    justify-content: center;

    background: rgba(0, 0, 0, 0.4);

    .segundoTipo {
        border: solid 0.25vh ${global.colors.laranja};
        border-radius: 4.44vw;

        background-color: ${global.colors.branco};
        color: ${global.colors.laranja};
    }
`;