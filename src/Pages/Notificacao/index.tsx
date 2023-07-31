import { useEffect, useState } from "react";
import { Avadiv, Card, Container, CardMensagem, CardData, TextMensagem, TextData, MensagensNaoLidas, DataRelativa, SemMensagens, SideIcon, CardTop} from "./style";
import { ToastContainer, toast } from 'react-toastify';
import Load from "../../Components/Load";
import 'react-toastify/dist/ReactToastify.css';
import Cabecalho from "../../Components/Cabecalho";
import { Formatacao } from "../../Functions/Formatacao";
import { useContext } from "react";
import { NotificationContext } from "../../Contexts/PendingNotificationContext";
import Pending from '../../Assets/SideBar/pending.svg';
import DownPop from "../../Components/PopUp";
import { InstallMessageContext } from "../../Contexts/ShowInstallMessageContext";
    
type aviso = {
    comunicado: String,
    data: String,
    pending: boolean,
};

export default function Avaliacao() {

    const [comentarios, setComentarios] = useState<aviso[]>([]);
    const [loading, setLoading] = useState(true);
    const { pendingNotification, setPendingNotification } = useContext(NotificationContext);
    const [quantidadeNaoLidas, setQuantidadeNaoLidas] = useState(0)

    const { showInstallMessage } = useContext(InstallMessageContext);

    const verificaPrecedenciaData = (data: String) => {
        let dataArmazenadaString = localStorage.getItem("bandejapp:ultimoAviso");
        let dataArmazenadaDate;
        if(dataArmazenadaString){
            let dataArmazenadaQuebrada=dataArmazenadaString.substring(1, 11).split("/")
            dataArmazenadaDate=new Date(parseInt(dataArmazenadaQuebrada[2]), parseInt(dataArmazenadaQuebrada[1]) - 1, parseInt(dataArmazenadaQuebrada[0]))
        }

        let dataComentarioQuebrada=data.substring(0, 10).split("/")
        let dataComentarioDate=new Date(parseInt(dataComentarioQuebrada[2]), parseInt(dataComentarioQuebrada[1]) - 1, parseInt(dataComentarioQuebrada[0]))

        if(dataArmazenadaDate && dataComentarioDate <= dataArmazenadaDate)
            return false
        else 
            return true    
    };

    useEffect(() => {
        fetch(`${process.env.REACT_APP_COMUNICADOS_API_URL}`)
            .then((data) => data.json())
            .then((post) => {
                let qtd = 0
                for (let aviso of post)
                {
                    let dataFormatada;
                    dataFormatada = aviso.data.substring(0, 10);
                    dataFormatada = dataFormatada.split('-').reverse().join('/');
                    aviso.data = dataFormatada;
                    aviso.pending = verificaPrecedenciaData(aviso.data)
                    if(aviso.pending){
                        qtd++; 
                    }      
                }
                setQuantidadeNaoLidas(qtd);
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
            {
                (pendingNotification) && 
                <MensagensNaoLidas 
                    onClick={() => {setPendingNotification(false); localStorage.setItem("bandejapp:ultimoAviso", JSON.stringify(comentarios[0].data))}}
                    style={{display: comentarios.length ? '' : 'none'}}>{`Marcar tudo como lido (${quantidadeNaoLidas})`}
                </MensagensNaoLidas>
            }
            <Container>
                {
                comentarios.map((comentario, index) => {
                    return (
                        <Card 
                            key={index}
                            style={{borderRadius: `${Formatacao.bordaRedonda(index, comentarios.length)}`, marginTop: index === 0 ? '2vh' : '1px'}}
                            new={comentario.pending && pendingNotification}
                        >
                            <CardData>
                                <CardTop>
                                    <DataRelativa new={comentario.pending && pendingNotification}>
                                        {`${Formatacao.diaRelativo(comentario.data)}`}
                                    </DataRelativa>
                                    {
                                        comentario.pending && pendingNotification && <SideIcon src={Pending} />
                                    }
                                </CardTop>
                                <TextData new={comentario.pending && pendingNotification}>
                                    {`${Formatacao.diaPorExtenso(comentario.data)}`}
                                </TextData>
                            </CardData>
                            
                            <CardMensagem><TextMensagem>{comentario.comunicado}</TextMensagem></CardMensagem>
                        </Card>
                    )})}
            </Container>
            {
                showInstallMessage &&
                <DownPop/>
            }
        </Avadiv>
    );
}
