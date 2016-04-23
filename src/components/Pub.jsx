import React from 'react';

import Bartender from './Bartender.jsx';
import Customer from './Customer.jsx';
import Keg from './Keg.jsx';
import Mug from './Mug.jsx';

class Pub extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="container">
                <h1>{this.props.name}</h1>
                <div className="col-xs-12 col-md-3">
                    <Customer name="John" />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Mug beer="Porter" />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Bartender name="Jack" />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Keg />
                </div>
            </div>
        );
    }
}

Pub.propTypes = { name: React.PropTypes.string.isRequired };

module.exports = Pub; 