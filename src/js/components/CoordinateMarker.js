/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import {coordinateMarkerStyle} from './CoordinateMarkerStyle';

export default class CoordinateMarker extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div style={coordinateMarkerStyle}>
                    {this.props.text}
                </div>
                );
    }
}
