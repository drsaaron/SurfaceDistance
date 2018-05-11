/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, {Component} from 'react';
import classNames from 'classnames';

export default class CoordinateDistance extends Component {
    constructor(props) {
        super(props);
    }

    getClassNames() {
        return classNames({
            hidden: !this.props.distance.hasDistance
        });
    }
    render() {
        return (
                <div id="componentDistance" className={this.getClassNames()}>
                    Distance: <span className="distance">{this.props.distance.distance}</span> miles
                </div>
                );
    }
}
