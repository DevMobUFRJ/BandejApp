import styled from "styled-components";
import { global } from "../../globalStyle";

export const PlaceHolderCabecalho = styled.div `
    display: block;

    width: 100vw;
    height: calc(8vh + 2.25vh);
`;

export const CabecaDiv = styled.header `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.25vh;

    position: fixed;
    top: 0;
    z-index: 2;

    width: 100vw;
    height: 8vh;

    background: ${global.colors.branco};
`;

export const PageTitle = styled.h1 `
    font-size: 16px;
    font-family: ${global.fonts.quickSand};
    font-weight: 700;

    color: ${global.colors.cinza};
`; 

export const DivAjustes = styled.div `
    width: 6.66vw;
    margin-right: 4.4vw;
    padding-left: 2.32vw;
`;

export const IconeAjustes = styled.img `
    width: 6.66vw;
    height: 6.66vw;
`;

export const SideButton = styled.img `
    width: 6.66vw;
    margin-left: 5.55vw;
`;

/*----------------------------------------------------------------------------*/

export const NotifDiv = styled.div `
    display: flex;
    position: relative;
`;

export const NotifIcon = styled.div `
    display: flex;
    width: 5.55vw;
    height: 5.55vw;

    position: absolute;
    top: -50%;
    right: -25%;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: ${global.colors.branco};
`;

export const NotifInside = styled.div `
    display: flex;
    width: 3.33vw;
    height: 3.33vw;

    border-radius: 50%;
    background-color: ${global.colors.laranja};
`;