/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {coordinateMarkerStyle} from './CoordinateMarkerStyle';

const CoordinateMarker = (props) => {
    return (
        <div style={coordinateMarkerStyle}>
            {props.text}
        </div>
    );
}

export default CoordinateMarker;
