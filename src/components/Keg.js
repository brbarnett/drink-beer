import React from 'react';

const Keg = ({ loading, remaining }) => {
    const remainingText = loading
        ? <span>loading...</span>
        : <span>{ remaining }%</span>;
        
   return (
        <div className="well">
            <h2>Keg</h2>
            <div>Remaining: { remainingText }</div>
        </div>
    );
};

Keg.propTypes = {
    loading: React.PropTypes.bool.isRequired,
    remaining: React.PropTypes.number.isRequired
};

export default Keg