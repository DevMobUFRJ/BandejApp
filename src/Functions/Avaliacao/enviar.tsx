import { toast } from 'react-toastify';
import { abrirPopUp } from '../PopUp/abrirEfechar';

export type formulario = {
    ru: string;
    email: string;
    turno: string;
    data: string;
    nota: number;
    comentario: string;
}

/*----------------------------------------------------------------------------*/

function formatarData(formulario: formulario) {
    const dataSeparada = formulario.data.split('-');
    
    if(!dataSeparada[0] || !dataSeparada[1] || !dataSeparada[2]) return;
    else if(dataSeparada.length === 0) formulario.data = '----';

    formulario.data = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`;
}

export const verificarData = (dataInput: string): boolean => {
    const dia = new Date().getDate();
    const mes = new Date().getMonth()+1;
    const ano = new Date().getFullYear();

    const dataSelecionada = dataInput.split('-');

    if(ano < parseInt(dataSelecionada[0])) return false;
    else {
        if(mes < parseInt(dataSelecionada[1])) return false;
        else {
            if(dia < parseInt(dataSelecionada[2])) return false;
            else return true;
        }
    }
}

/*----------------------------------------------------------------------------*/

function verificarComentario(formulario: formulario) {
    while (formulario.comentario && formulario.comentario.charAt(0) === '=') {
        formulario.comentario = formulario.comentario.substring(1);
    }
}

function verificarEmail(formulario: formulario) {
    if(formulario.email === '') formulario.email = '----';
}

/*----------------------------------------------------------------------------*/

function resetarForm(form: formulario, valores: Array<string>) {
    
    /* Resetar o campo da nota */
    const estrelas = document.querySelectorAll('#classificacao li');
    estrelas.forEach(estrela => {
        estrela.classList.remove('notaSelecionada');
    });
    estrelas.item(0).classList.add('notaSelecionada');

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
    if(selec && seta && dropdown) dropdown.insertBefore(selec, seta);
}

/*----------------------------------------------------------------------------*/

export const enviar = async(formulario: formulario, valores: Array<string>): Promise<boolean> => {
    const botaoEnvio = document.getElementById('botaoEnvio');
    botaoEnvio?.toggleAttribute('disabled', true);
    botaoEnvio?.classList.add('envioDesativado');

    verificarComentario(formulario);
    formatarData(formulario);
    verificarEmail(formulario);

    console.log(formulario);

    const dados = JSON.stringify({formulario});

    const retorno = await fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
        method: 'post',
        body: dados,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).then(response => {
        if (!response.ok)
        // Importante checar porque a fetch só é rejeitada em caso de erro de rede
            return "Erro ao acessar o servidor";

        return response.text();
    })
      .then((text) =>{
        if (text === 'OK') {
            // abrirPopUp();
            resetarForm(formulario, valores);
            botaoEnvio?.toggleAttribute('disabled', false);
            botaoEnvio?.classList.remove('envioDesativado');
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
    
    return retorno;
}