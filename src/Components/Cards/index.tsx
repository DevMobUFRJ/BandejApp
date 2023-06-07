import { BorderDiv, Card, CardImg, CardsDiv } from "./style";

import fundao from '../../Assets/Restaurante/fundao.png';
import ifcsPv from '../../Assets/Restaurante/pv.png';
import duque from '../../Assets/Restaurante/dc.png';
import macae from '../../Assets/Restaurante/mc.png';
import { useState } from "react";

interface IfirstChildProps {
    childToParent: Function;
}
export default function Cards({childToParent}: IfirstChildProps) {

    const [ultimo, setUlt] = useState<HTMLElement|null>();
    const setBorder = (id: string, value: string) => {
        if(ultimo != null) ultimo.style.boxShadow = '0 0.8vh 20px 3px rgb(0, 0, 0, 0.3)'

        const clicado = document.getElementById(id);
        if(clicado != null) clicado.style.boxShadow = 'none';

        document.querySelector('.bordaAtiva')?.classList.remove('bordaAtiva');
        document.getElementById(value)?.classList.add('bordaAtiva');

        setUlt(clicado);
    }

    return(
        <CardsDiv>
            <BorderDiv style={{marginLeft: '12.5vw'}} id="ct">
                <Card onClick={(e) => {childToParent(e.currentTarget.value); setBorder(e.currentTarget.id, e.currentTarget.value)}}
                name='option' value='ct' id="central">
                    <CardImg src={fundao} alt="Mapa representativo com um pin na localização do Fundão."/>
                    CT, Central e Letras
                </Card>
            </BorderDiv>

            <BorderDiv id="pv">
                <Card onClick={(e) => {childToParent(e.currentTarget.value); setBorder(e.currentTarget.id, e.currentTarget.value)}}
                name='option' value='pv' id="praia">
                    <CardImg src={ifcsPv} alt="Mapa representativo com um pin nas localizações dos restaurantes universitários do IFCS e Praia Vermelha."/>
                    IFCS e Praia Vermelha
                </Card>
            </BorderDiv>

            <BorderDiv id="dc">
                <Card onClick={(e) => {childToParent(e.currentTarget.value); setBorder(e.currentTarget.id, e.currentTarget.value)}}
                name='option' value='dc' id="duque">
                    <CardImg src={duque} alt="Mapa representativo com um pin na localização do restaurante universitário de Duque de Caxias."/>
                    Duque de Caxias
                </Card>
            </BorderDiv>

            <BorderDiv style={{marginRight: '12.5vw'}} id="mc">
                <Card onClick={(e) => {childToParent(e.currentTarget.value); setBorder(e.currentTarget.id, e.currentTarget.value)}}
                name='option' value='mc' id="macae">
                    <CardImg src={macae} alt="Mapa representativo com um pin na localização do restaurante universitário de Macaé."/>
                    Macaé
                </Card>
            </BorderDiv>
        </CardsDiv>
    );
}