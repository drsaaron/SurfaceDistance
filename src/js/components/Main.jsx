import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CoordinatesMap from './CoordinatesMap';
import CoordinatesInput from './CoordinatesInput';
import { updateCoordinates } from '../actions/UpdateCoordinatesAction';
import CoordinateDistance from './CoordinateDistance';

const mapStateToProps = (state) => {
    return {
        map: state.map,
        distance: state.distance
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCoordinates: (firstCoordinate, secondCoordinate) => dispatch(updateCoordinates(firstCoordinate, secondCoordinate))
    };
};

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        var zoom = 1;
        var defaultCenter = { lat: 43.038902, lng: -87.906471 };
        return (
                <div>
                    <CoordinatesInput coordinates={this.props.map} updateCoordinates={this.props.updateCoordinates} />
                    <CoordinateDistance distance={this.props.distance} />
                    <CoordinatesMap center={defaultCenter} text="Point" coordinates={this.props.map} />
                </div>
                );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
