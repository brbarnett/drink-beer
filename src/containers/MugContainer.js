import React from 'react';
import { connect } from 'react-redux'

import Mug from '../components/Mug'

const mapStateToProps = (state) => {
  return { 
      beer: 'Porter',
      remaining: state.mug.remaining
    };
};

export default connect(mapStateToProps)(Mug) 