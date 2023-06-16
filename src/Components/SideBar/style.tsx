import styled from "styled-components";
import { global } from "../../globalStyle";

export const SideDiv = styled.div `
    display: flex;

    .sideBlur {
        display: flex;
        z-index: 2;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% {backdrop-filter: blur(0px);}
            25% {backdrop-filter: blur(1px);}
            50% {backdrop-filter: blur(2px);}
            100% {backdrop-filter: blur(3px);}
        }
    }

    .dropBlur {
        display: flex;
        z-index: 1;
        animation: blur 0.5s linear forwards;
        @keyframes blur {
            0% {backdrop-filter: blur(0px);}
            25% {backdrop-filter: blur(1px);}
            50% {backdrop-filter: blur(2px);}
            100% {backdrop-filter: blur(3px);}
        }
    }
`;

/*-----------------------------------------------------------*/

export const SideImg = styled.img `
    width: 6.3vw;
`;

export const SideBarDiv = styled.div `
    display: grid;
    grid-template-rows: 30% 30%;
    min-width: 0vw;
    width: 0vw;
    height: 100vh;

    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;

    align-items: center;

    background: white;

    overflow: hidden;
    transition: width 0.3s ease;
`;

export const CloseImg = styled.img `
    width: 3.5vw;
`;

/*-----------------------------------------------------------*/

export const SideHeader = styled.header `
    display: inline-flex;
    width: 70%;

    margin: 4vh 0 2.5vh 0;
    padding: 0 15%;

    justify-content: space-between;
`;

export const LogoImg = styled.img `
    width: 26.66vw;
`;

/*-----------------------------------------------------------*/

export const ItemsDiv = styled.ul `
    display: grid;
    grid-auto-rows: auto;
    background-color: pink;
`;

export const SideItem = styled.div `
    display: grid;
    grid-template-columns: auto auto;
    width: 80%;

    padding: 2.3vh 0 2.3vh 10%;
    
    font-family: ${global.fonts.nunito};
    font-size: 5.5vw;

    color: white;

    border-radius: 3.7vw;
    &:active {
		background-color: #C33A00;
	}
`;

export const SideIcon = styled.img `
    width: 6.67vw;
    margin: 0 3vw 0 0;
`;

export const ItemName = styled.p `
    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 4.44vw;

    background-color: green;
`;

/*-----------------------------------------------------------*/

