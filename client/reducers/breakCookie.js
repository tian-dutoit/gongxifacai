import {BREAK_COOKIE} from '../actions/breakCookie.js'

export const breakCookie = (state = false, action) => {
  switch (action.type) {
    case BREAK_COOKIE:
      return true
    default:
      return state
  }
}
