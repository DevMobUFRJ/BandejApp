import { useContext } from "react";
import { BlurDiv, PopOuterDiv } from "./style";
import { PopupContext } from "../../Contexts/PopupContext";

export default function GlobalComponents() {

    const {mostrarPopup} = useContext(PopupContext);

    return (
        <>
            <BlurDiv id="BlurDiv"/>

            <PopOuterDiv id="popOuter" onClick={() => mostrarPopup('')}/>
        </>
    );
}