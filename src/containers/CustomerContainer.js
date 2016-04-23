import React from 'react';

import Customer from '../components/Customer'
import { askForMore, drinkBeer } from '../actions'

class CustomerContainer extends React.Component {
    constructor(props, context) {
        super(props);
        
        this.askForMoreHandler = this.askForMoreHandler.bind(this);
        this.drinkBeerHandler = this.drinkBeerHandler.bind(this);
        
        this.store = context.store;
        this.state = this.store.getState();
    }
    
    componentWillMount() {
        this.unsubscribe = this.store.subscribe(() => {
            this.setState(this.store.getState());
        });
    }
    
    componentWillUnmount() {
        this.unsubscribe();
    }
    
    askForMoreHandler(){
        this.store.dispatch(askForMore());
    }
    
    drinkBeerHandler() {
        this.store.dispatch(drinkBeer());
    }
    
    render() {
        return (
            <Customer name="John" beerRemainingInMug={ this.state.mug.remaining } askForMore={ this.askForMoreHandler } drinkBeer={ this.drinkBeerHandler } />
        );
    }
}

CustomerContainer.contextTypes = {
  store: React.PropTypes.object  
};

module.exports = CustomerContainer;