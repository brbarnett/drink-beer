import React, { Component } from 'react'

import Header from '../components/Header'
import BartenderContainer from './BartenderContainer'
import CustomerContainer from './CustomerContainer'
import KegContainer from './KegContainer'
import MugContainer from './MugContainer'
import { fetchKegRemaining } from '../actions'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = context.store;
  }

  componentWillMount() {
    this.store.dispatch(fetchKegRemaining());
  }

  render() {
    return (
      <div>
        <Header />
        { this.props.children }
      </div>
    );
  }
}

App.contextTypes = {
  store: React.PropTypes.object
}

export default App