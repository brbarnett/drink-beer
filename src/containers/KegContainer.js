import React from 'react';

import Keg from '../components/Keg'

class KegContainer extends React.Component {
    constructor(props, context) {
        super(props);
        
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
    
    render() {
        return (
            <Keg remaining={ this.state.keg.remaining } />
        );
    }
}

KegContainer.contextTypes = {
  store: React.PropTypes.object  
};

module.exports = KegContainer;