import * as types from '../constants/ActionTypes'

export const drinkBeer = () => {
    return { type: types.DRINK_BEER };
}

export const fetchKegRemaining = () => {
    const requestKegRemaining = () => {
        return { type: types.FETCH_KEG_REMAINING_REQUEST };
    }

    const receiveKegRemaining = (remaining) => {
        return { 
            type: types.FETCH_KEG_REMAINING_SUCCESS,
            remaining: remaining  
        };
    }

    return (dispatch) => {
        dispatch(requestKegRemaining());
    
        setTimeout(() => {
        dispatch(receiveKegRemaining(100));
        }, 500);
    };
}

export const pourBeer = () => {
    return { type: types.POUR_BEER };
}

