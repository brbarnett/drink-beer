import React from 'react';

import Customer from '../components/Customer'

class CustomerContainer extends React.Component {
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
            <Customer name="John" askForMore={ this.askForMore } drinkBeer={ this.drinkBeer } />
        );
    }
}

module.exports = CustomerContainer;