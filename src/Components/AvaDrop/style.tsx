import styled from "styled-components";
import { global } from "../../globalStyle";

export const AvaDropdown = styled.div `
    display: flex;
    flex-direction: column;
    width: 85vw;
    min-height: 5.3vh;
    height: 5.3vh;
    margin-top: 40px;

    overflow: hidden;
    position: relative;

    align-items: center;

    border-radius: 4.67vw;

    background: ${global.colors.cinza1};

    transition: height 0.5s ease;

    :focus-within {
        outline: solid 1.5px ${global.colors.laranja};
    }
`;

export const DropIcon = styled.img `
    display: flex;
    width: 7vw;

    position: absolute;
    top: 2vh;
    left: 5vw;

    transition: transform 0.5s ease;
`;

export const DropItemAva = styled.button `
    display: flex;
    width: 75%;
    height: 5.3vh;

    position: absolute;
    top: 5.3vh;
    left: 15vw;

    align-items: center;
    padding: 3vw;

    font-size: 4.67vw;
    font-family: ${global.fonts.nunito};
    font-size: 5vw;

    color: ${global.colors.cinzaTexto};

    outline: none;
    border: none;
    border-top: solid 0.25vh #CCCCCC;

    transition: transform 0.5s ease;
`;