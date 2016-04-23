import React from 'react';

import Bartender from './Bartender.jsx';
import Customer from './Customer.jsx';
import Keg from './Keg.jsx';
import Mug from './Mug.jsx';

class Pub extends React.Component {
    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     console.log(this); // React Component instance
    // }

    render() {
        return (
            <div className="container">
                <div className="col-xs-12 col-md-3">
                    <Customer />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Mug />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Bartender />
                </div>
                <div className="col-xs-12 col-md-3">
                    <Keg />
                </div>
            </div>
        );
    }
}
// Pub.defaultProps = { text: 'hello' };
// Pub.propTypes = { text: React.PropTypes.string.isRequired };

module.exports = Pub; 