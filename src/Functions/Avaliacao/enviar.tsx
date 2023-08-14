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

export const enviar = (formulario: formulario) => {

    verificarComentario(formulario);
    formatarData(formulario);

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
            return "Erro ao acessar o servidor"
        
        return response.text();
    })
      .then((text) =>{
        if (text === 'OK') {
            toast.success('Sua avaliação foi enviada com sucesso!');
        } 
        else {
            toast.error(text);
        }})
        .catch(err => {
            toast.error("Erro de rede. Tente novamente mais tarde");
        });
}