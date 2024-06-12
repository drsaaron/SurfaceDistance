/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
                    <BrowserRouter history={history}>
                        <Routes>
                            <Route exact path='/' component={Main} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
                );
    }
}
