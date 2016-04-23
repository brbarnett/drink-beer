import React from 'react';

class Mug extends React.Component {    
    render() {
        return (
            <div className="well">
                <h2>Mug</h2>
                <p>Beer: { this.props.beer }</p>
                <div>Remaining: { this.props.remaining }%</div>
            </div>
        );
    }
}

Mug.propTypes = { 
    beer: React.PropTypes.string.isRequired,
    remaining: React.PropTypes.number.isRequired
 };

module.exports = Mug;