/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import geodist from 'geodist';

const EARTH_RADIUS = 3959;

function toRadians(degrees) {
    return degrees * 3.14159/180;
}

function calculateDistance(firstCoordinate, secondCoordinate) {
    // do the calculation myself according to https://en.wikipedia.org/wiki/Great-circle_distance
    var firstLatitude = toRadians(firstCoordinate.lat);
    var firstLongitude = toRadians(firstCoordinate.lng);
    var secondLatitude = toRadians(secondCoordinate.lat);
    var secondLongitude = toRadians(secondCoordinate.lng);
    
    var delLatitude = secondLatitude - firstLatitude;
    var delLongitude = secondLongitude - firstLongitude;
    
    var term1 = Math.sin(delLatitude / 2);
    var term2 = Math.sin(delLongitude / 2);
    
    var delSigma = 2 * Math.asin(Math.sqrt(Math.pow(term1, 2) + Math.cos(firstLatitude) * Math.cos(secondLatitude) * Math.pow(term2, 2)));
    var myDistance = EARTH_RADIUS * delSigma;
    
    console.log("my calculation: " + myDistance);
    
    // do the calculation using a package
    var coord1 = { lon: firstCoordinate.lng, lat: firstCoordinate.lat };
    var coord2 = { lon: secondCoordinate.lng, lat: secondCoordinate.lat };
    
    var distance = geodist(coord1, coord2);
    console.log("other calculation : " + distance);
    
    // use my value for now
    return myDistance;
}

export function updateCoordinates(firstCoordinate, secondCoordinate) {
    return (dispatch) => {
        dispatch({ type: ActionTypes.UPDATE_FIRST_COORDINATE, firstCoordinate });
        dispatch({ type: ActionTypes.UPDATE_SECOND_COORDINATE, secondCoordinate });
        
        // calculate the distance
        var distance = calculateDistance(firstCoordinate, secondCoordinate);
        dispatch({ type: ActionTypes.UPDATE_DISTANCE, distance });
    };
}
