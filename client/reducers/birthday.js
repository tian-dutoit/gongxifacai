import {SHOW_ZODIAC} from '../actions/birthday.js'

export const showZodiac = (state = '', action) => {
  switch (action.type) {
    case SHOW_ZODIAC:
      return action.updateAnimal
    default:
      return state
  }
}
