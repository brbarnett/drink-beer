import React from 'react';

class Bartender extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="well">
                <h2>Bartender</h2>
                <button className="btn btn-primary">Pour beer</button>
            </div>
        );
    }
}

module.exports = Bartender;