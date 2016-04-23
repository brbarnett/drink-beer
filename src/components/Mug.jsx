import React from 'react';

class Mug extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = { remaining: 0 };
    }
    
    render() {
        return (
            <div className="well">
                <h2>Mug</h2>
                <div>Remaining: {this.state.remaining}%</div>
            </div>
        );
    }
}

module.exports = Mug;