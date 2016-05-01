import React from 'react'

const KegEditor = ({ remaining, setKegRemaining }) => {
   return (
        <div className="well">
            <h2>Keg</h2>
            <div>Remaining: <input /></div>
            <button className="btn btn-primary" onClick={ setKegRemaining }>Update</button>
        </div>
    );
};

KegEditor.propTypes = {
    remaining: React.PropTypes.number.isRequired
};

export default KegEditor