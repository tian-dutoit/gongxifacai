import {SHOW_COOKIE} from '../actions/showCookie.js'
import { RECIEVE_FORTUNE } from '../actions/recieveFortune'

export const showCookie = (state = false, action) => {
  switch (action.type) {
    case SHOW_COOKIE:
      return true
    case RECIEVE_FORTUNE:
      return false
    default:
      return state
  }
}
