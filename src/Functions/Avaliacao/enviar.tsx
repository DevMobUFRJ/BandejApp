import { error } from 'console';
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

    console.log('chegou');
    formulario.data = `${dataSeparada[2]}/${dataSeparada[1]}/${dataSeparada[0]}`;
}

/*----------------------------------------------------------------------------*/

const promessaDeEnvio = async (dados: string) => {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
        method: 'post',
        body: dados,
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
      .then(response => {
        if (!response.ok) {
            // Importante checar porque a fetch só é rejeitada em caso de erro de rede
            reject("Erro ao acessar o servidor")
        }
        
        return response.text();
        })
      .then((text) =>{
        if (text === 'OK') {
            resolve('Sua avaliação foi enviada com sucesso!');
        } 
        else {
            reject(text);
        }})
        .catch((err) => {
            reject('Erro de rede. Tente novamente mais tarde')
        }) 
    });
}

export const enviar = (formulario: formulario) => {

    verificarComentario(formulario);
    formatarData(formulario);

    console.log(formulario);

    const dados = JSON.stringify({formulario});
    toast.promise(promessaDeEnvio(dados), 
                {pending: 'Enviando avaliação',
                success: {
                    render({data}) {
                        return `${data}`;
                    }
                },
                error: {
                    render({data}) {
                        return `${data}`;
                    }
                }})

    
}