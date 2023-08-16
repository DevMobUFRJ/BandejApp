import styled from "styled-components";
import { global } from "../../globalStyle";

export const SideBarDiv = styled.div `
    display: grid;
    grid-template-rows: 20% auto 15%;
    min-width: 0vw;
    width: 0vw;
    height: 100vh;

    z-index: 2;
    position: fixed;
    left: 0;
    top: 0;

    background: white;

    overflow: hidden;
    transition: width 0.3s ease;
`;

/*----------------------------------------------------------------------------*/

export const SideHeader = styled.section `
    display: grid;
    grid-template-columns: auto auto;
    margin: 6vh 0 0 0;
`;

export const LogoImg = styled.img `
    width: 26.67vw;
    margin: 0 0 0 5vw;
`;

export const CloseImg = styled.img `
    width: 8.88vw;
    margin: 0 0 0 15vw
`;

/*----------------------------------------------------------------------------*/

export const ItemsDiv = styled.ul `
    display: grid;
    grid-auto-rows: 0.15fr;
    width: 100%;
    height: 100%;
`;

export const SideItem = styled.li `
    display: grid;
    grid-template-columns: 16% auto auto;
    
    align-items: center;
    padding: 0 0 0 6vw;
    
    font-family: ${global.fonts.nunito};
    font-size: 5.5vw;

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

export const Rodape = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Direita = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const Versao = styled.p `
    font-family: ${global.fonts.quickSand};
    color: ${global.colors.laranja};
    font-size: 12px;
`;

export const LogoUfrj = styled.img `
    padding-top: 20px;
`;