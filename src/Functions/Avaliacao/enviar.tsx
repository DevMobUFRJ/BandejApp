import { toast } from 'react-toastify';

export type formulario = {
    ru: string;
    email: string;
    turno: string;
    data: string;
    nota: number;
    comentario: string;
}

function verificarComentario(formulario: formulario) {
    while (formulario.comentario && formulario.comentario.charAt(0) === '=') {
        formulario.comentario = formulario.comentario.substring(1);
    }
}

function formatarData(formulario: formulario) {
    const dataSeparada = formulario.data.split('-');
    
    if(!dataSeparada[0] || !dataSeparada[1] || !dataSeparada[2]) return;

    formulario.data = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`;
}

function verificarEmail(formulario: formulario) {
    if(formulario.email === '') formulario.email = '----';
}

function resetarForm(form: formulario, valores: Array<string>) {
    
    /* Resetar o campo da nota */
    const estrelas = document.querySelectorAll('#classificacao li');
    estrelas.forEach(estrela => {
        if(estrela.id !== 'reset') estrela.classList.add('ativo');
    })

    /* Resetar Turno */
    const turno = form.turno;
    const dataInput = document.getElementById('dataSelect');

    if(turno !== '----') {
        if(turno === 'Almoço') {
            const selecionado = document.getElementById('almoco');
            selecionado?.click();
        }
        else {
            const selecionado = document.getElementById('janta');
            selecionado?.click();
        }
    }
    if(dataInput?.getAttribute('type') === 'date') dataInput?.setAttribute('type', 'text');

    /* Resetar Dropdown */
    const containerOpcoes = document.getElementById('opcoes');
    for (let valor of valores) {
        const it = document.getElementById(valor);
        
        if (!it || it.id === 'selec') {
            continue;
        }
        containerOpcoes?.appendChild(it);
    }
    const dropdown = document.getElementById('selecionado');
    const seta = document.getElementById('seta');
    const selec = document.getElementById('selec');
    console.log(selec, dropdown);
    if(selec && seta && dropdown) dropdown.insertBefore(selec, seta);
}

/*----------------------------------------------------------------------------*/

export const enviar = (formulario: formulario, valores: Array<string>): boolean => {

    verificarComentario(formulario);
    formatarData(formulario);
    verificarEmail(formulario);

    console.log(formulario);

    const dados = JSON.stringify({formulario});

    fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
        method: 'post',
        body: dados,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => {
        if (!response.ok)
        // Importante checar porque a fetch só é rejeitada em caso de erro de rede
            return "Erro ao acessar o servidor";
        
        return response.text();
    })
      .then((text) =>{
        if (text === 'OK') {
            toast.success('Avaliação foi enviada com sucesso!');
            return true;
        } 
        else {
            toast.error(text);
            return false;
        }})
        .catch(err => {
            toast.error("Erro de rede. Tente novamente mais tarde");
            return false;
        });
    
    resetarForm(formulario, valores);
    return true;
}