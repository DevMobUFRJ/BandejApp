export interface IPratoProps{
    entrada: string;
    pratoPrincipal: string;
    pratoVeg: string;
    guarnicao: string;
    acompanhamento: string;
    sobremesa: string;
}

export interface IDiasProps{
    domingo: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    segunda: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    terca: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    quarta: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    quinta: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    sexta: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    sabado: {
        almoco: IPratoProps;
        janta: IPratoProps;
    }
    ultimaAtt: string
}

export interface ISemana{
    segunda: string;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
    sabado: string;
    domingo: string;
}

export interface ICardapioProps{
    ct: IDiasProps,
    pv: IDiasProps,
    dc: IDiasProps,
    mc: IDiasProps,
    ultimaAtualizacao: {
        data: string;
        hora: string;
    };
    semana: ISemana
}
