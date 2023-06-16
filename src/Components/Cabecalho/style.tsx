import styled from "styled-components";
import { global } from "../../globalStyle";

export const CabecaDiv = styled.header `
    display: inline-flex;
    width: 76.63vw;

    margin: 2.59vh 0 2.37vh 0;
`;

export const PageTitle = styled.h1 `
    width: fit-content;
    position: relative;
    left: 25%;

    font-size: 5.5vw;
    font-family: ${global.fonts.nunito};
    font-weight: 600;

    color: ${global.colors.cinzaTitulo};
`;