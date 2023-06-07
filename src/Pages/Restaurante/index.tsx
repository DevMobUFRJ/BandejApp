import { useState } from "react";
import { useHistory } from "react-router-dom";
import { RestDiv, RestHeader, RestP, RestTitle } from "./style";
import { RestButton } from "./style";
import RestSelect from "../../Components/RestSelect";

export default function Restaurante() {
    const history = useHistory();

    const [data, setData] = useState('');
    const childToParent = (childData: string) => setData(childData);

    function RU(){
        if(data.length > 1){
            localStorage.setItem("bandejapp:ruDefault", data);
            return history.push('/Cardapio');
        }
        else return alert('Por favor, seleciona um restaurante.');
    }

    return (
        <RestDiv>
            <RestHeader>
                <RestTitle>Qual restaurante você quer consultar ?</RestTitle>
                <RestP>Essa opção poderá ser alterada depois</RestP>
            </RestHeader>

            <RestSelect
            childToParent={childToParent}/>

            <RestButton id='confirm' onClick={RU}>Confirmar</RestButton>
        </RestDiv>
    );
}