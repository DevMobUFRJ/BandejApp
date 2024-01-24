import styled from "styled-components";
import { global } from "../../globalStyle";

type mostrarErro = { cor: boolean; }

export const Avadiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    align-items: center;

    background: ${global.colors.fundo};

    .envioDesativado {
        background-color: ${global.colors.desativado};
        transform: none;
    }

    .react-datepicker-wrapper {
        display: flex;
        height: 100%;
        width: 100%;
    }
`;

/*----------------------------------------------------------------------------*/

export const AvaForm = styled.form `
    display: flex;
    flex-direction: column;
    margin: 24px 0 32px 0;
`;

export const FormDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 78.125vw;
    
    margin-bottom:24px;
    padding: 24px;
    
    border-radius: 24px;
    // background-color: ${global.colors.branco};
    background-color: black;
`;

export const SubFormDiv = styled.div `
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    // gap: 32px;
    justify-content: space-between;
`;

export const AvaSection = styled.section `
    display: grid;
    grid-template-rows: auto auto;
    grid-gap: 9px;
`;

/*----------------------------------------------------------------------------*/

export const AvaTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    color: ${global.colors.cinza};
`;

export const AvaSubtitle = styled.p `
    margin-left: 6px;

    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;
    
    color: ${global.colors.cinzaClaro};
`;

export const OBS = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 1.09vw;
    font-weight: 500;

    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const SelecionaAvaDivBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    width: 100%;

    border-radius: 16px;
    // background: ${global.colors.branco};
    background: blue;
`;

export const SelecionaAvaDiv = styled.div `
    display: block;
    width: 100%;
    height: 4.375vw;    
`;

/*----------------------------------------------------------------------------*/

export const EmailInput = styled.input `
    height: 4.375vw;

    padding-left: 16px;

    outline: none;
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 16px;
    box-sizing: border-box;

    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 500;
    color: ${global.colors.cinza};
    
    :focus { border-color: ${global.colors.laranja}; }
`;

/*----------------------------------------------------------------------------*/

export const TurnoDiv = styled.div `
    display: inline-flex;
    width: 100%;

    gap: 24px;

    .turnoSelecionado {
        color: ${global.colors.branco};
        background-color: ${global.colors.laranja};
        transform: scale(1.03, 1.03);
    }
`;

export const TurnoButton = styled.button `
    width: 48.64%;                          //toDOOOOOOOOOOOOOOOOOOOOOOO
    height: 4.375vw;

    border: none;
    border-radius: 12px;

    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    color: ${global.colors.cinza};
    // background-color: ${global.colors.cinzaOpaco(0.08)};
    background-color: red;

    transition: transform 0.5s ease;
`;

/*----------------------------------------------------------------------------*/

export const DateDiv = styled.div `
    display: flex;
    // width: 100%;
    height: 4.375vw;

    // position: relative;

    outline: none;
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 16px;
    box-sizing: border-box;

    :focus-within { border-color: ${global.colors.laranja}; }
`;

export const DateSelect = styled.input `
    width: 100%;
    height: 100%;

    // position: relative;
    padding-left: 16px;
    
    outline: none;
    border: none;
    border-radius: inherit;
    
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;
    color: ${global.colors.cinza};

    appearance: none;
    ::-webkit-calendar-picker-indicator { display: none; }
`;

export const DateIcon = styled.img `
    width: 1.875vw;
    height: 2.46vw;

    
    align-self: center;
    padding-right: 16px;
`;

/*----------------------------------------------------------------------------*/

export const Comentario = styled.textarea<mostrarErro> `
    height: 9.61vw;

    padding: 14px 0 0 20px;

    outline: none;
    border: 2px solid ${global.colors.cinzaOpaco(0.24)};
    border-radius: 12px;

    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 500;
    color: ${global.colors.cinza};

    resize: none;

    :focus { border-color: ${global.colors.laranja}; }

    ::placeholder {
        color: ${placeholder => placeholder.cor ? 'red':`${global.colors.cinza}`};
    }
`;

/*----------------------------------------------------------------------------*/

export const EnviarButton = styled.button `
    width: 100%;
    height: 3.83vw;
    margin-top: 15px;

    font-family: ${global.fonts.quickSand};
    font-size: 1.56vw;
    font-weight: 700;
    color: ${global.colors.branco};

    outline: none;
    border: none;
    border-radius: 12px;

    background-color: ${global.colors.laranja};
    transition: transform 0.3s ease;
    transform: translateY(0.3vh);
`;

/*----------------------------------------------------------------------------*/

export const MensagemErro = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 0.845vw;
    font-weight: 700;
    color: red;
`;
