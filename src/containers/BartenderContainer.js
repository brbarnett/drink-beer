import React from 'react';

import Bartender from '../components/Bartender'
import { pourBeer } from '../actions'

class BartenderContainer extends React.Component {
    constructor(props, context) {
        super(props);
        
        this.handlePourBeer = this.handlePourBeer.bind(this);
        
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
    
    handlePourBeer() {
        this.store.dispatch(pourBeer());
    }

    render() {
        return (
            <Bartender name="Jack" pourBeer={ this.handlePourBeer } />
        );
    }
}

BartenderContainer.contextTypes = {
  store: React.PropTypes.object  
};

module.exports = BartenderContainer;