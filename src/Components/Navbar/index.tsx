import { useEffect } from "react";
import { DiaMes, DiaSemana, DiaRelativo, NavButton, NavDiv } from "./style";
import { ISemana } from "../../Types/storage";

type switchDia = { 
    tggDia: Function
    semana: string[]
};

export default function NavBar({tggDia, semana}: switchDia) {

    const diaDoCardapio = (dia: number, mes:number, ano:number) => {
        // O mês vem 1-indexado e o construtor espera 0-indexado
        const data = new Date (ano, mes - 1, dia); 
        console.log(`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`);
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
    const diasSemana = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex',
                        'Sáb', 'Dom'];


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
            {
                semana.map((stringDia, indice) => 
                    <NavButton key={indice} id={diasSemana[indice]} value={indice + 1}
                    onClick={(e) => {switchDia(e.currentTarget.id); tggDia(parseInt(e.currentTarget.value))}}>
                        <DiaSemana id="diaSemana">{diasSemana[indice]}</DiaSemana>
                        <DiaMes id="diaSemana">
                            {`${stringDia.substring(0, 2)} 
                            ${meses[Number(stringDia.substring(3, 5))]}`}
                        </DiaMes>
                        <DiaRelativo id="diaSemana">
                            {
                            
                                `${diaRelativo(hoje, 
                                    diaDoCardapio(
                                        Number(stringDia.substring(0, 2)), 
                                        Number(stringDia.substring(3, 5)),
                                        Number(stringDia.substring(6, 10))
                                        )
                                        )}`
                            }
                        </DiaRelativo>
                    </NavButton>
                )
            }  
        </NavDiv>
    )
}