/*------------------------Import dos Componentes------------------------*/
import { RestSelectDiv, RestTitle, SelectImg, SelectOption } from "./style";

/*------------------------Import das Imagens------------------------*/
import Central from '../../Assets/Restaurante/RUcentral.jpg';
import Macae from '../../Assets/Restaurante/macae.png';
import Pv from '../../Assets/Restaurante/ifcspv.png';
import Duque from '../../Assets/Restaurante/duque.png';
import { useState } from "react";
import { global } from "../../globalStyle";

type propriedades = {
    childToParent: Function
}

export default function RestSelect({childToParent}: propriedades) {

    const [ruSelecionado, setRu] = useState<string>();
     
    const ruHandler = (value: string) => {
        if((ruSelecionado === undefined) && value) {
            const confirm = document.getElementById('confirm');

            if(confirm) confirm.style.background = `${global.colors.laranja}`;
            selecionarRu(value);
        }
        else {
            selecionarRu(value);
        }
    }

    const selecionarRu = (value: string) => {
        if(value === ruSelecionado) return;

        const restaurantes = document.querySelectorAll('#ruOption');

        restaurantes.forEach((restaurante) => {
            const textoSelecionado = restaurante.querySelector('h2');

            if(restaurante.getAttribute('value') === value) {
                if(restaurante.classList.contains('restNotSelecionado')) {
                    restaurante.classList.replace('restNotSelecionado', 'restSelecionado');
                    textoSelecionado?.classList.add('textoSelecionado');
                }
                else {
                    restaurante.classList.add('restSelecionado');
                    textoSelecionado?.classList.add('textoSelecionado');
                }
            }
            else {
                if(restaurante.classList.contains('restSelecionado')) {
                    restaurante.classList.replace('restSelecionado', 'restNotSelecionado');
                    textoSelecionado?.classList.remove('textoSelecionado');
                }
                else {
                    restaurante.classList.add('restNotSelecionado');
                    textoSelecionado?.classList.remove('textoSelecionado');
                }
            }
        })

        childToParent(value);
        setRu(value);
    }

    return (
        <RestSelectDiv>
            <SelectOption id="ruOption" value="ct"
            onClick={(e) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Central}/>
                <RestTitle>Central, CT e Letras</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="pv"
            onClick={(e) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Pv}/>
                <RestTitle>IFCS e Praia Vermelha</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="dc"
            onClick={(e) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Duque}/>
                <RestTitle>Duque de Caxias</RestTitle>
            </SelectOption>

            <SelectOption id="ruOption" value="mc"
            onClick={(e) => {ruHandler(e.currentTarget.value)}}>
                <SelectImg src={Macae}/>
                <RestTitle>Macaé</RestTitle>
            </SelectOption>
        </RestSelectDiv>
    );
}