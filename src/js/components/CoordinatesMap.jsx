/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';
import CoordinateMarker from './CoordinateMarker';

export default class CoordinatesMap extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 1
    };

    render() {
        return (
                <div id="displayMap">
                    <GoogleMapReact
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
			bootstrapURLKeys={{ key: "AIzaSyBXUyrNKCgNRfCDet9IMp-UVaPwfJ08QLE" }}
                        >
                        <CoordinateMarker
                            lat={this.props.coordinates.firstCoordinate.lat}
                            lng={this.props.coordinates.firstCoordinate.lng}
                            text="1"
                            />
                        <CoordinateMarker
                            lat={this.props.coordinates.secondCoordinate.lat}
                            lng={this.props.coordinates.secondCoordinate.lng}
                            text="2"
                            />
                    </GoogleMapReact>
                </div>
                            );
                }
    }
