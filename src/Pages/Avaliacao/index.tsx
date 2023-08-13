import { useContext, useState } from "react";
import { useForm } from 'react-hook-form';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";

import { AvaSection, Avadiv, Comentario, DateDiv,
         DatePicker, DateSelect, EmailInput, EnviarButton,
         AvaForm, TurnoButton, TurnoDiv, FormDiv} from "./style";

import { InfoSubtitle, InfoTitle } from "../Informacoes/style";
import Nota from "../../Components/Nota";
import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUp";
import DropDown from "../../Components/DropDown";

import datePicker from '../../Assets/Avaliacao/datePicker.svg';

type formData = {
    ru: string;
    email: string;
    turno: string;
    data: string;
    nota: number;
    comentario: string;
}

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    const opcoes = ['Selecione um Restaurante', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];
    const valores = ['selec', 'ct', 'central', 'lt', 'centro', 'pv', 'dc'];

    const {register, handleSubmit, formState: { errors }, setValue, getValues} = useForm<formData>({defaultValues:{ru: 'selec'}})

/*----------------------------------------------------------------------------*/

    const mostrarData = (): string => {
        const dataAtual = new Date();
        
            const dia = dataAtual.getDate();
            const mes = dataAtual.getMonth() + 1;
            const ano = dataAtual.getFullYear();

            if((mes > 9) && (dia > 9)) return `${ano}-${mes}-${dia}`;
            else if(mes > 9) return `${ano}-${mes}-0${dia}`;
            else if(dia > 9) return `${ano}-0${mes}-${dia}`;
            else return `${ano}-0${mes}-0${dia}`;
    }

    const textoParaData = () => {
        const dataInput = document.getElementById('dataSelect');
        dataInput?.parentElement?.focus();

        if(dataInput?.getAttribute('type') === 'date') {
            dataInput.click();
            return;
        }

        dataInput?.setAttribute('type', 'date');
        setTimeout(() => { dataInput?.click(); }, 100);
    }

/*----------------------------------------------------------------------------*/

    const selecionarTurno = (elem: HTMLButtonElement) => {
        const almoco = document.getElementById('almoco');
        const janta = document.getElementById('janta');
        const data = document.getElementById('dataSelect');

        if(elem === almoco) {
            if(janta?.classList.contains('turnoSelecionado')) janta.classList.toggle('turnoSelecionado');
            
            if(elem.classList.contains('turnoSelecionado')) {
                elem.classList.remove('turnoSelecionado');
                data?.toggleAttribute('required', false);
                setValue('turno', '----');
            }
            else {
                elem.classList.add('turnoSelecionado');
                data?.toggleAttribute('required', true);
                setValue('turno', elem.id);
            }
        }
        else {
            if(almoco?.classList.contains('turnoSelecionado')) almoco.classList.toggle('turnoSelecionado')

            if(elem.classList.contains('turnoSelecionado')) {
                elem.classList.remove('turnoSelecionado');
                data?.toggleAttribute('required', false);
                setValue('turno', '----')
            }
            else {
                elem.classList.add('turnoSelecionado');
                data?.toggleAttribute('required', true);
                setValue('turno', elem.id);
            }
        }
    }

