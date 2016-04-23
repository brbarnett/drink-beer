import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div className="well">
                <h2>Customer</h2>
                <p>Name: { this.props.name } </p>
                <button className="btn btn-primary" onClick={ this.props.drinkBeer }>Drink beer</button>
                <button className="btn btn-primary" onClick={ this.props.askForMore }>Ask for more</button>
            </div>
        );
    }
}

Customer.propTypes = {
    askForMore: React.PropTypes.func.isRequired,
    drinkBeer: React.PropTypes.func.isRequired, 
    name: React.PropTypes.string.isRequired
 };

module.exports = Customer;