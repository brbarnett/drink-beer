import React from 'react';

class Keg extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Keg</h2>
                <div>[ Amount remaining ]</div>
            </div>
        );
    }
}

module.exports = Keg;