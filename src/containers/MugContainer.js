import React from 'react';

import Mug from '../components/Mug'

class MugContainer extends React.Component {
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
            <Mug beer="Porter" remaining={ this.state.mug.remaining } />
        );
    }
}

MugContainer.contextTypes = {
  store: React.PropTypes.object  
};

module.exports = MugContainer;