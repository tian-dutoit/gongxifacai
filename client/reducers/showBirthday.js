import { SHOW_ZODIAC } from '../actions/birthday'


export const showBirthday = (state = true, action) => {
  switch (action.type) {
    case SHOW_ZODIAC:
      return false
   

    default:
      return state
  }
}
