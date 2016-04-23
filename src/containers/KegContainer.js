import React from 'react';

import Keg from '../components/Keg'

class KegContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Keg remaining={100} />
        );
    }
}

module.exports = KegContainer;