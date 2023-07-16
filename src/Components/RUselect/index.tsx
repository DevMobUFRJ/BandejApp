import arrowDown from '../../Assets/Cardapio/ArrowDown.svg'
import { DropArrow, DropDiv, DropItem } from './style';

type DropDownProps = {
    text: string,
    selecionaRU: Function
};

export default function RUselect({text, selecionaRU}: DropDownProps) {

    let dist = 0;
    let dist2 = 0;
    const seta = document.getElementById('seta');
    const dropdown = document.getElementById('dropdown');
    const options = document.querySelectorAll('#dropdown button');
    const blurdiv = document.getElementById('blurdiv');

    document.getElementById(text)?.classList.replace('ruOption', 'selected');

    const OpenDrop = () => { // Abre o dropdown e adiciona os listeners
        dist = 0;
        requestAnimationFrame(() => {
        blurdiv?.classList.add('dropBlur');
            if(dropdown != null) dropdown.style.height = '20.72vh';
            options?.forEach((option: any) => {
                if(!option.classList.contains('selected')){
                    option.style.transform = `translateY(${5.18*dist}vh)`;
                    dist+=1;
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
                for(dist=0 ; dist<options.length ; dist+=1) {
                    if(options[dist].classList.contains('selected')) break;
                }
                for(dist2=0 ; dist2<options.length ; dist2+=1) {
                    if (options[dist2] === elemento) break;
                }

                const velho = document.getElementById(options[dist].id);
                const novo = document.getElementById(options[dist2].id);

                if(velho) velho.classList.replace('selected', 'ruOption');
                if(novo) novo.classList.replace('ruOption', 'selected');
                selecionaRU(options[dist2].id);
            }
        })

    }

    return (
        <DropDiv id='dropdown' onClick={OpenDrop}>
            <DropItem id='ct' className='ruOption'>Central, CT e Letras</DropItem>

            <DropItem id='pv' className='ruOption'>IFCS e Praia Vermelha</DropItem>

            <DropItem id='dc' className='ruOption'>Duque de Caxias</DropItem>

            <DropItem id='mc' className='ruOption'>Macaé</DropItem>

            <DropArrow id='seta' src={arrowDown}/>
        </DropDiv>
    );
}