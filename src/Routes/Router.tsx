import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Avaliacao from '../Pages/Avaliacao';
import Cardapio from '../Pages/Cardapio';
import Tutorial from '../Pages/Tutorial';
import Restaurante from '../Pages/Restaurante';
import Notificacao from '../Pages/Comunicados';
import Informacoes from '../Pages/Informacoes';
import FaleConosco from '../Pages/FaleConosco';
import Template from '../Components/Template';

export default function Routes() {
    const isIos = () => {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test( userAgent );
    }

    const isInStandaloneMode = () => {
        if(isIos())
            return ('standalone' in window.navigator) && (window.navigator.standalone)
        else 
            return (window.matchMedia('(display-mode: standalone)').matches);
    };   

    return (
        <HashRouter basename='/'>
            <Switch>
                <Route exact path='/'>
                    <Redirect to={localStorage.getItem("bandejapp:ruDefault")?
                                '/Cardapio':'/Tutorial'}/>
                </Route>

                <Route path='/Tutorial'>
                {
                    (isInStandaloneMode()) ?
                        <Redirect to='/Restaurante'/>
                        :
                        <Tutorial/>
                }
                </Route>

                <Route path="/Restaurante">
                    <Restaurante/>
                </Route>

                <Route path="/Cardapio">
                    <Template nome='Cardápio'>
                        <Cardapio/>
                    </Template>
                </Route>

                <Route path="/Avaliacao">
                    <Template nome='Avaliação'>
                        <Avaliacao/>
                    </Template>
                </Route>

                <Route path="/Notificacao">
                    <Template nome='Comunicados'>
                        <Notificacao/>
                    </Template>
                </Route>

                <Route path='/Informacoes'>
                    <Template nome='Informações'>
                        <Informacoes/>
                    </Template>
                </Route>

                <Route path='/FaleConosco'>
                    <Template nome='Fale conosco'>
                        <FaleConosco/>
                    </Template>
                </Route>
            </Switch>
        </HashRouter>
    )
} 
