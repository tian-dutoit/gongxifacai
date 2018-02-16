import { SHOW_ZODIAC } from '../actions/birthday'
import { HIDE_HOME } from '../actions/hideHome'

export const showBirthday = (state = false, action) => {
  switch (action.type) {
    case SHOW_ZODIAC:
      return false
    case HIDE_HOME:
      return true
    default:
      return state
  }
}
