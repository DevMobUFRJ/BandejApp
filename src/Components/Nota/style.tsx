import styled from "styled-components";
import { global } from "../../globalStyle";

export const NotaDiv = styled.div `
    display: inline-flex;
    margin-top: 30px;
    align-items: center;
`;

export const NotaTitle = styled.h2 `
    margin: 3.6% 3% 0 0;

    font-family: ${global.fonts.nunito};
    font-size: 5.5vw;
    font-weight: 500;
`;
/*
    A animação foi inteiramente adaptada do link,
    qualquer coisa chama o Iago :)
    https://jsfiddle.net/qw04uj6v/1/

    https://stackoverflow.com/questions/10041998/how-can-i-use-backslashes-in-a-string
*/
export const RatingDiv = styled.ul `
    display: flex;
    
    .ativo~::before {
        content: "${'\\2606'}";
    }

    :hover ::before {
        content: "${'\\2605'}";
    }
`;

export const StarIcon = styled.li `
    list-style-type: none;
    padding: 0 0.5vw 0 0.5vw;
    font-size: 9vw;
    color: ${global.colors.laranja};

    ::before {
        content: "${'\\2605'}";
    }

    :hover~::before {
        content: "${'\\2606'}";
    }
`;