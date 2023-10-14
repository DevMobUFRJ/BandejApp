import { CloseImg, PopText, PopupDiv } from "./style";
import Download from '../../Assets/Cardapio/download.svg';
import { useState } from "react";
import Close from '../../Assets/Popup/close.svg';

export default function DownPop() {
    const [visibility, setVisibility] = useState(true)
    return(
        <PopupDiv style={{display: (visibility) ? '' : 'none'}}>
            <PopText>
                Instale esse aplicativo no seu Iphone: aperte
                <img width="15" height="15" src={Download} alt="Ícone de download"/>
                e depois Adicionar à tela inicial.
            </PopText>

            <CloseImg id="closeButton" src={Close} alt="Ícone para fechar"
                onClick={() => setVisibility(false)}
            />
        </PopupDiv>
    );
}