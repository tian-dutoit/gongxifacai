import {combineReducers} from 'redux'
import {breakCookie} from './cookie'
import {showCookie} from './app'

export default combineReducers({
  breakCookie,
  showCookie
})
