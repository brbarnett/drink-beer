import React from 'react';

const Customer = ({ beerRemainingInMug, drinkBeer, name }) => {
    const drinkButton = beerRemainingInMug > 0 
        ? <button className="btn btn-primary" onClick={ drinkBeer }>Drink beer</button>
        : null;
        
    return (
        <div className="well">
            <h2>Customer</h2>
            <p>Name: { name } </p>
            { drinkButton }
        </div>
    );
}

Customer.propTypes = {
    beerRemainingInMug: React.PropTypes.number.isRequired,
    drinkBeer: React.PropTypes.func.isRequired, 
    name: React.PropTypes.string.isRequired
 };

export default Customer;