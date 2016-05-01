import React from 'react';
import { connect } from 'react-redux'

import KegEditor from '../components/KegEditor'

const mapStateToProps = (state) => {
  return { 
      remaining: state.keg.remaining
    };
};

const mapDispatchToProps = (dispatch) => {
  return { 
      setKegRemaining: () => {
          //dispatch(pourBeer())
          console.log('update');
      } 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(KegEditor) 