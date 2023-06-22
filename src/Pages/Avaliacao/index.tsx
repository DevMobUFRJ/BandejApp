import { 
    Avadiv, 
    Enviarbutton, 
    Comentsec,
    ComentInput, 
    ComentIcon, 
    FormDiv,
    ErroAva
} from "./style";

import mailIcon from '../../Assets/Avaliacao/MailIcon.svg';
import Nota from "../../Components/Nota";
import AvaDrop from "../../Components/AvaDrop";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";

export default function Avaliacao() {
    const [value, setValue] = useState(0);
    const [ru, setRu] = useState('NA');

    const RUsValidos = ['central', 'ct', 'letras', 'ifcs', 'pv', 'dc', 'mc'];

    const validar = () => {
        const erro = document.getElementById('ErroAva') as HTMLElement;
        const comentario = document.getElementById('ComentInput') as HTMLInputElement;
        while (comentario.value.charAt(0) === '=') {
            comentario.value = comentario.value.substring(1);
        }
        if(comentario.value.trim() === '') {
            erro.innerText = '* Escreva um comentário';
            return;
        }
        if (comentario.value.trim().length > 200) {
            erro.innerText = '* Comentário muito longo, máximo de 200 caracteres';
            return;
        }
        if (value === 0) {
            erro.innerText = '* Dê uma nota';
            return;
        }
        if (!RUsValidos.includes(ru)) {
            erro.innerText = '* Restaurante inválido';
            return;
        }

        const infos = JSON.stringify({
            nota: value,
            comentario: comentario.value.trim(),
            restaurante: ru
        });

        fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
            method: 'post',
            body: infos,
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
        // history.push("/Cardapio");
    }

    const clearErro = () => {
        const erro = document.getElementById('ErroAva') as HTMLElement;
        erro.innerText = '';
        return;
    }

    return (
        <Avadiv id="AvaPage">
            <ToastContainer />

            <Cabecalho nome='Avaliação'/>

            <FormDiv>
                <AvaDrop setarDrop={setRu}/>
                <Comentsec>
                    <ComentIcon src={mailIcon}/>
                    <ComentInput onClick={clearErro} placeholder="Diga-nos a sua opinião" id="ComentInput"/>
                </Comentsec>
                <Nota NotaToParent={setValue}/>
                <ErroAva id="ErroAva"></ErroAva>
                <Enviarbutton 
                    type="button" 
                    onClick={() => {
                        clearErro();
                        validar();
                    }}>
                        enviar
                </Enviarbutton>
            </FormDiv>
        </Avadiv>
    );
}