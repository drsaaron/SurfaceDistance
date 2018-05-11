import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import MapReducer from './MapReducer';
import DistanceReducer from './DistanceReducer';

const rootReducer = combineReducers(
        {
            map: MapReducer,
            distance: DistanceReducer,
            router: routerReducer
        }
);

export default rootReducer;
