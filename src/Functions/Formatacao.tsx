

export const Formatacao = {
    bordaRedonda: (indice: number, tamanho: number):string => {
        if (tamanho === 1)
            return "16px";
        
        if (indice === 0)
            return "16px 16px 0 0";

        if (indice === tamanho - 1)
            return "0 0 16px 16px";
        
        return "0";
    },

    diaRelativo: (dia: String):string => {
        const partes = dia.split('/').reverse();
    
        const hoje = new Date();
        const diaDaMensagem = new Date(Number(partes[0]), 
                                // Mês é 0-indexado pro construtor de Date
                                Number(partes[1]) - 1, 
                                Number(partes[2]));
        const diaMs = 24 * 60 * 60 * 1000;
        let diasPassados = Math.floor(
                (hoje.getTime() - diaDaMensagem.getTime()) / diaMs);

        if (diasPassados === 0)
            return "Hoje";

        const futuro = (diasPassados < 0) ? true : false;
        if (futuro)
            diasPassados *= -1;

        if (diasPassados === 1) 
            return futuro ? 'Amanhã' : 'Ontem';

        if (diasPassados < 7)
            return `${futuro ? 'Em' : 'Há'} ${diasPassados} dias`
    
        const semanasPassadas = Math.floor(diasPassados / 7);
        diasPassados %= 7;
    
        const semanasString = `${futuro ? 'Em' : 'Há'} ${semanasPassadas} semana${semanasPassadas > 1 ? 's' : ''}`
    
        if (diasPassados === 0)
            return semanasString;
        if (diasPassados === 1)
            return semanasString + ` e um dia`;
    
        return semanasString + ` e ${diasPassados} dias`;
    },

    diaPorExtenso: (dia: String) => {
        let data = dia.split(" ")[0]
        let hora = dia.split(" ")[1]
        const meses = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const partes = data.split('/');
        const mes = meses[parseInt(partes[1])];

        return `${partes[0]} de ${mes} de ${partes[2]} às ${hora}`;
    }
}