import React from 'react';
import ReactDOM from 'react-dom';

import Pub from './components/Pub.jsx';

let pubs = (
    <div>
        <Pub name="The Drunken Duck" />
        <Pub name="The Duke Of Argyles" />
    </div>
);

ReactDOM.render(pubs, document.getElementById('app')); 