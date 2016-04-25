import { POUR_BEER } from '../constants/ActionTypes'

 const keg = (state = { remaining: 100 }, action) => {
  switch (action.type) {
    case POUR_BEER:
      return Object.assign({}, state, {
          remaining: state.remaining - 5
      });
    default:
      return state;
  }
}

export default keg