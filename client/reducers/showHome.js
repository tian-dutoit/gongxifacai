import {HIDE_HOME} from '../actions/hideHome'

export const showHome = (state = true, action) => {
  switch (action.type) {
    case HIDE_HOME:
      return false
    default:
      return state
  }
}
