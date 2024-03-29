import { toast } from 'react-toastify';

export type formulario = {
    ru: string;
    email: string;
    turno: string;
    data: string;
    nota: number;
    comentario: string;
}

/*----------------------------------------------------------------------------*/

function formatarDados(formulario: formulario) {
    /* Formartar data */

    if(!formulario.data) formulario.data = '----';
    else {
        const dataFormatada = formulario.data.split('-').reverse().join('/');
        formulario.data = dataFormatada;
    }

    /* Formartar comentário */
    while (formulario.comentario && formulario.comentario.charAt(0) === '=') {
        formulario.comentario = formulario.comentario.substring(1);
    }

    /* Formatar email */
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

    formatarDados(formulario);

    const dados = JSON.stringify({formulario});

    const retorno = await fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
        method: 'post',
        body: dados,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
    }).then(response => {
        botaoEnvio?.toggleAttribute('disabled', false);
        botaoEnvio?.classList.remove('envioDesativado');

        // Importante checar porque a fetch só é rejeitada em caso de erro de rede
        if(!response.ok) return "Erro ao acessar o servidor";

        return response.text();
    })
      .then((text) =>{
        if (text === 'OK') {
            resetarForm(formulario, valores);
            return true;
        } 
        else {
            toast.error(text,
            {position: toast.POSITION.BOTTOM_CENTER});

            return false;
        }})
        .catch(err => {
            botaoEnvio?.toggleAttribute('disabled', false);
            botaoEnvio?.classList.remove('envioDesativado');

            toast.error("Erro de rede. Tente novamente mais tarde",
            {position: toast.POSITION.BOTTOM_CENTER});
            return false;
        });
    
    return retorno;
}