import { useState } from "react";
import { useHistory } from "react-router-dom";

import { BackImg, ButtonDiv, CurrentDiv,
    CurrentPage, InitialPage, PageDescription,
    PageTitle, PrevNext, StartSkip, Template,
    TemplateDiv, TutDiv, Logo, LogoDiv, StartDiv } from "./style";

import Background from '../../Assets/Tutorial/BgInicial.svg';
import TempAvaliacao from "../../Assets/Tutorial/TempAvaliacao.svg";
import TempCardapio from "../../Assets/Tutorial/TempCardapio.svg";
import TempDownload from "../../Assets/Tutorial/TempDownload.svg";
import TempNotificacao from "../../Assets/Tutorial/TempNotificacao.svg"
import LogoImg from '../../Assets/Tutorial/Logo.svg';
import BackgroundRu from '../../Assets/Tutorial/BgRu.svg';


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
            if(page <= 0) 
                tggInicio(0);
            else 
                passarPara('prevTemplate');
        }
        else {
            if(page >= 3) 
                history.push('/Restaurante'); 
            else 
                passarPara('nextTemplate');
        }
    }

    const passarPara = (praOnde: string) => {
        const contrario = praOnde === 'nextTemplate' ? 'prevTemplate' : 'nextTemplate';
        const direcao = praOnde === 'nextTemplate' ? 1 : -1;
        
        const pageIndex = document.querySelectorAll('#page');
        const currentPage = document.querySelector('.currentPage');

        const currentTemp = document.querySelector('.currentTemplate');
        const nextTemp = document.querySelector(`.${praOnde}`);

        tggPage(page + direcao);

        currentTemp?.classList.replace('currentTemplate', contrario);
        nextTemp?.classList.replace(praOnde, 'currentTemplate');

        if(currentPage) 
            currentPage.classList.toggle('currentPage');
        pageIndex[page + direcao].classList.add('currentPage');
    }

    return(
        <TutDiv>
            <InitialPage style={{display: `${inicio?'none':'flex'}`}}>
                <BackImg src={BackgroundRu} alt='Imagem de fundo com as cubas do RU em destaque'/>

                <LogoDiv>
                    <Logo src={LogoImg} alt='Logo do aplicativo BandejApp'/>
                </LogoDiv>

                <PageDescription>
                    Tenha o cardápio do<br/>bandejão onde e quando<br/>você precisar
                </PageDescription>

                <StartDiv>
                    <StartSkip onClick={() => tggInicio(1)}>Começar</StartSkip>
                    <StartSkip className="skip" onClick={() => history.push('/Restaurante')}>Pular introdução</StartSkip>
                </StartDiv>
            </InitialPage>

            <div style={{display: `${inicio?'':'none'}`}}>
                <BackImg src={Background} alt='Imagem de onda laranja ao fundo'/>
                
                <CurrentDiv>
                    <CurrentPage id="page" className="currentPage"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                    <CurrentPage id="page"/>
                </CurrentDiv>

                <TemplateDiv>
                    <Template id="template" className="currentTemplate" src={TempDownload}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempNotificacao}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempCardapio}
                    alt='Imagem ilustrativa do aplicativo'/>
                    <Template id="template" className="nextTemplate" src={TempAvaliacao}
                    alt='Imagem ilustrativa do aplicativo'/>
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
