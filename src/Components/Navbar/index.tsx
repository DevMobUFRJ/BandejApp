import { useEffect } from "react";
import { DiaMes, DiaSemana, Mes, NavButton, NavDiv } from "./style";
import { ISemana } from "../../Types/storage";

type switchDia = { 
    tggDia: Function
    semana: ISemana
};

export default function NavBar({tggDia, semana}: switchDia) {
    const dia = new Date().getDay();
    const meses = [' ', 'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
                   'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'];

    useEffect(() => {
        const diaSem = document.querySelector(`button[value="${dia}"]`);
        const datas = document.querySelectorAll(`button[value="${dia}"] #diaSemana`);

        diaSem?.classList.add('diaSelect');
        datas.forEach((data) => { data.classList.add('diaSelect')})
        tggDia(dia);

        console.log();
        
    }, [dia, tggDia]);

    const switchDia = (id: string) => {
        document.querySelectorAll('.diaSelect').forEach((option) => {
            option.classList.remove('diaSelect');
        })

        const dia = document.getElementById(id);
        const datas = document.querySelectorAll(`#${id} #diaSemana`);

        dia?.classList.add('diaSelect');
        datas.forEach((data) => { data.classList.add('diaSelect')})
    }

    return (
        <NavDiv>
            <NavButton id="seg" value='1'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">S</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.segunda.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.segunda.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="ter" value='2'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">T</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.terca.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.terca.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="qua" value='3'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Q</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.quarta.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.quarta.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="qui" value='4'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Q</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.quinta.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.quinta.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="sex" value='5'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">S</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.sexta.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.sexta.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="sab" value='6'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">S</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.sabado.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.sabado.substring(3, 5))]}`}</Mes>
            </NavButton>

            <NavButton id="dom" value='0'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">D</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.domingo.substring(0, 2)}`}</DiaMes>
                <Mes id="diaSemana">{`${meses[Number(semana?.domingo.substring(3, 5))]}`}</Mes>
            </NavButton>
        </NavDiv>
    )
}