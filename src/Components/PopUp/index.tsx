import { PopText, PopupDiv } from "./style";
import Download from '../../Assets/Cardapio/download.svg';
import { useState } from "react";

/*
    FICOM COM DEUS PORQUE ATÉ ENTÃO NÃO DÁ PRA INSTALAR PELO PRÓPRIO POPUP
    PORÉM PODE SER REUTILIZADO NO FUTURO ETC.
*/

export default function DownPop() {
    const [visibility, setVisibility] = useState(true)
    return(
        <PopupDiv onClick={() => setVisibility(false)} style={{display: (visibility) ? '' : 'none'}}>
            <PopText>
                Instale esse aplicativo no seu Iphone: aperte <img width="15" height="15" src={Download} alt="Icon tap"></img> e depois Adicionar à tela inicial.
                <br/><i>Clique para ocultar</i>.
            </PopText>
        </PopupDiv>
    );
}