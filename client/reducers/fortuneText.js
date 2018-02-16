import {RECIEVE_FORTUNE} from '../actions/recieveFortune.js'

export const fortuneText = (state = '', action) => {
  switch (action.type) {
    case RECIEVE_FORTUNE:
      return action.fortune
    default:
      return state
  }
}
