import {combineReducers} from 'redux'
import {breakCookie} from './breakCookie'
import {showCookie} from './showCookie'
import {fortuneText} from './fortuneText'
import {showFortune} from './showFortune'

export default combineReducers({
  breakCookie,
  showCookie,
  fortuneText,
  showFortune
})
