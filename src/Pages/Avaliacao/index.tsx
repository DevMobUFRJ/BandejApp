import { AvaSection, Avadiv, SombraPopUp, Comentario, DateDiv,
         DatePicker, DateSelect, EmailInput, EnviarButton,
         AvaForm, TurnoButton, TurnoDiv, FormDiv, MensagemErro} from "./style";
import { InfoSubtitle, InfoTitle } from "../Informacoes/style";

import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
import { ToastContainer } from 'react-toastify';
import { verificarData, formulario, enviar } from "../../Functions/Avaliacao/enviar";
import { selecionarTurno, textoParaData } from '../../Functions/Avaliacao/avaliacao';

import Nota from "../../Components/Nota";
import Cabecalho from "../../Components/Cabecalho";
import DownPop from "../../Components/PopUpIOS";
import DropDown from "../../Components/DropDown";
import datePicker from '../../Assets/Avaliacao/datePicker.svg';
import PopUp from "../../Components/PopUp";
import { togglePopUp } from "../../Functions/PopUp/abrirEfechar";

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);

    /* Funções do useForm */
    const {register, handleSubmit, formState: { errors }, setValue, getValues, reset} =
    useForm<formulario>({defaultValues:{ru: 'selec', email: '', turno: '----', nota: 0, comentario: ''}});

    /* Variáveis do Dropdown */
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
                funcoesOpcoes={[() => togglePopUp(false)]}
            />
            <SombraPopUp id='sombra'/>
            <AvaForm onSubmit={handleSubmit(async dados => { if(await enviar(dados, valores)) reset(); })}>
                <FormDiv>
                    <AvaSection>
                        <InfoTitle>Qual restaurante deseja avaliar?</InfoTitle>
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

                        <EmailInput {...register('email')} autoComplete="on"
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
                        
                        {errors.data? <MensagemErro>{errors.data.message}</MensagemErro>:null}
                        <DateDiv onFocus={textoParaData}>
                            <DateSelect {...register('data', {
                                validate: data => verificarData(data)? true:'Data inválida'
                            })}
                            id="dataSelect" name="data" type="text" placeholder="Selecione uma data"/>

                            <DatePicker src={datePicker} onClick={textoParaData}/>
                        </DateDiv>

                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <InfoTitle>Avaliação</InfoTitle>
                        
                        <input type="hidden"
                            {...register('nota', {
                                required: true,
                                max: { value: 5, message: 'Máximo de estrelas é 5!' },
                                min: { value: 1, message: 'Selecione uma nota!' }
                            })}
                        />
                        {errors.nota? <MensagemErro>{errors.nota.message}</MensagemErro>:null}
                        <Nota NotaToParent={(nota: number) => setValue('nota', nota)}/>
                        
                        {errors.comentario? <MensagemErro>{errors.comentario.message}</MensagemErro>:null}
                        <Comentario {...register('comentario',{
                            required: true,
                            maxLength: {value: 200, message: 'Comentário deve conter no máximo 200 caracteres'}
                        })}cor={errors.comentario?.type === 'required'? true:false}
                        placeholder={'Nos conte um pouco mais sobre a sua experiência'}/>

                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                </FormDiv>
                <EnviarButton id='botaoEnvio'>
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