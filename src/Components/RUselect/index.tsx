import arrowDown from '../../Assets/Cardapio/ArrowDown.svg';
import Pin from '../../Assets/Cardapio/Pin.svg';
import { global } from "../../globalStyle";
import { DropDiv, Opcoes, DropItem, 
    PinLugar, Selecionado, DropArrow } from './style';

type DropDownProps = {
    text: string,
    selecionaRU: Function
};

export default function RUselect({text, selecionaRU}: DropDownProps) {

    const seta = document.getElementById('seta');

    const containerOpcoes = document.getElementById('opcoes');
    const options = document.querySelectorAll('#dropdown button');
    
    const containerSelecionado = document.getElementById('selecionado');
    const elementoPrimeiraOpcao = document.getElementById(text);
    
    if (containerSelecionado && elementoPrimeiraOpcao && seta)
        containerSelecionado.insertBefore(elementoPrimeiraOpcao, seta);

    const ordem = ['ct', 'pv', 'dc', 'mc'];

    const arruma = () => {
        let i = 0;
        for (let ru of ordem) {
            const it = document.getElementById(ru);

            if (!it)
                continue;
            if(it.id === RUselecionado) {
                it.style.background = '';
                continue;
            }
            if (i % 2) {
                it.style.background = `${global.colors.cinzaOpaco(0.08)}`;
            }
            else {
                it.style.background = '';
            }
            i++;
            containerOpcoes?.appendChild(it);
        }
    }

    let RUselecionado = text;
    arruma();

    let fading: NodeJS.Timer;

    const fade = (abrindo: boolean) => {
        const direcao = abrindo ? 1 : -1;
        requestAnimationFrame(() => {
            if (!containerOpcoes)
                return;
            if (!containerOpcoes.style.opacity)
                containerOpcoes.style.opacity = '0';
            containerOpcoes.style.display = 'flex';

            clearInterval(fading);

            fading = setInterval (() => {
                requestAnimationFrame(() => {
                    let opacidade = parseFloat(containerOpcoes.style.opacity);
    
                    console.log(opacidade)
                    if ((abrindo && opacidade < 1) || !abrindo && opacidade > 0)
                        containerOpcoes.style.opacity = `${opacidade + 0.02 * direcao}`
                    else {
                        clearInterval(fading);
                        if (!abrindo) {
                            containerOpcoes.style.display = 'none';
                        }
                    }
                })
            }, 5);
        })
    };

    const OpenDrop = () => { // Abre o dropdown e adiciona os listeners
        fade(true);
        
        seta?.addEventListener('click', DropHandler);
        options.forEach((option) => {option.addEventListener('click', DropHandler)});
    }

    const DropHandler = (evento: Event) => { // Remove os listeners e manipula o CloseDrop
        const triggerElem = evento.currentTarget;

        evento.stopPropagation();
        seta?.removeEventListener('click', DropHandler);
        options.forEach((opt) => opt.removeEventListener('click', DropHandler));
        
        options.forEach(opt => {
            if(triggerElem === opt)
                CloseDrop(opt)
        });
    }

    const CloseDrop = (elemento?: Element) => {
        requestAnimationFrame(() => {
            if(elemento) {
                const velho = document.querySelector('#selecionado button');
                
                if (velho && containerOpcoes && containerSelecionado && seta) {
                    containerOpcoes.appendChild(velho);
                    containerSelecionado.insertBefore(elemento, seta);
                }
                RUselecionado = elemento.id;
                selecionaRU(elemento.id);
                arruma();
            }

            fade(false);
        })

    }

    return (
        <DropDiv id='dropdown' onClick={OpenDrop}>
            <Selecionado id='selecionado'>
                <PinLugar src={Pin}/>
                <DropArrow id='seta' src={arrowDown}/>
            </Selecionado>
            <Opcoes id='opcoes'>
                <DropItem id='ct'>Central, CT e Letras</DropItem>

                <DropItem id='pv'>IFCS e Praia Vermelha</DropItem>

                <DropItem id='dc'>Duque de Caxias</DropItem>

                <DropItem id='mc'>Macaé</DropItem>
            </Opcoes>
        </DropDiv>
    );
}