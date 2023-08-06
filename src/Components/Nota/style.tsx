import styled from "styled-components";
import { global } from "../../globalStyle";

export const NotaDiv = styled.div `
    display: inline-flex;
    align-items: center;
`;
/*
    A animação foi inteiramente adaptada do link,
    qualquer coisa chama o Iago :)
    https://jsfiddle.net/qw04uj6v/1/

    https://stackoverflow.com/questions/10041998/how-can-i-use-backslashes-in-a-string
*/
export const RatingDiv = styled.ul `
    display: flex;
    width: 100%;
    justify-content: space-between;
    
    .ativo~::before {
        content: "${'\\2606'}";
    }

    :hover ::before {
        content: "${'\\2605'}";
    }
`;

export const StarIcon = styled.li `
    font-size: 17vw;
    color: ${global.colors.laranja};

    list-style-type: none;

    ::before {
        content: "${'\\2605'}";
    }

    :hover~::before {
        content: "${'\\2606'}";
    }
`;