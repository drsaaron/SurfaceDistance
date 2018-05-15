/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import ActionTypes from './ActionTypes';
import geodist from 'geodist';

const EARTH_RADIUS = 3959;

function toRadians(degrees) {
    return degrees * 3.14159 / 180;
}

function calculateDistance1(firstCoordinate, secondCoordinate) {    
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
    
    // use my value for now
    return myDistance;
}

function calculateDistance2(firstCoordinate, secondCoordinate) {
    // do the calculation using a package
    var coord1 = {lon: firstCoordinate.lng, lat: firstCoordinate.lat};
    var coord2 = {lon: secondCoordinate.lng, lat: secondCoordinate.lat};

    var distance = geodist(coord1, coord2);
    console.log("other calculation : " + distance);
    
    return distance;
}

function makeCalculationPromise(calculator, firstCoordinate, secondCoordinate) {
    return new Promise((resolve, reject) => {
        resolve(calculator(firstCoordinate, secondCoordinate));
    });
}

export function updateCoordinates(firstCoordinate, secondCoordinate) {
    return (dispatch) => {
        dispatch({type: ActionTypes.UPDATE_FIRST_COORDINATE, firstCoordinate});
        dispatch({type: ActionTypes.UPDATE_SECOND_COORDINATE, secondCoordinate});

        // calculate the distance.  use a promise so we don't hold
        // up the rest of the processing while the calculation is being done, 
        // potentially via a service call.  (not in this example, but in principle 
        // it could).
        var calculatorArray = [ 
            {
                calculator: calculateDistance1,
                event: ActionTypes.UPDATE_DISTANCE_1
            }, 
            {
                calculator: calculateDistance2,
                event: ActionTypes.UPDATE_DISTANCE_2
            }];
        calculatorArray.map((calculatorDescriptor) => {
            console.log("initiating calculation for " + calculatorDescriptor.event);
            makeCalculationPromise(calculatorDescriptor.calculator, firstCoordinate, secondCoordinate)
                .then((distance) => {
                    dispatch({type: calculatorDescriptor.event, distance});
                });
        });
    };
}
