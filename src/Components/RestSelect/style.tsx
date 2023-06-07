import styled from "styled-components";
import { global } from "../../globalStyle";

export const RestSelectDiv = styled.section `
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 4.44vw;

    margin: 5vh 0 5vh 0;
`;

export const SelectOption = styled.button `
    display: flex;
    flex-direction: column;
    width: 43.33vw;
    height: 23.5vh;

    overflow: hidden;
    border: none;
    border-radius: 4.44vw;

    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
    transition: transform 0.5s ease;
`;

export const SelectImg = styled.img `
    display: flex;
    height: 61.7%;
    width: 100%;
`;

export const RestTitle = styled.h2 `
    padding: 8% 10% 0 10%;

    font-size: 5vw;
    font-family: ${global.fonts.quickSand};
    font-weight: 800;

    color: #666768;
    text-align: left;
`;