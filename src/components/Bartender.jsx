import React from 'react';

class Bartender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Bartender</h2>
                <button>Pour beer</button>
            </div>
        );
    }
}

module.exports = Bartender;