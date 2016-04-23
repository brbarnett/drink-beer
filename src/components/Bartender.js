import React from 'react';

class Bartender extends React.Component {
    render() {
        return (
            <div className="well">
                <h2>Bartender</h2>
                <p>Name: { this.props.name }</p>
                <button className="btn btn-primary" onClick={ this.props.pourBeer }>Pour beer</button>
            </div>
        );
    }
}

Bartender.propTypes = { 
    name: React.PropTypes.string.isRequired,
    pourBeer: React.PropTypes.func.isRequired
 };

module.exports = Bartender;