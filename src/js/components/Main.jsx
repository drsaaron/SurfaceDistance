import { connect } from 'react-redux';
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

const Main = (props) => {

    var defaultCenter = { lat: 43.038902, lng: -87.906471 };
    var zoom = 1;
    return (
        <div>
            <CoordinatesInput coordinates={props.map} updateCoordinates={props.updateCoordinates} />
            <CoordinateDistance distance={props.distance} />
            <CoordinatesMap center={defaultCenter} text="Point" coordinates={props.map} zoom={zoom} />
        </div>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
