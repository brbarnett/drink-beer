import React from 'react';
import { connect } from 'react-redux'

import Keg from '../components/Keg'

const mapStateToProps = (state) => {
  return { 
      loading: state.keg.isFetching,
      remaining: state.keg.remaining
    };
};

export default connect(mapStateToProps)(Keg) 