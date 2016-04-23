import * as types from '../constants/ActionTypes'

export function askForMore() {
  return { type: types.ASK_FOR_MORE }
}

export function drinkBeer() {
  return { type: types.DRINK_BEER }
}

export function pourBeer() {
  return { type: types.POUR_BEER }
}