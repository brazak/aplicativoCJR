import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Turno from './pages/turno';
import Nova from './pages/nova';
import Tarefax from './pages/tarefa x';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Turno}/>
                    <Route path="/sobre" component={Nova}/>
                    <Route path="/contato" component={Tarefax}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
