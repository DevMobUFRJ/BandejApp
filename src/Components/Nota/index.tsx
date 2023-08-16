import { RatingDiv, StarIcon } from "./style";

type starInfo = { NotaToParent: Function; }

export default function Nota({NotaToParent}: starInfo) {

    const SetNota = (evento: Event) => { // Adaptado do JSfiddle -> link no style
        evento.stopPropagation();

        const trigger = evento.target;
        const estrelas = document.querySelectorAll('#classificacao li');

        estrelas.forEach(star => {
            if((star === trigger) && !(star.classList.contains('ativo'))) {
                estrelas.forEach(item => item.classList.remove('ativo'));
                star.classList.add('ativo');
            }
        })
    }

    return (
        <RatingDiv id="classificacao" onClick={e => SetNota(e.nativeEvent)}>
            <StarIcon style={{display: 'none'}} value='0' className="ativo"/>
            <StarIcon value='1' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon value='2' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon value='3' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon value='4' onClick={e => NotaToParent(e.currentTarget.value)}/>
            <StarIcon value='5' onClick={e => NotaToParent(e.currentTarget.value)}/>
        </RatingDiv>
    );
}