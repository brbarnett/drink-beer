import React from 'react';
import { connect } from 'react-redux'

import Keg from '../components/Keg'

const mapStateToProps = (state) => {
  return { 
      remaining: state.keg.remaining
    };
};

export default connect(mapStateToProps)(Keg) 