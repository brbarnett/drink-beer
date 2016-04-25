import { DRINK_BEER, POUR_BEER } from '../constants/ActionTypes'

 const mug = (state = { remaining: 0 }, action) => {
  switch (action.type) {
    case DRINK_BEER:
      return Object.assign({}, state, {
          remaining: state.remaining - 20
      })
    case POUR_BEER:
      return Object.assign({}, state, {
          remaining: 100
      })
    default:
      return state;
  }
}

export default mug