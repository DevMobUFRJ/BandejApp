import styled from "styled-components";
import { global } from "../../globalStyle";

export const InformDiv = styled.div `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    align-items: center;
    justify-content: center; 

    background: ${global.colors.fundo};
`;


export const SelecionaInfoDivBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 67.11vw;
    height: 4.69vw;


    border-radius: 24px;
    padding: 1.95vw;
    margin: 26px 0 15px;

    background: ${global.colors.cinza1};
`;

export const SelecionaInfoDiv = styled.div `
    display: block;
    width: 100%;
    height: 100%;    
 `;

/*----------------------------------------------------------------------------*/

export const BaloesContainer = styled.section `
    display: flex;
    flex-direction: row;

    width: 67.11vw;
    height: 20vw;

    padding: 1.95vw;
    border-radius: 24px;

    margin-bottom: 41px;
    gap: 1.95vw;

    background: ${global.colors.cinza1};
`;

export const BalaoInfo = styled.section `
    display: flex;
    flex-direction: column;
    border-radius: 16px;

    background-color: ${global.colors.branco};
`;

export const SubBalaoInfo = styled.section `
    display: flex;
    flex-direction: row;
    height: 100%;

    border-radius: 16px;
`;

export const InfoTitle = styled.h3 `
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    padding: 1.48vw 0 0 2.19vw;

    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const InfoGrid = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const InfoSubtitle = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 0.94vw;
    font-weight: 500;

    margin-top: auto;

    align-self: start;                            //talves remover
    padding-left: 3.75vw;                         //talves remover
    
    color: ${global.colors.cinzaClaro};
`;

export const InfoArea = styled.section `
    display: flex;
    flex-direction: column;
    margin-top: auto;
    padding-bottom: 1.56vw;
    
    gap: 1.17vw;
`;

/*----------------------------------------------------------------------------*/

export const InfoBalao = styled.div `
    display: flex;
    flex-direction: column;
    width: 15.29vw;
    height: 4.16vw;

    padding: 0.70vw 0;
    
    align-items: center;
    justify-content: center;

    border: solid 1px ${global.colors.cinzaOpaco(0.16)};
    border-radius: 16px;
`;

export const InfoUndertitle = styled.p `
    padding-bottom: 0.63vw;

    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 500;

    text-align: center;
    color: ${global.colors.cinzaClaro};
`;

export const InfoValor = styled.h4 `
    width: 70%;
    
    text-align: center;
    font-family: ${global.fonts.quickSand};
    font-size: 1.25vw;
    font-weight: 700;

    color: ${global.colors.cinzaPratos};
`;