import arrowDown from '../../Assets/Cardapio/ArrowDown.svg';
import Pin from '../../Assets/Cardapio/Pin.svg';
import { DropDiv, Opcoes, DropItem, 
    IconeEsquerda, Selecionado, DropArrow } from './style';

type DropDownProps = {
    opcaoInicial: string, // Valor que o useState está definido quando o componente é renderizado
    valoresState: string[], // Valores que o useState pode assumir
    valoresOpcoes: string[], /* O que vai estar escrito na opção. A opção com o texto da
                            i-ésima posição desse array vai ativar o estado na i-ésima posição 
                            do array anterior. Por isso, obviamente, os arrays devem ter o mesmo tamanho */
    tela: string, // Quem é o pai (Pra definir qual ícone fica à esquerda, no switch ali embaixo)
    alterarState: Function
};

const escolheIcone = (lugar: string) => {
    switch (lugar) // Vai adicionando os cases aqui
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

    const animacao = (abrindo: boolean) => {
        if (!containerOpcoes)
            return;
        requestAnimationFrame(() => {
            if (!abrindo) {
                containerOpcoes.style.opacity = '0';
                containerOpcoes.style.transform = 'translateY(-7.75vh)';
                containerOpcoes.style.pointerEvents = 'none';
            }
            else {
                containerOpcoes.style.opacity = '1';
                containerOpcoes.style.transform = 'translateY(0vh)';
                containerOpcoes.style.pointerEvents = 'auto';
            }
        })
    };

    const OpenDrop = () => { // Abre o dropdown e adiciona os listeners
        animacao(true);
        
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

            animacao(false);
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