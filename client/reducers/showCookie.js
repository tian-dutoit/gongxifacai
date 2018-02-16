import {SHOW_COOKIE} from '../actions/showCookie.js'
import { RECIEVE_FORTUNE } from '../actions/recieveFortune'
import { SHOW_ZODIAC } from '../actions/birthday'


export const showCookie = (state = false, action) => {
  switch (action.type) {
    case SHOW_ZODIAC:
      return true
    case RECIEVE_FORTUNE:
      return false

    default:
      return state
  }
}
