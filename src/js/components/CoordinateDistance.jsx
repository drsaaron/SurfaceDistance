/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import classNames from 'classnames';

const CoordinateDistance = (props) => {

    const getClassNames = () => {
        return classNames({
            hidden: !props.distance.hasDistance
        });
    }
    
    return (
        <div id="componentDistance" className={getClassNames()}>
            Distance: <span className="distance">{props.distance.distance1} ({props.distance.distance2})</span> miles
        </div>
    );
}

export default CoordinateDistance;
