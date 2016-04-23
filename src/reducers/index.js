import { combineReducers } from 'redux'

import keg from './keg'
import mug from './mug'

const drinkBeerApp = combineReducers({
  keg,
  mug
})

export default drinkBeerApp