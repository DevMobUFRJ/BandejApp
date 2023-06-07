import styled from "styled-components";
import { global } from "../../globalStyle";

export const DiaDiv = styled.div `
    display: flex;;
    flex-direction: column;
    width: 88.88vw;

    margin: 2vh 0 0 0;
`;

/*-----------------------------------------------------------------*/

export const Gluten = styled.div `
    display: flex;
    width: 100%;
    height: 6vh;
    background: rgba(36, 82, 169, 0.2);
    margin-bottom: 2vh;

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
    font-size: 3.88vw;

    color: #2452A9;
`;

/*-----------------------------------------------------------------*/

export const Menu = styled.div `
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    
    flex-direction: column;
    height: 100%;
`;