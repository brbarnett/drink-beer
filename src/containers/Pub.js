import React, { Component } from 'react'

import BartenderContainer from './BartenderContainer'
import CustomerContainer from './CustomerContainer'
import KegContainer from './KegContainer'
import MugContainer from './MugContainer'
import { fetchKegRemaining } from '../actions'

class Pub extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = context.store;
  }

  componentWillMount() {
    this.store.dispatch(fetchKegRemaining());
  }

  render() {
    return (
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
  }
}

Pub.contextTypes = {
  store: React.PropTypes.object
}

export default Pub 