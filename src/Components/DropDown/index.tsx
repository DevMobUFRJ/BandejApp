import arrowDown from '../../Assets/Cardapio/ArrowDown.svg';
import Pin from '../../Assets/Cardapio/Pin.svg';
import { DropDiv, Opcoes, DropItem, 
    IconeEsquerda, Selecionado, DropArrow } from './style';

type DropDownProps = {
    opcaoInicial: string,
    valoresState: string[],
    valoresOpcoes: string[],
    tela: string,
    alterarState: Function
};

const escolheIcone = (lugar: string) => {
    switch (lugar)
    {
    case 'cardapio':
        return Pin;
    }

    return '';
}

export default function DropDown({opcaoInicial, valoresState, valoresOpcoes,
                                tela, alterarState}: DropDownProps) {

    const seta = document.getElementById('seta');

    const containerOpcoes = document.getElementById('opcoes');
    const options = document.querySelectorAll('#dropdown button');
    
    const containerSelecionado = document.getElementById('selecionado');
    const elementoPrimeiraOpcao = document.getElementById(opcaoInicial);
    
    if (containerSelecionado && elementoPrimeiraOpcao && seta)
        containerSelecionado.insertBefore(elementoPrimeiraOpcao, seta);


    const arruma = () => {
        for (let valor of valoresState) {
            const it = document.getElementById(valor);

            if (!it ||it.id === opcaoSelecionada)
                continue;
            containerOpcoes?.appendChild(it);
        }
    }

    let opcaoSelecionada = opcaoInicial;
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
    
                    if ((abrindo && opacidade < 1) || (!abrindo && opacidade > 0))
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
        let achou = false;

        evento.stopPropagation();
        seta?.removeEventListener('click', DropHandler);
        options.forEach((opt) => opt.removeEventListener('click', DropHandler));
        
        options.forEach(opt => {
            if(triggerElem === opt) {
                CloseDrop(opt);
                achou = true;
            }
        });
        if (!achou)
            CloseDrop();
    }

    const CloseDrop = (elemento?: Element) => {
        requestAnimationFrame(() => {
            if(elemento) {
                const velho = document.querySelector('#selecionado button');
                
                if (velho && containerOpcoes && containerSelecionado && seta) {
                    containerOpcoes.appendChild(velho);
                    containerSelecionado.insertBefore(elemento, seta);
                }
                opcaoSelecionada = elemento.id;
                alterarState(elemento.id);
                arruma();
            }

            fade(false);
        })

    }

    return (
        <DropDiv id='dropdown' onClick={OpenDrop}>
            <Selecionado id='selecionado'>
                <IconeEsquerda src={escolheIcone(tela)}/>
                <DropArrow id='seta' src={arrowDown}/>
            </Selecionado>
            <Opcoes id='opcoes'>
                {
                    valoresState.map((estado, indice) => 
                        <DropItem key={indice}
                        id={estado}>{valoresOpcoes[indice]}
                        </DropItem>
                    )
                }
            </Opcoes>
        </DropDiv>
    );
}