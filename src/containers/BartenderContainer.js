import React from 'react';

import Bartender from '../components/Bartender'

class BartenderContainer extends React.Component {
    constructor(props) {
        super(props);
        
        this.pourBeer = this.pourBeer.bind(this);
    }
    
    pourBeer() {
        console.log('bartender pours the customer more beer');
    }

    render() {
        return (
            <Bartender name="Jack" pourBeer={ this.pourBeer } />
        );
    }
}

module.exports = BartenderContainer;