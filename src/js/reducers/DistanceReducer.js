/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    distance1: -1,
    distance2: -1,
    hasDistance: true
};

export default function distanceReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_DISTANCE_1:
            return {
                ...state,
                hasDistance: true,
                distance1: action.distance
            }
        case ActionTypes.UPDATE_DISTANCE_2:
            return {
                ...state,
                distance2: action.distance
            }
        default:
            return {
                ...state
            }
}
}