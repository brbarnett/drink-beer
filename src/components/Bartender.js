import React from 'react';

const Bartender = ({ beerRemainingInKeg, beerRemainingInMug, name, pourBeer }) => {
    const pourButton = beerRemainingInKeg > 0 && beerRemainingInMug === 0 
            ? <button className="btn btn-primary" onClick={ pourBeer }>Pour beer</button>
            : null;
            
    return (
        <div className="well">
            <h2>Bartender</h2>
            <p>Name: { name }</p>
            { pourButton }
        </div>
    );
};

Bartender.propTypes = { 
    beerRemainingInKeg: React.PropTypes.number.isRequired,
    beerRemainingInMug: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    pourBeer: React.PropTypes.func.isRequired
 };

export default Bartender 