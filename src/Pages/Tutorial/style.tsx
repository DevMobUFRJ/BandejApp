import styled from "styled-components";
import { global } from "../../globalStyle";

export const TutDiv = styled.div `
    display: flex;
    flex-direction: column;

    width: 100vw;
    min-height: 100vh;

    .currentPage { background: white; }
    .nextButton { 
        background: ${global.colors.laranja};
        color: white;
    }

    .currentTemplate {
        transform: translateX(75vw);
    }
    .prevTemplate {
        transform: translateX(-75vw);
    }
    .nextTemplate {
        transform: translateX(175vw);
    }
`;

export const FullTutorial = styled.div `
    display: flex;
`;

/*------------------------------------------------------*/

export const InitialPage = styled.div `
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;
    align-items: center;
`;

export const Logo = styled.img `
    width: 86.85vw;
    margin: 20.51vh 0 0 0;
`;

export const Slogan = styled.p `
    margin: 3.77vh 0 ;
    font-family: ${global.fonts.quickSand};
    font-weight: 600;
    font-size: 3.73vw;
    color: rgba(0, 0, 0, 0.5);
`;

export const StartButton = styled.button `
    width: 78.73vw;
    height: 8.63vh;

    margin: 10.5vh 0 0 0;

    font-family: ${global.fonts.nunito};
    font-weight: 600;
    font-size: 7vw;

    color: white;
    background-color: ${global.colors.laranja};

    outline: none;
    border: none;
    border-radius: 4.2vw;

    box-shadow: 0 14px 11px -11px rgba(0, 0, 0, 0.25);

    transition: transform 0.3s ease;
    :active {
        transform: translateY(1vh);
    }
`;

export const SkipTut = styled.u `
    margin: 3vh;
    font-family: ${global.fonts.quickSand};
    font-weight: 600;
    font-size: 3.73vw;
    color: ${global.colors.laranja};
`;

/*------------------------------------------------------*/

export const CurrentDiv = styled.div `
    display: flex;
    width: 90%;
    z-index: 1;

    padding: 0 5%;
    margin: 2% 0 0 0;

    justify-content: space-evenly;
`;

export const CurrentPage = styled.div `
    width: 20%;
    height: 8px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.24);
`;

/*------------------------------------------------------*/

export const PageTitle = styled.h1 `
    width: 82vw;
    margin: 0 9vw;

    font-size: 5.5vw;
    font-weight: 700;
    font-family: ${global.fonts.quickSand};
`;

export const PageDescription = styled.p `
    width: 82vw;
    margin: 0 9vw 6vh 9vw;

    font-size: 5.5vw;
    font-weight: 500;
    font-family: ${global.fonts.quickSand};
`;

/*------------------------------------------------------*/

export const BackImg = styled.img `
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
`;

export const TemplateDiv = styled.div `
    display: flex;
    width: 100vw;
    height: 134.18vw;

    position: relative;
    z-index: 1;

    margin: 0 0 10% 0;
    
    justify-content: center;
    align-items: center;

    overflow: hidden;
`;

export const Template = styled.img `
    width: 50.5vw;

    z-index: 1;
    position: absolute;
    left: -50.5vw;

    filter: drop-shadow(0 7px 7px rgba(0, 0, 0, 0.25));

    transition: transform 0.3s ease-out;
`;

/*------------------------------------------------------*/

export const ButtonDiv = styled.div `
    display: flex;
    width: 100vw;
    justify-content: space-evenly;
`;

export const PrevNext = styled.button `
    width: 43.33vw;
    height: 7vh;

    font-size: 5vw;
    font-weight: 600;
    font-family: ${global.fonts.quickSand};

    border-radius: 4vw;
    border: solid 2.5px ${global.colors.laranja};

    color: ${global.colors.laranja};

    transition: transform 0.3s ease;
    :active {
        transform: translateY(3px);
    }
`;