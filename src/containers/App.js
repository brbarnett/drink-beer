import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import * as Actions from '../actions'

import BartenderContainer from './BartenderContainer'
import CustomerContainer from './CustomerContainer'
import KegContainer from './KegContainer'
import MugContainer from './MugContainer'

const App = () => (
  <div className="container">
    <h1>The Drunk Duck</h1>
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

// function mapStateToProps(state) {
//   return {
//     keg: state.keg,
//     mug: state.mug
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(Actions, dispatch)
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App