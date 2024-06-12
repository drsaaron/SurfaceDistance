/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import Main from './Main';
import { Provider } from 'react-redux';
import store from '../store/SurfaceDistanceStore';

const App = (props) => {
    return (
        <Provider store={store}>
	    <Main />
        </Provider>
    );
}

export default App;
