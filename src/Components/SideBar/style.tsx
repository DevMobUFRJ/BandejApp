import styled from "styled-components";
import { global } from "../../globalStyle";

export const SideDiv = styled.div `
    display: flex;
    margin-left: 4.4vw;
    z-index: 2;
`;

export const SideBarDiv = styled.div `
    display: grid;
    grid-template-rows: 20% auto;
    min-width: 0vw;
    width: 0vw;
    height: 100vh;

    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;

    background: white;

    overflow: hidden;
    transition: width 0.3s ease;
`;

export const SideImg = styled.img `
    width: 9.45vw;
    height: 9.45vw;
`;

/*----------------------------------------------------------------------------*/

export const NotifDiv = styled.div `
    display: flex;
    position: relative;
`;

export const NotifIcon = styled.div `
    display: flex;
    width: 4vw;
    height: 4vw;
    position: absolute;

    align-items: center;
    justify-content: center;

    outline: solid 1.7vw ${global.colors.branco};
    border-radius: 50%;
    right: -10%;
    background-color: ${global.colors.laranja};
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
    grid-template-columns: 16% auto;
    
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
    font-weight: bold;
    font-size: 4.44vw;
    color: ${global.colors.cinza};
`;

/*----------------------------------------------------------------------------*/

export const NotifNumber = styled.p `
    display: flex;
    width: 8.33vw;
    height: 8.33vw;

    align-items: center;
    justify-content: center;

    font-size: 4.5vw;
    font-weight: 700;

    border-radius: 50%;

    background: ${global.colors.laranja};
    color: ${global.colors.branco};
`;