/*----------------------------------------------------------------------------*/
    
    // const validar = () => {
    //     const erro = document.getElementById('ErroAva') as HTMLElement;
    //     const comentario = document.getElementById('ComentInput') as HTMLInputElement;
    //     while (comentario.value && comentario.value.charAt(0) === '=') {
    //         comentario.value = comentario.value.substring(1);
    //     }
    //     if(comentario.value.trim() === '') {
    //         erro.innerText = '* Escreva um comentário';
    //         return;
    //     }
    //     if (comentario.value.trim().length > 200) {
    //         erro.innerText = '* Comentário muito longo, máximo de 200 caracteres';
    //         return;
    //     }
    //     if (nota === 0) {
    //         erro.innerText = '* Dê uma nota';
    //         return;
    //     }
    //     if (!opcoes.includes(ruSelecionado)) {
    //         erro.innerText = '* Restaurante inválido';
    //         return;
    //     }

    //     const infos = JSON.stringify({
    //         nota: nota,
    //         comentario: comentario.value.trim(),
    //         restaurante: ruSelecionado
    //     });

    //     fetch(`${process.env.REACT_APP_PLANILHA_API_URL}`, {
    //         method: 'post',
    //         body: infos,
    //         mode: 'cors',
    //         headers: new Headers({
    //           'Content-Type': 'application/json'
    //         })
    //       })
    //       .then(response => {
    //         if (!response.ok)
    //         // Importante checar porque a fetch só é rejeitada em caso de erro de rede
    //             return "Erro ao acessar o servidor"
            
    //         return response.text();
    //     })
    //       .then((text) =>{
    //         if (text === 'OK') {
    //             toast.success('Sua avaliação foi enviada com sucesso!');
    //         } 
    //         else {
    //             toast.error(text);
    //         }})
    //         .catch(err => {
    //             toast.error("Erro de rede. Tente novamente mais tarde");
    //         });
    //     // history.push("/Cardapio");
    // }

    // const clearErro = () => {
    //     const erro = document.getElementById('ErroAva') as HTMLElement;
    //     erro.innerText = '';
    //     return;
    // }

    return (
        <Avadiv id="AvaPage">
            <ToastContainer />

            <Cabecalho nome='Avaliação'/>
            
            <AvaForm onSubmit={handleSubmit((dados) => console.log(dados))}>
                <FormDiv>
                    <AvaSection>
                        <InfoTitle>Qual restaurante deseja avaliar ?</InfoTitle>
                        <DropDown {...register('ru', {required: true, validate: valor => valor !== 'selec'})}
                            opcaoInicial={getValues('ru')}
                            valoresState={valores}
                            valoresOpcoes={opcoes}
                            tela='avaliacao'
                            alterarState={(ru: string) => setValue('ru', ru)}
                        />
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <div style={{display: 'inline-flex'}}>
                            <InfoTitle>Seu e-mail</InfoTitle>
                            <InfoSubtitle>(Opcional)</InfoSubtitle>
                        </div>

                        <EmailInput {...register('email')}
                        name="email" type="email" placeholder="Insira seu e-mail..."/>
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <div style={{display: 'inline-flex'}}>
                            <InfoTitle>Avaliar refeição específica</InfoTitle>
                            <InfoSubtitle>(Opcional)</InfoSubtitle>
                        </div>

                        <TurnoDiv {...register('turno')}>
                            <TurnoButton name="almoco" id="almoco" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget)}
                            >   Almoço
                            </TurnoButton>
                            <TurnoButton name='janta' id="janta" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget)}
                            >   Jantar
                            </TurnoButton>
                        </TurnoDiv>

                        <DateDiv onFocus={textoParaData}>
                            <DateSelect {...register('data')} cor={errors.data?.type === 'required'? true:false}
                            name="data" id="dataSelect" type="text" placeholder="Selecione uma data"/>

                            <DatePicker src={datePicker} onClick={textoParaData}/>
                        </DateDiv>
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <InfoTitle>Avaliação</InfoTitle>
                        <Nota NotaToParent={(nota: number) => setValue('nota', nota)}
                        {...register('nota', {required: true, max:5, min: 1})}/>

                        <Comentario {...register('comentario', {required: true})}
                        cor={errors.comentario?.type === 'required'? true:false}
                        placeholder='Nos conte um pouco mais sobre a sua experiência'/>
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                </FormDiv>
                <EnviarButton>
                    Enviar Avaliação
                </EnviarButton>
            </AvaForm>
    
            {
                showInstallMessage &&
                <DownPop/>
            }
        </Avadiv>
    );
}