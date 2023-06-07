import styled from "styled-components";
import { global } from "../../globalStyle";

export const NavDiv = styled.div `
    display: inline-flex;
    width: 76.63vw;

    justify-content: space-between;
    
    .diaSelect {
        transform: scale(1.1, 1.1);
        background-color: ${global.colors.laranja} !important;
        color: white;
    }
`;

/*-----------------------------------------------------------*/

export const NavButton = styled.button `
    display: flex;
    flex-direction: column;
    width: 12.5%;
    height: 100%;
    
    align-items: center;
    justify-content: center;

    background: ${global.colors.cinzaOF};
    
    outline: none;
    border: none;
    border-radius: 2.33vw;

    transition: transform 0.5s ease;  
`;

/*-----------------------------------------------------------*/

export const DiaSemana = styled.p `
    margin: 0.3vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-weight: 800;
    font-size: 3.73vw;

    color: ${global.colors.cinzaTitulo};
`;

export const DiaMes = styled.p `
    margin: 0.3vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-weight: 500;
    font-size: 2.57vw;

    color: ${global.colors.cinzaTitulo};
`;

export const Mes = styled.p `
    margin: 0 0 0.3vh 0;

    font-family: ${global.fonts.nunito};
    font-weight: 500;
    font-size: 2.57vw;

    color: ${global.colors.cinzaTitulo};
`;