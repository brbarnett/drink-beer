import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        
        this.askForMore = this.askForMore.bind(this);
        this.drinkBeer = this.drinkBeer.bind(this);
    }

    askForMore(){
        console.log('customer requests more beer');
    }
    
    drinkBeer() {
        console.log('customer drinks his or her beer');
    }

    render() {
        return (
            <div className="well">
                <h2>Customer</h2>
                <p>Name: { this.props.name } </p>
                <button className="btn btn-primary" onClick={ this.drinkBeer }>Drink beer</button>
                <button className="btn btn-primary" onClick={ this.askForMore }>Ask for more</button>
            </div>
        );
    }
}

Customer.propTypes = { name: React.PropTypes.string.isRequired };

module.exports = Customer;