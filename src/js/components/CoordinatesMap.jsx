/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import GoogleMapReact from 'google-map-react';
import CoordinateMarker from './CoordinateMarker';

const CoordinatesMap = (props) => {
    return (
        <div id="displayMap">
            <GoogleMapReact
                defaultCenter={props.center}
                defaultZoom={props.zoom}
		bootstrapURLKeys={{ key: "AIzaSyBXUyrNKCgNRfCDet9IMp-UVaPwfJ08QLE" }}
            >
                <CoordinateMarker
                    lat={props.coordinates.firstCoordinate.lat}
                    lng={props.coordinates.firstCoordinate.lng}
                    text="1"
                />
                <CoordinateMarker
                    lat={props.coordinates.secondCoordinate.lat}
                    lng={props.coordinates.secondCoordinate.lng}
                    text="2"
                />
            </GoogleMapReact>
        </div>
    );
};

CoordinatesMap.defaultProps = {center: { lat: 59.95, lng: 30.33 }, zoom: 1};

export default CoordinatesMap;
