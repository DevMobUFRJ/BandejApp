import { UseFormSetValue } from 'react-hook-form';
import { formulario } from './enviar';

export const textoParaData = () => {
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

export const mostrarData = (): string => {
    const dataAtual = new Date();
    
        const dia = dataAtual.getDate();
        const mes = dataAtual.getMonth() + 1;
        const ano = dataAtual.getFullYear();

        if((mes > 9) && (dia > 9)) return `${ano}-${mes}-${dia}`;
        else if(mes > 9) return `${ano}-${mes}-0${dia}`;
        else if(dia > 9) return `${ano}-0${mes}-${dia}`;
        else return `${ano}-0${mes}-0${dia}`;
}

/*----------------------------------------------------------------------------*/

export const selecionarTurno = (elem: HTMLButtonElement, setValue: UseFormSetValue<formulario>, form: formulario) => {
    const almoco = document.getElementById('almoco');
    const janta = document.getElementById('janta');
    const data = document.getElementById('dataSelect');

    if(elem === almoco) {
        if(janta?.classList.contains('turnoSelecionado')) janta.classList.toggle('turnoSelecionado');
        
        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            data?.toggleAttribute('required', false);
            if(!form.data) data?.setAttribute('type', 'text');
            setValue('turno', '----');
        }
        else {
            elem.classList.add('turnoSelecionado');
            data?.toggleAttribute('required', true);
            data?.setAttribute('type', 'date');
            textoParaData();
            setValue('turno', 'Almoço');
        }
    }
    else {
        if(almoco?.classList.contains('turnoSelecionado')) almoco.classList.toggle('turnoSelecionado')

        if(elem.classList.contains('turnoSelecionado')) {
            elem.classList.remove('turnoSelecionado');
            data?.toggleAttribute('required', false);
            if(!form.data) data?.setAttribute('type', 'text');
            setValue('turno', '----')
        }
        else {
            elem.classList.add('turnoSelecionado');
            data?.toggleAttribute('required', true);
            data?.setAttribute('type', 'date');
            textoParaData();
            setValue('turno', 'Jantar');
        }
    }
}