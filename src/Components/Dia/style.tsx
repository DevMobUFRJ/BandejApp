import styled from "styled-components";
import { global } from "../../globalStyle";

export const DiaDiv = styled.div `
    display: flex;;
    flex-direction: column;
    width: 91.1vw;
`;

/*-----------------------------------------------------------------*/

export const Gluten = styled.div `
    display: flex;
    width: 100%;
    height: 6vh;
    background: rgba(36, 82, 169, 0.2);
    margin-top: 2vh;

    align-items: center;
    justify-content: space-evenly;

    border-radius: 4.44vw;
`;

export const InfoIcon = styled.img `
    width: 6.66vw;
`;

export const Aviso = styled.strong `
    font-family: ${global.fonts.quickSand};
    font-weight: 500;
    font-size: 14px;

    color: ${global.colors.azul};
`;

/*-----------------------------------------------------------------*/

export const Menu = styled.div `
    display: flex;
    margin-top: 2vh;
    
    flex-direction: column;
`;