import { useEffect, useState } from "react";
import { Avadiv, Card, Container, CardMensagem, CardData, TextMensagem, TextData, MensagensNaoLidas, DataRelativa, SemMensagens} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import Load from "../../Components/Load";
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";
import { Formatacao } from "../../Functions/Formatacao";
    
type aviso = {
    comunicado: String,
    data: String
};

export default function Avaliacao() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);
    const [loading, setLoading] = useState(true);


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
                    <Card key={index} style={{borderRadius: `${Formatacao.bordaRedonda(index, comentarios.length)}`, marginTop: index === 0 ? '2vh' : '0.1vh'}}>
                        <CardData>
                            <DataRelativa>{`${Formatacao.diaRelativo(comentario.data)}`}</DataRelativa>
                            <TextData>{`${Formatacao.diaPorExtenso(comentario.data)}`}</TextData>
                        </CardData>
                        
                        <CardMensagem><TextMensagem>{comentario.comunicado}</TextMensagem></CardMensagem>
                    </Card>
                ))}
            </Container>
        </Avadiv>
    );
}
