import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="well">
                <h2>Customer</h2>
                <button className="btn btn-primary">Drink beer</button>
                <button className="btn btn-primary">Ask for more</button>
            </div>
        );
    }
}

module.exports = Customer;