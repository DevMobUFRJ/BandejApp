import { AvaSection, Avadiv, Comentario,
        DateDiv, DateSelect, EmailInput, EnviarButton,
        AvaForm, TurnoButton, TurnoDiv, FormDiv,
        MensagemErro, DateIcon, SelecionaAvaDivBlock, SelecionaAvaDiv } from "./styleWeb";
import { InfoSubtitle, InfoTitle } from "../Informacoes/style";

import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { ToastContainer } from 'react-toastify';

import { formulario, enviar } from "../../Functions/Avaliacao/enviar";
import { selecionarTurno } from '../../Functions/Avaliacao/avaliacao';

import Nota from "../../Components/Nota";
import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import DropDown from "../../Components/DropDown";
import datePicker from '../../Assets/Avaliacao/datePicker.svg';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import PopUp from "../../Components/PopUp";
import { PopTexto } from "../../Components/PopUp/style";
import { PopupContext } from "../../Contexts/PopupContext";
import AvaliacaoMobile from "./mobile";
import AvaliacaoWeb from "./web";

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);
    const { mostrarPopup } = useContext(PopupContext);

    /* Funções do useForm */
    const UseForm =
    useForm<formulario>({defaultValues:{ru: 'selec', email: '', turno: '----', nota: 0, comentario: ''}});

    /* Variáveis do Dropdown */
    const opcoes = ['Selecione um Restaurante', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];
    const valores = ['selec', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];

    const [dataSelecionada, setData] = useState<Date | null>();

/*----------------------------------------------------------------------------*/

    return (
        (window.innerWidth/window.innerHeight) <= 1 ?
        <AvaliacaoMobile 
            UseForm={UseForm}
            showInstallMessage={showInstallMessage}
            mostrarPopup={mostrarPopup}
            opcoes={opcoes}
            valores={valores}
            dataSelecionada={dataSelecionada}
            setData={setData}
        />:
        <AvaliacaoWeb
            UseForm={UseForm}
            showInstallMessage={showInstallMessage}
            mostrarPopup={mostrarPopup}
            opcoes={opcoes}
            valores={valores}
            dataSelecionada={dataSelecionada}
            setData={setData}
        />
    );
}