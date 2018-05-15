/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import request from 'superagent';

class SurfaceDistanceAPI {

    convertCoordinate(coordinate) {
        return {
            latitude: coordinate.lat,
            longitude: coordinate.lng
        };
    }

    calculateDistance(firstCoordinate, secondCoordinate) {
        var distanceObject = {
            firstCoordinate: this.convertCoordinate(firstCoordinate),
            secondCoordinate: this.convertCoordinate(secondCoordinate)
        };

        return request
                .post("http://localhost:9080/distance")
                .send(distanceObject)
                .set('Accept', 'application/json')
                .then((res) => JSON.parse(res.text))
                .then((res) => res.distance);
    }
}

const api = new SurfaceDistanceAPI();

export default api;
    