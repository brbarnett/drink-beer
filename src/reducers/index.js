import { combineReducers } from 'redux'

import keg from './keg'
import mug from './mug'
export { keg, mug }

const drinkBeerApp = combineReducers({
  keg,
  mug
});


export default drinkBeerApp