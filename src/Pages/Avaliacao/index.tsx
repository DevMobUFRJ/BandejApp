import { useContext } from "react";
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
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

import { formulario } from "../../Functions/Avaliacao/enviar";
import { selecionarTurno, textoParaData } from '../../Functions/Avaliacao/avaliacao';
import { enviar } from '../../Functions/Avaliacao/enviar';

export default function Avaliacao() {
    const { showInstallMessage } = useContext(InstallMessageContext);
    const {register, handleSubmit, formState: { errors }, setValue, getValues} = useForm<formulario>({defaultValues:{ru: 'selec'}});

    const opcoes = ['Selecione um Restaurante', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];
    const valores = ['selec', 'CT', 'Central', 'Letras', 'Centro', 'Praia Vermelha', 'Duque de Caxias'];

/*----------------------------------------------------------------------------*/

    return (
        <Avadiv id="AvaPage">
            <ToastContainer />

            <Cabecalho nome='Avaliação'/>
            
            <AvaForm onSubmit={handleSubmit((dados) => {enviar(dados)})}>
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

                        <EmailInput {...register('email', {})}
                        name="email" type="email" placeholder="Insira seu e-mail..."/>
                    </AvaSection>
                    
{/*--------------------------------------------------------------------------*/}

                    <AvaSection>
                        <div style={{display: 'inline-flex'}}>
                            <InfoTitle>Avaliar refeição específica</InfoTitle>
                            <InfoSubtitle>(Opcional)</InfoSubtitle>
                        </div>

                        <TurnoDiv {...register('turno', {value: '----'})}>
                            <TurnoButton name="almoco" id="almoco" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget, setValue)}
                            >   Almoço
                            </TurnoButton>
                            <TurnoButton name='janta' id="janta" type="button"
                            onClick={(elem) => selecionarTurno(elem.currentTarget, setValue)}
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