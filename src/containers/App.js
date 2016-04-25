import React, { Component } from 'react'

import BartenderContainer from './BartenderContainer'
import CustomerContainer from './CustomerContainer'
import KegContainer from './KegContainer'
import MugContainer from './MugContainer'

const App = () => (
  <div className="container">
    <h1>The Drunken Duck</h1>
    <div className="col-xs-12 col-md-3">
      <CustomerContainer />
     </div>
    <div className="col-xs-12 col-md-3">
      <MugContainer />
    </div>
    <div className="col-xs-12 col-md-3">
      <BartenderContainer />
    </div>
    <div className="col-xs-12 col-md-3">
      <KegContainer />
    </div>
  </div>
);

export default App