import styled from "styled-components";
import { global } from "../../globalStyle";

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }

    align-items: center;

    .ruAva {
        top: 0;
        border: none;
    }
`;

export const Titulo = styled.h1 `
    margin: 4.5vh 0 0 0;
    font-family: ${global.fonts.nunito};
    font-size: 7vw;
    font-weight: 600;
`;

/*-----------------------------------------------*/

export const FormDiv = styled.form `
    display: flex;
    flex-direction: column;

    margin-top: 2vh;

    align-items: center;
`;

export const Comentsec = styled.div `
    display: flex;
    width: 85vw;
    height: 25vh;
    margin-top: 30px;

    position: relative;

    padding: 2vh 0 0 0;

    border-radius: 4.67vw;
    border: solid 1.5px transparent;

    background: ${global.colors.cinza1};

    :focus-within {border: solid 1.5px ${global.colors.laranja};}
`;

export const ComentIcon = styled.img `
    width: 7vw;
    margin: 0.3vh 2vw 0 4vw;
    align-self: flex-start;
`;

export const ComentInput = styled.textarea `
    width: 82%;
    height: 95%;

    font-size: 4.67vw;
    font-family: ${global.fonts.nunito};
    
    outline: none;
    border: none;
`;

/*-----------------------------------------------*/

export const ErroAva = styled.p `
    align-self: flex-start;
    max-width: 85vw;

    font-family: ${global.fonts.nunito};
    font-size: 4.6vw;
    color: red;
`;

/*-----------------------------------------------*/

export const Enviarbutton = styled.button `
    width: 78.73vw;
    height: 8.63vh;
    margin-top: 50px;

    align-items: center;
    justify-content: center;

    font-family: ${global.fonts.bebas};
    font-size: 4.31vh;

    background: ${global.colors.laranja};
    color: white;
    outline: none;
    border: none;
    border-radius: 4.2vw;

    transition: transform 0.3s ease;
    :active {
        transform: translateY(10px);
    }
`;

export const AvalImg = styled.img `
    width: 6.3vw;
    //padding: 0 4.9vw 0 9.6vw;
    display: flex;
    position: absolute;
    top: 5vh;
    left: 6.3vw;
    outline: none;
    border: none;
`;