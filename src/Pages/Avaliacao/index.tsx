import { AvaSection, Avadiv, Comentario, DateDiv,
         DatePicker, DateSelect, EmailInput, EnviarButton,
         AvaForm, TurnoButton, TurnoDiv, FormDiv, MensagemErro} from "./style";

import { useContext } from "react";
import { useForm } from 'react-hook-form';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";

import { InfoSubtitle, InfoTitle } from "../Informacoes/style";
import Nota from "../../Components/Nota";
import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import DropDown from "../../Components/DropDown";
import datePicker from '../../Assets/Avaliacao/datePicker.svg';

import { formulario } from "../../Functions/Avaliacao/enviar";
import { selecionarTurno, textoParaData } from '../../Functions/Avaliacao/avaliacao';
import { enviar } from '../../Functions/Avaliacao/enviar';
import PopUp from "../../Components/PopUp";
import { fecharPopUp } from "../../Functions/PopUp/abrirEfechar";

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);
    const {register, handleSubmit, formState: { errors }, setValue, getValues, reset} =
    useForm<formulario>({defaultValues:{ru: 'selec', email: '', turno: '----', nota: 0, comentario: ''}});

    const opcoes = ['Selecione um Restaurante', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];
    const valores = ['selec', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];

/*----------------------------------------------------------------------------*/

    return (
        <Avadiv id="AvaPage">
            <ToastContainer autoClose={3000}/>

            <Cabecalho nome='Avaliação'/>

            <PopUp
                titulo="Avaliação enviada"
                texto="Caso tenha informado seu e-mail, o RU poderá entrar em contato com você."
                opcoes={['Fechar']}
                tiposOpcoes={[0]}
                funcoesOpcoes={[fecharPopUp]}
            />

            <AvaForm onSubmit={handleSubmit(async dados => { if(await enviar(dados, valores)) reset(); })}>
                <FormDiv>
                    <AvaSection>
                        <InfoTitle>Qual restaurante deseja avaliar ?</InfoTitle>
                        <input type="hidden" {...register('ru', {
                            required: true, 
                            validate: valor => {
                                if(valor !== 'selec') return true;
                                else {
                                    window.scrollTo(0, 0);
                                    return 'Selecione um restaurante';
                                }
                            }})}
                        />
                        {errors.ru? <MensagemErro>{errors.ru.message}</MensagemErro>:null}
                        <DropDown
                            opcaoInicial={getValues('ru')}
                            valoresState={valores}
                            valoresOpcoes={opcoes}
                            tela='avaliacao'
                            alterarState={(ru: string) => setValue('ru', ru)}
                        />
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                            <InfoTitle>Seu e-mail</InfoTitle>
                            <InfoSubtitle>(Opcional)</InfoSubtitle>
                        </div>

                        <EmailInput {...register('email')}
                        name="email" type="email" placeholder="Insira seu e-mail..."/>
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <div style={{display: 'inline-flex', alignItems: 'center'}}>
                            <InfoTitle>Avaliar refeição específica</InfoTitle>
                            <InfoSubtitle>(Opcional)</InfoSubtitle>
                        </div>

                        <TurnoDiv {...register('turno', {value: '----'})}>
                            <TurnoButton name="almoco" id="almoco" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget, setValue, getValues())}
                            >   Almoço
                            </TurnoButton>
                            <TurnoButton name='janta' id="janta" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget, setValue, getValues())}
                            >   Jantar
                            </TurnoButton>
                        </TurnoDiv>

                        <DateDiv onFocus={textoParaData}>
                            <DateSelect {...register('data')}
                            name="data" id="dataSelect" type="text" placeholder="Selecione uma data"/>

                            <DatePicker src={datePicker} onClick={textoParaData}/>
                        </DateDiv>

                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <InfoTitle>Avaliação</InfoTitle>

                        {errors.nota? <MensagemErro>{errors.nota.message}</MensagemErro>:null}
                        <Nota NotaToParent={(nota: number) => setValue('nota', nota)}
                        {...register('nota', {
                            required: true,
                            max: { value: 5, message: 'Máximo de estrelas é 5 !' },
                            min: { value: 1, message: 'Selecione uma nota!' }
                        })}/>
                        
                        {errors.comentario? <MensagemErro>{errors.comentario.message}</MensagemErro>:null}
                        <Comentario {...register('comentario',{
                            required: true,
                            maxLength: {value: 200, message: 'Comentário deve conter no máximo 200 caracteres'}
                        })}cor={errors.comentario?.type === 'required'? true:false}
                        placeholder={'Nos conte um pouco mais sobre a sua experiência'}/>

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