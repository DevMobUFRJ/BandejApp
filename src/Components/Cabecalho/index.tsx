import SideBar from "../SideBar";
import { BlurDiv, CabecaDiv, PageTitle,DivAjustes, IconeAjustes } from "./style";
import Ajustes from '../../Assets/Ajustes.svg';

type Nome = { nome: string 
            setOpcoes?: Function};
const boxshadow = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

let aberto = true;
let interromper = false;
let fading: NodeJS.Timer;

const fade = (abrindo: boolean, setOpcoes: Function) => {
    if (interromper)
        return;

    interromper = true;
    setTimeout(() => {
        interromper = false;
    }, 350)

    const direcao = abrindo ? 1 : -1;
    requestAnimationFrame(() => {
        const acoes = document.getElementById('acoes');
        const conteudo = document.getElementById('conteudo');
        if (!acoes || !conteudo)
            return;

        if (!acoes.style.opacity)
            acoes.style.opacity = '1';
            
        clearInterval(fading);
        acoes.style.display = 'flex';

        requestAnimationFrame (() => {
            conteudo.style.transition = '0.25s ease';
            conteudo.style.transform = `translateY(${28.5 * direcao}vh)`;
        });
        fading = setInterval (() => {
            requestAnimationFrame(() => {
                let opacidade = parseFloat(acoes.style.opacity);

                if ((abrindo && opacidade < 1) || (!abrindo && opacidade > 0))
                    acoes.style.opacity = `${opacidade + 0.02 * direcao}`
                else {
                    clearInterval(fading);
                    requestAnimationFrame(() => {
                        if (!abrindo) {
                            acoes.style.display = 'none';
                            conteudo.style.marginTop = '0';
                        }
                        else {
                            conteudo.style.marginTop = '28.5vh';
                        }
                        conteudo.style.transition = '';
                        conteudo.style.transform = `translateY(0px)`;
                    })
                }
            })
        }, 5);
    })
    setOpcoes(abrindo);
};

const clique = (controle?: Function, setar?: Function) => {
    if (controle) {
        controle(!aberto, setar); 
        aberto = !aberto;
    }
}

export default function Cabecalho({nome, setOpcoes}: Nome) {
    return (
        <CabecaDiv style={{boxShadow:`${nome === 'Cardápio' ? '' : boxshadow}`}}>
            <BlurDiv id="blurdiv"/>
            <SideBar/>
            <PageTitle>{nome}</PageTitle>
            <DivAjustes>
                <IconeAjustes style={{display: `${nome === 'Cardápio' ? '' : 'none'}`}}
                src={Ajustes} 
                onClick={() => clique(fade, setOpcoes)}/>
            </DivAjustes>
        </CabecaDiv>
    );
}