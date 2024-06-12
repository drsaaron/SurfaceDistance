import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer.js';
import ActionTypes from '../actions/ActionTypes.js';
import { routerMiddleware } from 'react-router-redux';
import { thunk } from 'redux-thunk';
import { createBrowserHistory } from 'history';
import logger from 'redux-logger';

export const history = createBrowserHistory();
const historyMiddleware = routerMiddleware(history);

const store = createStore(rootReducer, {}, applyMiddleware(historyMiddleware, thunk, logger));

export default store;
