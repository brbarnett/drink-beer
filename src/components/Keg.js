import React from 'react';

class Keg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well">
                <h2>Keg</h2>
                <div>Remaining: {this.props.remaining}%</div>
            </div>
        );
    }
}

Keg.propTypes = {
    remaining: React.PropTypes.number.isRequired
};

module.exports = Keg;