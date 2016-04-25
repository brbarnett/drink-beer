import React from 'react';
import { connect } from 'react-redux'

import Customer from '../components/Customer'
import { drinkBeer } from '../actions'

const mapStateToProps = (state) => {
  return { 
      beerRemainingInMug: state.mug.remaining,
      name: 'John'
    };
};

const mapDispatchToProps = (dispatch) => {
  return { 
      drinkBeer: () => {
          dispatch(drinkBeer())
      } 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Customer) 