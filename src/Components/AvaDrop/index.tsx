import arrowDown from '../../Assets/Avaliacao/ArrowDown.svg';
import { AvaDropdown, DropIcon, DropItemAva } from './style';

type dropInfo = { setarDrop: Function; }

export default function AvaDrop({setarDrop}: dropInfo) {
    
    let dist=0, dist2=0;

    const DropAva = () => {
        dist = 0;
        
        const dropdown = document.getElementById('AvaDrop');
        const rus = document.querySelectorAll('#AvaDrop button');
        const central = document.getElementById('central');
        const page = document.getElementById('AvaPage');

        if(dropdown && (rus[0]=== central) && central) dropdown.style.height = `${5.3*rus.length}vh`;
        else if(dropdown) dropdown.style.height = `${5.3*(rus.length)}vh`;

        rus.forEach((ru: any) => {
            if(!ru.classList.contains('ruAva')) {
                ru.style.transform = `translateY(${5.3*dist}vh)`;
                dist += 1;
            }
        })

        page?.addEventListener('click', DropHandler);
        rus.forEach(ru => { ru.addEventListener('click', DropHandler) });
    }

    const DropHandler = (evento: Event) => {
        evento.stopPropagation();

        const trigger = evento.currentTarget;
        const rus = document.querySelectorAll('#AvaDrop button');
        const page = document.getElementById('AvaPage');

        page?.removeEventListener('click', DropHandler);
        rus.forEach(ru => { ru.removeEventListener('click', DropHandler) });

        if(trigger === page) {
            CloseDropAva();
            return;
        }
        else {
            rus.forEach(ru => {
                if(trigger === ru) {
                    CloseDropAva(ru);
                    return;
                }
            })
        }
    }

    const CloseDropAva = (elem?: Element) => {
        const dropdown = document.getElementById('AvaDrop');
        const rus = document.querySelectorAll('#AvaDrop button');
        const padrao = document.getElementById('NA');

        if(dropdown) dropdown.style.height = '5.3vh';
        rus.forEach((ru: any) => {
            ru.style.transform = `translateY(0vh)`;
        })

        if(elem && (elem !== padrao)) {
            for(dist=0 ; dist<rus.length ; dist+=1) {
                if(rus[dist] === elem) break;
            }
            for(dist2=0 ; dist2<rus.length ; dist2+=1) {
                if(rus[dist2].classList.contains('ruAva')) break;
            }

            const novo = document.getElementById(rus[dist].id);
            const velho = document.getElementById(rus[dist2].id);

            if(velho) velho.classList.toggle('ruAva');
            if(novo) novo.classList.toggle('ruAva');
            
            setarDrop(novo?.id);
            
            padrao?.remove();
        }
    }

    return (
        <AvaDropdown id='AvaDrop' onClick={DropAva}>
            <DropIcon src={arrowDown}/>
            <DropItemAva id='NA' type="button" className="ruAva">Selecione um restaurante</DropItemAva>
            <DropItemAva id='central' type="button">Central</DropItemAva>
            <DropItemAva id='ct' type="button">Centro de Tecnologia</DropItemAva>
            <DropItemAva id='letras' type="button">Letras</DropItemAva>
            <DropItemAva id='ifcs' type="button">IFCS</DropItemAva>
            <DropItemAva id='pv' type="button">Praia Vermelha</DropItemAva>
            <DropItemAva id='dc' type="button">Duque de Caxias</DropItemAva>
            <DropItemAva id='mc' type="button">Macaé</DropItemAva>
        </AvaDropdown>
    );
}