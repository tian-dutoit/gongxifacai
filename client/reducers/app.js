import {SHOW_COOKIE} from '../actions/app.js'

export const showCookie = (state = false, action) => {
  switch (action.type) {
    case SHOW_COOKIE:
      return true
    default:
      return state
  }
}
