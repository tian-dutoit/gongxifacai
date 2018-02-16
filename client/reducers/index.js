import {combineReducers} from 'redux'
import {breakCookie} from './cookie'
import {showCookie} from './app'
import {showZodiac} from './birthday'


export default combineReducers({
  breakCookie,
  showCookie,
  showZodiac
})
