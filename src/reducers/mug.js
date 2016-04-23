import {
  DRINK_BEER,
  POUR_BEER
} from '../constants/ActionTypes'

 const mug = (state = 0, action) => {
  switch (action.type) {
    case DRINK_BEER:
      return state - 20;
    case POUR_BEER:
      return 100;
    default:
      return state;
  }
}

export default mug