import arrowDown from '../../Assets/Cardapio/ArrowDown.svg'
import Pin from '../../Assets/Cardapio/Pin.svg'
import { DropDiv, DropItem, DropArrow, PinLugar, Opcoes } from './style';

type DropDownProps = {
    text: string,
    selecionaRU: Function
};

export default function RUselect({text, selecionaRU}: DropDownProps) {

    const seta = document.getElementById('seta');
    const dropdown = document.getElementById('dropdown');
    const options = document.querySelectorAll('#dropdown button');
    const blurdiv = document.getElementById('blurdiv');

    document.getElementById(text)?.classList.replace('ruOption', 'selected');

    const OpenDrop = () => { // Abre o dropdown e adiciona os listeners
        requestAnimationFrame(() => {
        blurdiv?.classList.add('dropBlur');
            if(dropdown != null) dropdown.style.height = '20.72vh';
            options?.forEach((option: any, indice) => {
                if(!option.classList.contains('selected')){
                    option.style.transform = `translateY(${5.18*indice}vh)`;
                }
            })
            if(seta != null) seta.style.transform = 'rotate(90deg)';
        })

        blurdiv?.addEventListener('click', DropHandler);
        seta?.addEventListener('click', DropHandler);
        options.forEach((option) => {option.addEventListener('click', DropHandler)});
    }

    const DropHandler = (evento: Event) => { // Remove os listeners e manipula o CloseDrop
        const triggerElem = evento.currentTarget;

        evento.stopPropagation();
        blurdiv?.removeEventListener('click', DropHandler);
        seta?.removeEventListener('click', DropHandler);
        options.forEach((option) => {option.removeEventListener('click', DropHandler)});

        if(triggerElem === blurdiv || triggerElem === seta) {
            CloseDrop();
            return;
        }
        else {
            options.forEach(opt => {
                if(triggerElem === opt) {
                    CloseDrop(opt);
                    return;
                }
            });
        }
    }

    const CloseDrop = (elemento?: Element) => {

        requestAnimationFrame(() => {
            if(seta != null) seta.style.transform = 'rotate(-90deg)';
            blurdiv?.classList.remove('dropBlur');

            options?.forEach((option: any) => {
                if(!option.classList.contains('selected')) option.style.transform = 'translateY(0)';
            })
            if(dropdown != null) dropdown.style.height = '5.18vh';

            if(elemento) {
                const velho = document.querySelector('.selected');
                const novo = elemento;

                if(velho) velho.classList.replace('selected', 'ruOption');
                if(novo) novo.classList.replace('ruOption', 'selected');
                selecionaRU(novo.id);
            }
        })

    }

    return (
        <DropDiv id='dropdown' onClick={OpenDrop}>
            <PinLugar src={Pin}/>
            <Opcoes>
                <DropItem id='ct' className='ruOption'>Central, CT e Letras</DropItem>

                <DropItem id='pv' className='ruOption'>IFCS e Praia Vermelha</DropItem>

                <DropItem id='dc' className='ruOption'>Duque de Caxias</DropItem>

                <DropItem id='mc' className='ruOption'>Macaé</DropItem>
            </Opcoes>
            <DropArrow id='seta' src={arrowDown}/>
        </DropDiv>
    );
}