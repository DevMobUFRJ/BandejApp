import { HoraButton, HorarioDiv } from "./style";

import { useEffect } from "react";

type horario = { hora: Function; }
export default function Horario({hora,}: horario) {
    const horaAtual = (((new Date().getHours())>14)? 1:0);

    useEffect(() => {
        hora(horaAtual);
        const setIcon = document.getElementById(horaAtual===0? 'Sol' : 'Lua');
        setIcon?.classList.add('horaSelect');
    }, [hora, horaAtual]);

    const switchHora = (index: number) => {
        document.querySelector('.horaSelect')?.classList.remove('horaSelect');
        const dia = document.getElementById(index===0 ? 'Sol' : 'Lua');
        dia?.classList.add('horaSelect');
    }

    return(
        <HorarioDiv>
            <HoraButton id="Sol" onClick={() => {switchHora(0); hora(0)}}>
                Almoço
            </HoraButton>

            <HoraButton id="Lua" onClick={() => {switchHora(1); hora(1)}}>
                Jantar
            </HoraButton>
        </HorarioDiv>
    );
};