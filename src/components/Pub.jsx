import React from 'react';

import Bartender from './Bartender.jsx';
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
            <div>
                <Bartender />
                <Keg />
                <Mug />
            </div>
        );
    }
}
// Pub.defaultProps = { text: 'hello' };
// Pub.propTypes = { text: React.PropTypes.string.isRequired };

module.exports = Pub; 