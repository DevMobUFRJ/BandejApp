import styled from "styled-components";
import { global } from "../../globalStyle";

export const CardapioDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    min-height: 100vh;

    align-items: center;

    background: #E3E3E3;
`;

export const ActionsDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    align-items: center;
    justify-content: center;
    background: white;
`;

/*-----------------------------------------------------------*/

export const DropHeader = styled.div `
    display: block;
    flex-direction: column;
    width: 76.63vw;
    min-height: 5.18vh;
    height: 5.18vh;

    margin: 0 0 2.26vh 0;

    position: relative;
`;

/*-----------------------------------------------------------*/

/* Não faço a menor ideia do motivo desse aviso */
export const Aviso = styled.h1 `
    margin: 3vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-size: 3.73vw;
    color: ${global.colors.laranja};
`;

export const AvisoAtt = styled.h1 `
    font-family: ${global.fonts.nunito};
    font-size: 2.7vw;
    color: ${global.colors.laranja};
`;