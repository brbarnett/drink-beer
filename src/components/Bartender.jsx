import React from 'react';

class Bartender extends React.Component {
    constructor(props) {
        super(props);
        
        this.pourBeer = this.pourBeer.bind(this);
    }
    
    pourBeer() {
        console.log('bartender pours the customer more beer');
    }

    render() {
        return (
            <div className="well">
                <h2>Bartender</h2>
                <button className="btn btn-primary" onClick={ this.pourBeer }>Pour beer</button>
            </div>
        );
    }
}

module.exports = Bartender;