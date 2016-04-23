import React from 'react';

class Keg extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { remaining: 100 };
    }

    render() {
        return (
            <div className="well">
                <h2>Keg</h2>
                <div>Remaining: {this.state.remaining}%</div>
            </div>
        );
    }
}

module.exports = Keg;