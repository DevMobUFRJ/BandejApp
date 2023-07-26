import { useEffect, useState } from "react";
import { Avadiv, SemMensagens, MensagensNaoLidas, Container, Card, 
        DataRelativa, TextData, TextMensagem } from "./style";
import { ToastContainer, toast } from 'react-toastify';
import Load from "../../Components/Load";
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";
import { Formatacao } from "../../Functions/Formatacao";
import { useContext } from "react";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
    
type aviso = {
    comunicado: String,
    data: String
};

export default function Avaliacao() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);
    const [loading, setLoading] = useState(true);
    const { setPendingNotification } = useContext(NotificationContext);


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
            })
            .catch(() => {
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
            <MensagensNaoLidas onClick={() => {setPendingNotification(false); localStorage.setItem("bandejapp:ultimoAviso", JSON.stringify(comentarios[0].data))}} style={{display: comentarios.length ? '' : 'none'}}>{`Marcar tudo como lido (${comentarios.length})`}</MensagensNaoLidas>
            <Container>
                {
                comentarios.map((comentario, index) => (
                    <Card key={index} style={{borderRadius: 
                    `${Formatacao.bordaRedonda(index, comentarios.length)}`, 
                    marginTop: index === 0 ? '2vh' : '1px'}}>
                        <DataRelativa>{`${Formatacao.diaRelativo(comentario.data)}`}</DataRelativa>
                        <TextData>{`${Formatacao.diaPorExtenso(comentario.data)}`}</TextData>
                        <TextMensagem>{comentario.comunicado}</TextMensagem>
                    </Card>
                ))}
            </Container>
        </Avadiv>
    );
}
