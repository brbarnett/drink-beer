import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>Customer</h2>
                <button>Drink beer</button>
                <button>Ask for more</button>
            </div>
        );
    }
}

module.exports = Customer;