import React from 'react';
import ReactDOM from 'react-dom';

import Pub from './components/Pub.jsx';

let theDuck = <Pub name="The Drunken Duck" />
let theDuke = <Pub name="The Duke Of Argyles" />

ReactDOM.render(<div>{theDuck}{theDuke}</div>, document.getElementById('app')); 