import React from 'react'

const KegEditor = ({ remaining, setKegRemaining }) => {
   return (
        <div className="well">
            <h2>Keg</h2>
            <div>Remaining: 
                <input type="number" rel="inputString" />
            </div>
            <button className="btn btn-primary" onClick={ setKegRemaining }>Update</button>
        </div>
    );
};

KegEditor.propTypes = {
    remaining: React.PropTypes.number.isRequired,
    setKegRemaining: React.PropTypes.func.isRequired
};

export default KegEditor