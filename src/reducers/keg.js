import {
  POUR_BEER
} from '../constants/ActionTypes'

 const keg = (state = 100, action) => {
  switch (action.type) {
    case POUR_BEER:
      return state - 5;
    default:
      return state;
  }
}

export default keg