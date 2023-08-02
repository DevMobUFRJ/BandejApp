import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { BackImg, ButtonDiv, CurrentDiv,
    CurrentPage, InitialPage, PageDescription,
    PageTitle, PrevNext, StartButton, Template,
    TemplateDiv, TutDiv, Logo, Slogan, SkipTut } from "./style";

import Background from '../../Assets/Tutorial/BgInicial.svg';
import TempAvaliacao from "../../Assets/Tutorial/TempAvaliacao.svg";
import TempCardapio from "../../Assets/Tutorial/TempCardapio.svg";
import TempDownload from "../../Assets/Tutorial/TempDownload.svg";
import TempNotificacao from "../../Assets/Tutorial/TempNotificacao.svg"
import LogoImg from '../../Assets/Tutorial/Logo.svg';


export default function Tutorial() {
    const history = useHistory();

    const [page, tggPage] = useState(0);
    const [inicio, tggInicio] = useState(0);

    const titulos = ['Instale o App', 'Acesse os avisos',
                    'Confira o Cardápio', 'Faça Avaliações'];

    const descricoes = ['e acesse o cardápio até quando estiver sem conexão com a internet.',
                        'e fique por dentro do funcionamento dos RU\'s e de tudo que acontece.',
                        'e saiba o que será servido durante toda a semana no almoço e jantar.',
                        'fornecendo o feedback necessário para que o RU possa ficar cada vez melhor.']

    
    const tempHandler = (target: string) => {        
        if(target.includes('prevButton')) {
            if(page <= 0) return;
            else prevTemplate();
        }
        else {
            if(page >= 3) history.push('/Restaurante'); 
            else nextTemplate();
        }
    }

    const nextTemplate = () => {
        const pageIndex = document.querySelectorAll('#page');
        const currentPage = document.querySelector('.currentPage');

        const currentTemp = document.querySelector('.currentTemplate');
        const nextTemp = document.querySelector('.nextTemplate');

        tggPage(page+1);

        currentTemp?.classList.replace('currentTemplate', 'prevTemplate');
        nextTemp?.classList.replace('nextTemplate', 'currentTemplate');

        if(currentPage) currentPage.classList.toggle('currentPage');
        pageIndex[page+1].classList.add('currentPage');
    }

    const prevTemplate = () => {    
        const pageIndex = document.querySelectorAll('#page');
        const currentPage = document.querySelector('.currentPage');

        const currentTemp = document.querySelector('.currentTemplate');
        const prevTemplates = document.querySelectorAll('.prevTemplate');

        tggPage(page-1);

        currentTemp?.classList.replace('currentTemplate', 'nextTemplate');
        prevTemplates[prevTemplates.length-1].classList.replace('prevTemplate', 'currentTemplate');

        if(currentPage) currentPage.classList.toggle('currentPage');
        pageIndex[page-1].classList.add('currentPage');
    }

    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
    }

    const isInStandaloneMode = () => { //referencia: https://stackoverflow.com/questions/21125337/how-to-detect-if-web-app-running-standalone-on-chrome-mobile
        if(isIos())
            return ('standalone' in window.navigator) && (window.navigator.standalone)
        else 
            return (window.matchMedia('(display-mode: standalone)').matches);
    };   

    useEffect(() => {
        if(isInStandaloneMode()) { 
            history.push('/Restaurante')
        }
    })

    return(
        <TutDiv>
            <InitialPage style={{display: `${inicio?'none':'flex'}`}}>
                <Logo src={LogoImg}/>

                <Slogan>Do universitário, para os universitários : )</Slogan>

                <StartButton onClick={() => tggInicio(1)}>COMEÇAR</StartButton>
                <SkipTut onClick={() => history.push('/Restaurante')}>Pular Tutorial</SkipTut>
            </InitialPage>

            <div style={{display: `${inicio?'':'none'}`, margin: 0}}>
                <BackImg src={Background}/>
                
                <CurrentDiv>
                    <CurrentPage id="page" className="currentPage"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                </CurrentDiv>

                <TemplateDiv>
                    <Template id="template" className="currentTemplate" src={TempDownload}/>
                    <Template id="template" className="nextTemplate" src={TempNotificacao}/>
                    <Template id="template" className="nextTemplate" src={TempCardapio}/>
                    <Template id="template" className="nextTemplate" src={TempAvaliacao}/>
                </TemplateDiv>

                <PageTitle>{`${titulos[page]}`}</PageTitle>
                <PageDescription>{`${descricoes[page]}`}</PageDescription>

                <ButtonDiv>
                    <PrevNext className="prevButton"
                    onClick={(e) => {tempHandler(e.currentTarget.className);}}>Voltar</PrevNext>

                    <PrevNext className="nextButton"
                    onClick={(e) => {tempHandler(e.currentTarget.className);}}
                    >{page===3? 'Ver Cardápio':'Próximo'}</PrevNext>
                </ButtonDiv>
            </div>
        </TutDiv> 
    );
};
