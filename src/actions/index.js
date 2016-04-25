import * as types from '../constants/ActionTypes'

export const drinkBeer = () => {
    return { type: types.DRINK_BEER };
}

export const pourBeer = () => {
    return { type: types.POUR_BEER };
}