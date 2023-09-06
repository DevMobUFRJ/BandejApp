import { IPratoProps } from "../../Types/storage";
import Prato from "../Prato";
import { Aviso, DiaDiv, Gluten, InfoIcon, Menu } from './style'

import Info from '../../Assets/Cardapio/info.svg';

type horario = {
    hora: number | undefined;
    cardapio: {
        almoco: IPratoProps;
        janta: IPratoProps;
    } | undefined;
}

function clean_str(myStr : string | undefined){
    let clean_string;
    if(myStr)
        clean_string = myStr.replace(/\([^)]*\)/g, '');
    return clean_string;
}

export default function Dia({hora, cardapio}: horario) {
    return (
        <DiaDiv>
            <Gluten>
                <InfoIcon src={Info} alt='Informação'/>
                <Aviso>As preparações podem conter glúten</Aviso>
            </Gluten>

            <Menu style={{display: hora===0? 'flex':'none'}}>
                <Prato
                emoji={0}
                descricao={clean_str(cardapio?.almoco.entrada)}/>
                <Prato
                emoji={1}
                descricao={clean_str(cardapio?.almoco.pratoPrincipal)}/>
                <Prato
                emoji={2}
                descricao={clean_str(cardapio?.almoco.pratoVeg)}/>
                <Prato
                emoji={3}
                descricao={clean_str(cardapio?.almoco.guarnicao)}/>
                <Prato
                emoji={4}
                descricao={clean_str(cardapio?.almoco.acompanhamento)}/>
                <Prato
                emoji={5}
                descricao={clean_str(cardapio?.almoco.sobremesa)}/>
            </Menu>
            
            <Menu style={{display: hora===1? 'flex':'none'}}>
                <Prato
                emoji={0}
                descricao={clean_str(cardapio?.janta.entrada)}/>
                <Prato
                emoji={1}
                descricao={clean_str(cardapio?.janta.pratoPrincipal)}/>
                <Prato
                emoji={2}
                descricao={clean_str(cardapio?.janta.pratoVeg)}/>
                <Prato
                emoji={3}
                descricao={clean_str(cardapio?.janta.guarnicao)}/>
                <Prato
                emoji={4}
                descricao={clean_str(cardapio?.janta.acompanhamento)}/>
                <Prato
                emoji={5}
                descricao={clean_str(cardapio?.janta.sobremesa)}/>
            </Menu>
        </DiaDiv>
    );
};