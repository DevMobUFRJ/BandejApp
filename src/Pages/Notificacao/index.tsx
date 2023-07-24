import { useEffect, useState } from "react";
import { Avadiv, Card, Container, CardMensagem, CardData, TextMensagem, TextData, MensagensNaoLidas, DataRelativa, SemMensagens} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import Load from "../../Components/Load";
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";
    
type aviso = {
    comunicado: String,
    data: String
};

export default function Avaliacao() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);
    const [loading, setLoading] = useState(true);

    const bordaRedonda = (indice: number, tamanho: number) => {
        if (tamanho === 1)
            return "16px";
        
        if (indice === 0)
            return "16px 16px 0 0";

        if (indice === tamanho - 1)
            return "0 0 16px 16px";
        
        return "0";
    };

    const diaRelativo = (dia: String) => {
        const partes = dia.split('/').reverse();
        const parametros = [];

        for (let e of partes)
            parametros.push(parseInt(e));

        parametros[1]--; // Mês é 0-indexado pro construtor de Date

        const hoje = new Date();
        const diaDaMensagem = new Date(parametros[0], parametros[1], parametros[2]);

        let diasPassados = Math.floor((hoje.getTime() - diaDaMensagem.getTime()) / (24 * 60 * 60 * 1000));


        if (diasPassados === 0)
            return "Hoje";

        if (diasPassados === 1)
            return "Ontem"

        if (diasPassados < 7)
            return `Há ${diasPassados} dias atrás`

        const semanasPassadas = Math.floor(diasPassados / 7);
        diasPassados -= semanasPassadas * 7;

        const semanasString = `Há ${semanasPassadas} semana${semanasPassadas > 1 ? 's' : ''}`

        if (diasPassados === 0)
            return semanasString;
        if (diasPassados === 1)
            return semanasString + ` e um dia`;

        return semanasString + ` e ${diasPassados} dias`;
            
    };

    const diaPorExtenso = (dia: String) => {
        const meses = ['', 'janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 
        'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const partes = dia.split('/');
        const mes = meses[parseInt(partes[1])];

        return `${partes[0]} de ${mes} de ${partes[2]}`;
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_COMUNICADOS_API_URL}`)
            .then((data) => data.json())
            .then((post) => {
                for (let aviso of post)
                {
                    let dataFormatada;
                    dataFormatada = aviso.data.substring(0, 10);
                    dataFormatada = dataFormatada.split('-').reverse().join('/');
                    aviso.data = dataFormatada;
                }
                setComentarios(post);
                setLoading(false);
                if(post.length > 0)
                    localStorage.setItem("bandejapp:ultimoAviso", JSON.stringify(post[post.length - 1].data));    
            })
            .catch((error) => {
                setLoading(false);
                toast.error("Erro de rede. Tente novamente mais tarde");
            });
    }, []);

    if(loading)
        return <Load />

    return (
        <Avadiv id="AvaPage">
            <ToastContainer />

            <Cabecalho nome='Comunicados'/>
            <SemMensagens style={{display: comentarios.length ? 'none' : 'flex'}}>Não há nenhum comunicado.</SemMensagens>
            <MensagensNaoLidas style={{display: comentarios.length ? '' : 'none'}}>{`Marcar tudo como lido (${comentarios.length})`}</MensagensNaoLidas>
            <Container>
                {
                comentarios.map((comentario, index) => (
                    <Card key={index} style={{borderRadius: `${bordaRedonda(index, comentarios.length)}`, marginTop: index === 0 ? '2vh' : '0.1vh'}}>
                        <CardData>
                            <DataRelativa>{`${diaRelativo(comentario.data)}`}</DataRelativa>
                            <TextData>{`${diaPorExtenso(comentario.data)}`}</TextData>
                        </CardData>
                        
                        <CardMensagem><TextMensagem>{comentario.comunicado}</TextMensagem></CardMensagem>
                    </Card>
                ))}
            </Container>
        </Avadiv>
    );
}
