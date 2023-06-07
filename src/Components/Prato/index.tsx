import { Descricao, Emoji, Linha, PratoDiv } from "./style";

type info = {
    emoji: number;
    descricao?: string;
}

const emojis = [0x1F957, 0x1F357, 0x1F966, 0x1F372, 0x1F35B, 0x1F34E];
            // [🥗, 🍗, 🥦, 🍲, 🍛, 🍎] respectivamente

export default function Prato(
    {emoji, descricao}: info
) {
    return(
        <PratoDiv>
            <Emoji>{String.fromCodePoint(emojis[emoji - 1])}</Emoji>
            <Linha/>
            <Descricao id="prato">
                {descricao}
            </Descricao>
        </PratoDiv>
    );
};