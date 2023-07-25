import styled from "styled-components";
import { global } from "../../globalStyle";

export const HorarioDiv = styled.div `
    display: flex;
    width: 100vw;

    height: 6vh;

    background: ${global.colors.branco};

    .horaSelect {
        color: ${global.colors.laranja};
        border-bottom: 0.5vh solid ${global.colors.laranja};
        font-weight: 700;
    }
`;

export const HoraButton = styled.button `
    display: flex;
    width: 50%;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.quickSand};
    font-size: 16px;
    font-weight: 500;

    color: ${global.colors.cinzaOpaco(.6)};

    outline: none;
    border: none;
    border-bottom: 0.5vh solid ${global.colors.cinzaOpaco(.4)};
    transition: transform 0.5s ease;
`;