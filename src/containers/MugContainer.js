import React from 'react';

import Mug from '../components/Mug'

class MugContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Mug beer="Porter" remaining={0} />
        );
    }
}

module.exports = MugContainer;