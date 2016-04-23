import React from 'react';
import Keg from './Keg.jsx';
import Mug from './Mug.jsx';

class Bar extends React.Component {
    constructor(props) {
        super(props);
        
        // this.handleClick = this.handleClick.bind(this);
    }
    
    // handleClick() {
    //     console.log(this); // React Component instance
    // }

    render() {
        return (
             <div>
                <Keg />
                <Mug />
             </div>
        );
    }
}
// Bar.defaultProps = { text: 'hello' };
// Bar.propTypes = { text: React.PropTypes.string.isRequired };

module.exports = Bar;