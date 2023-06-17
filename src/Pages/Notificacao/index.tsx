import { useEffect, useState } from "react";
import { Avadiv, Card, Container, CardMensagem, CardData, TextMensagem, TextData} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";
    
type aviso = {
    comunicado: String,
    data: String
};

export default function Avaliacao() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);

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
                localStorage.setItem("bandejapp:ultimoAviso", JSON.stringify(post[post.length - 1].data));    
            })
            .catch((error) => {
                toast.error("Erro de rede. Tente novamente mais tarde");
            });
    }, []);

    return (
        <Avadiv id="AvaPage">
            <ToastContainer />

            <Cabecalho nome='Comunicados'/>

            <Container>
                {comentarios.map((comentario, index) => (
                    <Card key={index}>
                        <CardMensagem><TextMensagem>{comentario.comunicado}</TextMensagem></CardMensagem>
                        <CardData><TextData>{comentario.data}</TextData></CardData>
                    </Card>
                ))}
            </Container>
        </Avadiv>
    );
}
