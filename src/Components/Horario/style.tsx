import styled from "styled-components";
import { global } from "../../globalStyle";

export const HorarioDiv = styled.div `
    display: flex;
    width: 100vw;

    margin: 4vh 0 0 0;

    .horaSelect {
        color: ${global.colors.laranja};
        border-bottom: 0.43vh solid ${global.colors.laranja};
        margin-bottom: -0.43vh;
    }
`;

export const HoraButton = styled.button `
    display: flex;
    width: 50%;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.nunito};
    font-size: 3.73vw;
    font-weight: 800;

    color: ${global.colors.cinzaTitulo};

    outline: none;
    border: none;
    border-bottom: 0.43vh solid ${global.colors.cinzaTitulo};
    margin-bottom: -0.43vh;
    transition: transform 0.5s ease;
`;