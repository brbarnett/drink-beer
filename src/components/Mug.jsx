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
                <p>Beer: { this.props.beer }</p>
                <div>Remaining: { this.state.remaining }%</div>
            </div>
        );
    }
}

Mug.propTypes = { beer: React.PropTypes.string.isRequired };

module.exports = Mug; 