import React from 'react';

const Mug = ({ remaining, beer }) => (
    <div className="well">
        <h2>Mug</h2>
        <p>Beer: { beer }</p>
        <div>Remaining: { remaining }%</div>
    </div>
);

Mug.propTypes = { 
    beer: React.PropTypes.string.isRequired,
    remaining: React.PropTypes.number.isRequired
 };

export default Mug