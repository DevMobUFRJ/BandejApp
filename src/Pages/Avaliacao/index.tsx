import { useHistory } from "react-router-dom";

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
import { HeaderDiv, PageTitle } from "../Cardapio/style";
import SideBar from "../../Components/SideBar";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Avaliacao() {
    const history = useHistory();
    const [value, setValue] = useState(0);
    const [ru, setRu] = useState('NA');

    const RUsValidos = ['central', 'ct', 'letras', 'ifcs', 'pv', 'dc', 'mc'];

    const validar = () => {
        // toast.error('Mensagem de erro');
        toast.success('Sua avaliação foi enviada com sucesso!');
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

        const xhr = new XMLHttpRequest();
        xhr.open('POST', process.env.REACT_APP_PLANILHA_API_URL || '');
	    xhr.setRequestHeader("Content-Type", "application/json");
        const infos = JSON.stringify({
            nota: value,
            comentario: comentario.value.trim(),
            restaurante: ru
        });
	    xhr.send(infos);

        // TODO Avisar o usuário que foi enviado ou nao
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
            <HeaderDiv>
                <SideBar/>
                <PageTitle>Avaliação</PageTitle>
            </HeaderDiv>

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