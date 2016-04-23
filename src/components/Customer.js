import React from 'react';

class Customer extends React.Component {
    render() {
        const drinkButton = this.props.beerRemainingInMug > 0 
            ? <button className="btn btn-primary" onClick={ this.props.drinkBeer }>Drink beer</button>
            : null;
        
        return (
            <div className="well">
                <h2>Customer</h2>
                <p>Name: { this.props.name } </p>
                {drinkButton}
                {/*<button className="btn btn-primary" onClick={ this.props.askForMore }>Ask for more</button>*/}
            </div>
        );
    }
}

Customer.propTypes = {
    askForMore: React.PropTypes.func.isRequired,
    beerRemainingInMug: React.PropTypes.number.isRequired,
    drinkBeer: React.PropTypes.func.isRequired, 
    name: React.PropTypes.string.isRequired
 };

module.exports = Customer;