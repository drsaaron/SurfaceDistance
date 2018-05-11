/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    distance: -1,
    hasDistance: false
};

export default function distanceReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_DISTANCE:
            return {
                ...state,
                hasDistance: true,
                distance: action.distance
            }
        default:
            return {
                ...state
            }
    }
}