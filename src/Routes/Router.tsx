import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';

import Avaliacao from '../Pages/Avaliacao';
import Cardapio from '../Pages/Cardapio';
import Tutorial from '../Pages/Tutorial';
import Restaurante from '../Pages/Restaurante';
import Notificacao from '../Pages/Notificacao';
import Informacoes from '../Pages/Informacoes';
import FaleConosco from '../Pages/Fale';

export default function Routes() {
    return (
        <HashRouter basename='/'>
            <Switch>
                <Route exact path='/'>
                    <Redirect to={localStorage.getItem("bandejapp:ruDefault")?
                                '/Cardapio':'/Tutorial'}/>
                </Route>

                <Route path='/Tutorial'>
                    <Tutorial/>
                </Route>

                <Route path="/Restaurante">
                    <Restaurante/>
                </Route>

                <Route path="/Cardapio">
                    <Cardapio/>
                </Route>

                <Route path="/Avaliacao">
                    <Avaliacao/>
                </Route>

                <Route path="/Notificacao">
                    <Notificacao/>
                </Route>

                <Route path='/Informacoes'>
                    <Informacoes/>
                </Route>

                <Route path='/FaleConosco'>
                    <FaleConosco/>
                </Route>
            </Switch>
        </HashRouter>
    )
} 
