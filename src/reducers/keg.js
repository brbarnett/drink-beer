import { 
    POUR_BEER, 
    FETCH_KEG_REMAINING_REQUEST, 
    FETCH_KEG_REMAINING_SUCCESS, 
    FETCH_KEG_REMAINING_FAILURE 
} from '../constants/ActionTypes'

 const keg = (state = { isFetching: false, remaining: 0 }, action) => {
  switch (action.type) {
      case FETCH_KEG_REMAINING_REQUEST:
        return Object.assign({}, state, {
           isFetching: true 
        });
    case FETCH_KEG_REMAINING_SUCCESS:
        return Object.assign({}, state, {
           isFetching: false,
           remaining: action.remaining 
        });
    case FETCH_KEG_REMAINING_FAILURE: 
        return Object.assign({}, state, {
           isFetching: false
        });
    case POUR_BEER:
      return Object.assign({}, state, {
          remaining: state.remaining - 5
      });
    default:
      return state;
  }
}

export default keg