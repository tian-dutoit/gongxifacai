import { RECIEVE_FORTUNE } from '../actions/recieveFortune'

export const showFortune = (state = false, action) => {
  switch (action.type) {
    case RECIEVE_FORTUNE:
      return true
    default:
      return state
  }
}
