import { PopText, PopupDiv } from "./style";
import Download from '../../Assets/Cardapio/download.svg';

/*
    FICOM COM DEUS PORQUE ATÉ ENTÃO NÃO DÁ PRA INSTALAR PELO PRÓPRIO POPUP
    PORÉM PODE SER REUTILIZADO NO FUTURO ETC.
*/

export default function DownPop() {
    return(
        <PopupDiv>
            <PopText>
                Instale esse aplicativo no seu Iphone: aperte <img width="15" height="15" src={Download} alt="Icon tap"></img> e depois Adicionar à tela inicial.
            </PopText>
        </PopupDiv>
    );
}