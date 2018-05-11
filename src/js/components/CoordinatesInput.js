/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
export default class CoordinatesInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstLatitude: this.props.coordinates.firstCoordinate.lat || 0,
            firstLongitude: this.props.coordinates.firstCoordinate.lng || 0,
            secondLatitude: this.props.coordinates.secondCoordinate.lat || 0,
            secondLongitude: this.props.coordinates.secondCoordinate.lng || 0
        }

        this.updateFirstLatitude = this.updateFirstLatitude.bind(this);
        this.updateSecondLatitude = this.updateSecondLatitude.bind(this);
        this.updateFirstLongitude = this.updateFirstLongitude.bind(this);
        this.updateSecondLongitude = this.updateSecondLongitude.bind(this);
        this.handleUpdateMap = this.handleUpdateMap.bind(this);
    }

    updateFirstLatitude(event) {
        this.setState({...this.state, firstLatitude: event.target.value});
    }

    updateSecondLatitude(event) {
        this.setState({...this.state, secondLatitude: event.target.value});
    }

    updateFirstLongitude(event) {
        this.setState({...this.state, firstLongitude: event.target.value});
    }

    updateSecondLongitude(event) {
        this.setState({...this.state, secondLongitude: event.target.value});
    }

    componentDidMount() {
        if (this.props.coordinates.hasFirstCoordinate && this.props.coordinates.hasSecondCoordinate) {
            this.updateMap();
        }
    }
    
    updateMap() {
        var firstCoordinate = { lat: this.state.firstLatitude, lng: this.state.firstLongitude };
        var secondCoordinate = { lat: this.state.secondLatitude, lng: this.state.secondLongitude };
        
        this.props.updateCoordinates(firstCoordinate, secondCoordinate);
    }
    
    handleUpdateMap(event) {
        event.preventDefault();
        
        this.updateMap();
    }

    render() {
        return (
                <div id="coordinateInput">
                    <form onSubmit={this.handleUpdateMap} id="coordinateInputForm">
                        <table>
                            <tbody>
                                <tr>
                                    <td><label htmlFor="firstLatitude">Latitude 1</label></td>
                                    <td><input type="text" name="firstLatitude" value={this.state.firstLatitude} onChange={this.updateFirstLatitude} /></td>
                                    <td><label htmlFor="firstLongitude">Longitude 1</label></td>
                                    <td><input type="text" name="firstLongitude" value={this.state.firstLongitude} onChange={this.updateFirstLongitude} /></td>            
                                </tr>
                                <tr>
                                    <td><label htmlFor="secondLatitude">Latitude 2</label></td>
                                    <td><input type="text" name="secondLatitude" value={this.state.secondLatitude} onChange={this.updateSecondLatitude} /></td>
                                    <td><label htmlFor="secondLongitude">Longitude 2</label></td>
                                    <td><input type="text" name="secondLongitude" value={this.state.secondLongitude} onChange={this.updateSecondLongitude} /></td>            
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
}
