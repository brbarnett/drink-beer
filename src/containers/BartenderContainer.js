import React from 'react';
import { connect } from 'react-redux'

import Bartender from '../components/Bartender'
import { pourBeer } from '../actions'

const mapStateToProps = (state) => {
  return { 
      beerRemainingInMug: state.mug.remaining, 
      beerRemainingInKeg: state.keg.remaining,
      name: 'Jack'
    };
};

const mapDispatchToProps = (dispatch) => {
  return { 
      pourBeer: () => {
          dispatch(pourBeer())
      } 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Bartender) 