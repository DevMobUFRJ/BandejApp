import { Descricao, Emoji, Linha, PratoDiv, Conteudo,
        Infos, Tipo } from "./style";

import Acompanhamentos from '../../Assets/Cardapio/Icones/Acompanhamentos.svg';
import Entrada from '../../Assets/Cardapio/Icones/Entrada.svg';
import Guarnicao from '../../Assets/Cardapio/Icones/Guarnicao.svg';
import PratoPrincipal from '../../Assets/Cardapio/Icones/PratoPrincipal.svg';
import PratoVegano from '../../Assets/Cardapio/Icones/PratoVegano.svg';
import Sobremesa from '../../Assets/Cardapio/Icones/Sobremesa.svg';

type info = {
    emoji: number;
    descricao?: string;
}

const icone = (indice: number) => {
    switch (indice)
    {
        case 1:
            return Entrada;
        case 2:
            return PratoPrincipal;
        case 3:
            return PratoVegano;
        case 4:
            return Guarnicao;
        case 5:
            return Acompanhamentos;
        case 6:
            return Sobremesa;
        default:
            return "ERRO"
    }
};

const bordaRedonda = (indice: number) => {
    if (indice === 1)
        return "16px 16px 0 0";

    if (indice === 6)
        return "0 0 16px 16px";

    return "0";
};

const tipoRefeicao = (indice: number) => {
    switch (indice)
    {
        case 1:
            return "Entrada";
        case 2:
            return "Prato principal";
        case 3:
            return "Prato vegano";
        case 4:
            return "Guarnição";
        case 5:
            return "Acompanhamentos";
        case 6:
            return "Sobremesa";
        default:
            return "ERRO";
    }
};

export default function Prato({emoji, descricao}: info) {
    return(
        <Conteudo style={{borderRadius: `${bordaRedonda(emoji)}`}}>
            <PratoDiv>
                <Emoji src={`${icone(emoji)}`} alt={`Ícone de ${tipoRefeicao(emoji)}`}/>
                <Infos>
                    <Tipo>{`${tipoRefeicao(emoji)}`}</Tipo>
                    <Descricao id="prato">
                        {descricao}
                    </Descricao>
                </Infos>
            </PratoDiv>    
            <Linha />
        </Conteudo>
    );
};