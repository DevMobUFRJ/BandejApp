import styled from "styled-components";
import { global } from "../../globalStyle";

export const SideBarDiv = styled.div `
    display: flex;
    flex-direction: column;
    min-width: 0vw;
    width: 0vw;
    height: 100vh;

    z-index: 4;
    position: fixed;
    left: 0;
    top: 0;

    background: white;

    overflow: hidden;
    transition: width 0.3s ease;
`;

/*----------------------------------------------------------------------------*/

export const SideHeader = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 5vh;
`;

export const LogoImg = styled.img `
    width: 62.5vw;
    height: 6vh;

    margin: 0 0 0 5vw;
`;

export const CloseImg = styled.img `
    align-self: center;
    width: 3.8vw;
`;

/*----------------------------------------------------------------------------*/

export const ItemsDiv = styled.ul `
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 6vh;
`;

export const SideItem = styled.li `
    border: 1px solid ${global.colors.cinzaOpaco(.16)};
    display: grid;
    grid-template-columns: 16% auto auto;
    
    align-items: center;
    padding: 0 0 0 6vw;
    
    font-family: ${global.fonts.nunito};
    font-size: 5.5vw;

    margin-top: 5%;
    width: 80%;
    border-radius: 16px;
    height: 9vh;

    :active {
		background-color: ${global.colors.cinza1};
	}
`;

export const SideIcon = styled.img `
    width: 6.67vw;
`;

export const ItemName = styled.p `
    font-family: ${global.fonts.quickSand};
    font-weight: 700;
    font-size: 4.44vw;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const NotifNumber = styled.p `
    display: flex;
    width: 4vw;
    height: 4vw;

    align-items: center;
    justify-content: center;

    font-size: 4.5vw;
    font-weight: 700;

    border-radius: 50%;

    background: ${global.colors.laranja};
    color: ${global.colors.branco};
`;

export const Versao = styled.p `
    font-family: ${global.fonts.quickSand};
    font-size: 12px;
    
    line-height: 12px;
    text-align: center;
    font-weight: 500;

    color: ${global.colors.cinza};
`;

export const InstitutoDiv = styled.div `
    display: flex;
    width: 66.6vw;
    height: 6.125vh;

    margin-top: 4.625vh;
    align-self: center;
    position: relative;

    align-items: center;
    justify-content: space-evenly;
`;

export const Linha = styled.div `
    width: 1px;
    height: 4.5vh;
    background-color: ${global.colors.cinzaOpaco(.16)};
`;

export const FecharDiv = styled.div `
    display: flex;
    width: 20.3vw;
    height: 20.3vw;
    margin-top: 4.625vh;
    
    flex-direction: column;
    justify-content: center;
    align-self: center;

    border: 1px solid ${global.colors.cinzaOpaco(.16)};
    border-radius: 50%;
`;

export const TextoFechar = styled.p `
    margin-top: 1.125vh;

    color: ${global.colors.preto};
    font-family: ${global.fonts.quickSand};

    text-align: center;
    font-size: 10px;
    font-weight: 700;
`;
