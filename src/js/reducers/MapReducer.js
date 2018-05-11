/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from '../actions/ActionTypes';

const initialState = {
    hasFirstCoordinate: true,
    hasSecondCoordinate: true,
    firstCoordinate: {lat: 43.0389, lng: -87.9065}, // Milwaukee
    secondCoordinate: {lat: 42.3601, lng: -71.0589} // Boston
};

export default function mapReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_FIRST_COORDINATE:
            return {
                ...state,
                firstCoordinate: action.firstCoordinate,
                hasFirstCoordinate: true
            };

        case ActionTypes.UPDATE_SECOND_COORDINATE:
            return {
                ...state,
                secondCoordinate: action.secondCoordinate,
                hasSecondCoordinate: true
            };

        default:
            return {
                ...state
            }
    }
};

