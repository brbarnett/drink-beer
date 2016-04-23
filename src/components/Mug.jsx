import React from 'react';

class Mug extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <h2>Mug</h2>
                <div>[ amount remaining ]</div>
            </div>
        );
    }
}

module.exports = Mug;