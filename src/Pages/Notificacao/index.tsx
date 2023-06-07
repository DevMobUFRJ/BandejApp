import SideBar from "../../Components/SideBar";
import { HeaderDiv, PageTitle } from "../Cardapio/style";
import { Avadiv, Card, Container, CardMensagem, CardData, TextMensagem, TextData} from "./style";

export default function Avaliacao() {

    const comentarios = [
        {
            text: 'Hoje o Central vai abrir mais cedo',
            date: '19/12/2023 10:00',
        },
        {
            text: 'Amanhã o CT vai abrir mais cedo, porque Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but',
            date: '18/12/2023 11:00',
        },
        {
            text: 'PV está fechado',
            date: '17/12/2023 12:00',
        }
    ]

    return (
        <Avadiv id="AvaPage">
            <HeaderDiv>
                <SideBar/>
                <PageTitle>Comunicados</PageTitle>
            </HeaderDiv>

            <Container>
                {comentarios.map((comentario, index) => (
                    <Card key={index}>
                        <CardMensagem><TextMensagem>{comentario.text}</TextMensagem></CardMensagem>
                        <CardData><TextData>{comentario.date}</TextData></CardData>
                    </Card>
                ))}
            </Container>
        </Avadiv>
    );
}
