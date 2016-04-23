import React from 'react';

class Bartender extends React.Component {
    constructor(props) {
        super(props);
        
        this.pourBeer = this.pourBeer.bind(this);
    }
    
    componentDidMount(){
        
    }
    
    componentWillUnmount(){
        
    }
    
    pourBeer() {
        console.log('bartender pours the customer more beer');
    }

    render() {
        return (
            <div className="well">
                <h2>Bartender</h2>
                <p>Name: { this.props.name }</p>
                <button className="btn btn-primary" onClick={ this.pourBeer }>Pour beer</button>
            </div>
        );
    }
}

Bartender.propTypes = { name: React.PropTypes.string.isRequired };

module.exports = Bartender;