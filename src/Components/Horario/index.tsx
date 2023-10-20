import { HoraButton, HorarioDiv } from "./style";
import { global } from "../../globalStyle";
import { useEffect } from "react";

type horario = { tggHora: Function, horaAtual: number }
export default function Horario({tggHora, horaAtual}: horario) {
    const agora = (((new Date().getHours())>14)? 1:0);

    useEffect(() => {
        tggHora(agora);
        const setIcon = document.getElementById(agora===0? 'Sol' : 'Lua');
        setIcon?.classList.add('horaSelect');
    }, [tggHora, agora]);

    const selecionado = (turno: number) => {
        if (turno == horaAtual)
            return 
    }

    return(
        <HorarioDiv>
            <HoraButton id="Sol" onClick={() => {tggHora(0)}} 
            style={{color: horaAtual === 0 ?`${global.colors.laranja}` : '', 
            borderBottom: horaAtual === 0 ? `0.5vh solid ${global.colors.laranja}` : '',
            fontWeight: horaAtual === 0 ? '700' : ''}}>
                Almoço
            </HoraButton>

            <HoraButton id="Lua" onClick={() => {tggHora(1)}} 
            style={{color: horaAtual === 1 ?`${global.colors.laranja}` : '', 
            borderBottom: horaAtual === 1 ? `0.5vh solid ${global.colors.laranja}` : '',
            fontWeight: horaAtual === 1 ? '700' : ''}}>
                Jantar
            </HoraButton>
        </HorarioDiv>
    );
};