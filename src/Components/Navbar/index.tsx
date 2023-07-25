import { useEffect } from "react";
import { DiaMes, DiaSemana, DiaRelativo, NavButton, NavDiv } from "./style";
import { ISemana } from "../../Types/storage";

type switchDia = { 
    tggDia: Function
    semana: ISemana
};

export default function NavBar({tggDia, semana}: switchDia) {

    const diaDoCardapio = (dia: number, mes:number, ano:number) => {
        const data = new Date (ano, mes - 1, dia);
        return data;
    };

    const diaRelativo = (diaDeHoje: Date, dataCardapio:Date):string => {
        let diasPassados = Math.floor((diaDeHoje.getTime() - dataCardapio.getTime()) / (24 * 60 * 60 * 1000));
        
        if (diasPassados === 0)
            return "Hoje";
        if (diasPassados === 1)
            return "Ontem";
        if (diasPassados === -1)
            return "Amanhã";

        if (diasPassados > 1) {
            return `Há ${diasPassados} dias`;
        }
        return `Em ${-diasPassados} dias`;
    };

    const hoje = new Date();
    const dia = hoje.getDay();

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
                <DiaSemana id="diaSemana">Seg</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.terca.substring(0, 2)} 
                ${meses[Number(semana?.segunda.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.segunda.substring(0, 2)), 
                            Number(semana?.segunda.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>

            <NavButton id="ter" value='2'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Ter</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.terca.substring(0, 2)} 
                ${meses[Number(semana?.terca.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.terca.substring(0, 2)), 
                            Number(semana?.terca.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>

            <NavButton id="qua" value='3'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Qua</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.quarta.substring(0, 2)} 
                ${meses[Number(semana?.quarta.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                {
                    `${diaRelativo(hoje, 
                        diaDoCardapio(
                        Number(semana?.quarta.substring(0, 2)), 
                        Number(semana?.quarta.substring(3, 5)),
                        hoje.getFullYear()
                        )
                        )}`
                }
                </DiaRelativo>
            </NavButton>

            <NavButton id="qui" value='4'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Qui</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.quinta.substring(0, 2)} 
                ${meses[Number(semana?.quinta.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.quinta.substring(0, 2)), 
                            Number(semana?.quinta.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>

            <NavButton id="sex" value='5'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Sex</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.sexta.substring(0, 2)} 
                ${meses[Number(semana?.sexta.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.sexta.substring(0, 2)), 
                            Number(semana?.sexta.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>

            <NavButton id="sab" value='6'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Sáb</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.sabado.substring(0, 2)} 
                ${meses[Number(semana?.sabado.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.sabado.substring(0, 2)), 
                            Number(semana?.sabado.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>

            <NavButton id="dom" value='0'
            onClick={(d) => {switchDia(d.currentTarget.id); tggDia(parseInt(d.currentTarget.value))}}>
                <DiaSemana id="diaSemana">Dom</DiaSemana>
                <DiaMes id="diaSemana">{`${semana?.domingo.substring(0, 2)} 
                ${meses[Number(semana?.domingo.substring(3, 5))]}`}</DiaMes>
                <DiaRelativo>
                    {
                        `${diaRelativo(hoje, 
                            diaDoCardapio(
                            Number(semana?.domingo.substring(0, 2)), 
                            Number(semana?.domingo.substring(3, 5)),
                            hoje.getFullYear()
                            )
                            )}`
                    }
                </DiaRelativo>
            </NavButton>
        </NavDiv>
    )
}