/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import Main from './Main';
import { Provider } from 'react-redux';
import store, { history } from '../store/SurfaceDistanceStore';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <Switch>
                            <Route exact path='/' component={Main} />
                        </Switch>
                    </ConnectedRouter>
                </Provider>
                );
    }
}