import React from 'react';

class Bartender extends React.Component {
    render() {
        const pourButton = this.props.beerRemainingInKeg > 0 && this.props.beerRemainingInMug === 0 
            ? <button className="btn btn-primary" onClick={ this.props.pourBeer }>Pour beer</button>
            : null;
            
        return (
            <div className="well">
                <h2>Bartender</h2>
                <p>Name: { this.props.name }</p>
                {pourButton}
            </div>
        );
    }
}

Bartender.propTypes = { 
    beerRemainingInKeg: React.PropTypes.number.isRequired,
    beerRemainingInMug: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    pourBeer: React.PropTypes.func.isRequired
 };

module.exports = Bartender;