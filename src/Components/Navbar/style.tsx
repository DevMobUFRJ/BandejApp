import styled from "styled-components";
import { global } from "../../globalStyle";

export const NavDiv = styled.div `
    display: flex;
    margin-top: 2vh;
    padding-left: 8.9vw;
    width: 91.1vw;
    overflow-x: hidden;
    
    .diaSelect {
        background-color: ${global.colors.laranja} !important;
        color: ${global.colors.branco};
    }
`;

/*-----------------------------------------------------------*/

export const NavButton = styled.button `
    display: flex;
    flex-direction: column;
    flex-shrink: 0;

    width: 24.1vw;
    height: 11.5vh;
    
    margin-left: 2.2vw;
    align-items: center;

    background: ${global.colors.cinzaOpaco(.07)};
    
    outline: none;
    border: none;
    border-radius: 16px;

    transition: transform 0.5s ease;  
`;

/*-----------------------------------------------------------*/

export const DiaSemana = styled.p `
    margin-top: 1.5vh;
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 16px;

    color: ${global.colors.cinza};
`;

export const DiaMes = styled.p `
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 12px;

    color: ${global.colors.cinza};
`;

export const DiaRelativo = styled.p `
    margin-top: auto;
    margin-bottom: 1.75vh;
    text-align: center;

    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 12px;

    color: ${global.colors.cinza};
`;