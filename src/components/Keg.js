import React from 'react';

const Keg = ({ remaining }) => (
    <div className="well">
        <h2>Keg</h2>
        <div>Remaining: { remaining }%</div>
    </div>
);

Keg.propTypes = {
    remaining: React.PropTypes.number.isRequired
};

export default Keg