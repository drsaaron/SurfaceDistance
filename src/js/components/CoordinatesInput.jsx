/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {useState, useEffect} from 'react';

const CoordinatesInput = (props) => {

    const [firstLatitude, setFirstLatitude] = useState(props.coordinates.firstCoordinate.lat || 0);
    const [firstLongitude, setFirstLongitude] = useState(props.coordinates.firstCoordinate.lng || 0);
    const [secondLatitude, setSecondLatitude] = useState(props.coordinates.secondCoordinate.lat || 0);
    const [secondLongitude, setSecondLongitude] = useState(props.coordinates.secondCoordinate.lng || 0);

    const updateFirstLatitude = (event) => {
	setFirstLatitude(event.target.value);
    }

    const updateSecondLatitude = (event) => {
	setSecondLatitude(event.target.value);
    }

    const updateFirstLongitude = (event) => {
        setFirstLongitude(event.target.value);
    }

    const updateSecondLongitude = (event) => {
        setSecondLongitude(event.target.value);
    }

    const updateMap = () => {
        var firstCoordinate = { lat: firstLatitude, lng: firstLongitude };
        var secondCoordinate = { lat: secondLatitude, lng: secondLongitude };
        
        props.updateCoordinates(firstCoordinate, secondCoordinate);
    }
    
    const handleUpdateMap = (event) => {
        event.preventDefault();
        
        updateMap();
    }
    
    return (
        <div id="coordinateInput">
            <form onSubmit={handleUpdateMap} id="coordinateInputForm">
                <table>
                    <tbody>
                        <tr>
                            <td><label htmlFor="firstLatitude">Latitude 1</label></td>
                            <td><input type="text" name="firstLatitude" value={firstLatitude} onChange={updateFirstLatitude} /></td>
                            <td><label htmlFor="firstLongitude">Longitude 1</label></td>
                            <td><input type="text" name="firstLongitude" value={firstLongitude} onChange={updateFirstLongitude} /></td>            
                        </tr>
                        <tr>
                            <td><label htmlFor="secondLatitude">Latitude 2</label></td>
                            <td><input type="text" name="secondLatitude" value={secondLatitude} onChange={updateSecondLatitude} /></td>
                            <td><label htmlFor="secondLongitude">Longitude 2</label></td>
                            <td><input type="text" name="secondLongitude" value={secondLongitude} onChange={updateSecondLongitude} /></td>            
                        </tr>     
                        <tr>
                            <td colSpan="4" className="alignRight"><input type="submit" value="Update" /></td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default CoordinatesInput;

