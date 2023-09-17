import { UseFormSetValue } from 'react-hook-form';
import { formulario } from './enviar';

/*----------------------------------------------------------------------------*/

export const selecionarTurno = (elem: HTMLButtonElement, setValue: UseFormSetValue<formulario>, form: formulario) => {
    const almoco = document.getElementById('almoco');
    const janta = document.getElementById('janta');
    const dataInput = document.getElementById('dataSelect');

    if(elem === almoco) {
        if(janta?.classList.contains('turnoSelecionado')) janta.classList.toggle('turnoSelecionado');

        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            dataInput?.toggleAttribute('required', false);
            setValue('turno', '----');
        }
        else {
            elem.classList.add('turnoSelecionado');
            dataInput?.toggleAttribute('required', true);
            if(!form.data) setTimeout(() => { dataInput?.click() }, 100);
            setValue('turno', 'Almoço');
        }
    }
    else {
        if(almoco?.classList.contains('turnoSelecionado')) almoco.classList.toggle('turnoSelecionado')

        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            dataInput?.toggleAttribute('required', false);
            setValue('turno', '----')
        }
        else {
            elem.classList.add('turnoSelecionado');
            dataInput?.toggleAttribute('required', true);
            if(!form.data) setTimeout(() => { dataInput?.click(); }, 100);
            setValue('turno', 'Jantar');
        }
    }
}