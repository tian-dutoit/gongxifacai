import {combineReducers} from 'redux'

import {showZodiac} from './birthday'
import {showCookie} from './showCookie'
import {fortuneText} from './fortuneText'
import {showFortune} from './showFortune'
import {breakCookie} from './breakCookie'

export default combineReducers({
  breakCookie,
  showCookie,
  fortuneText,
  showFortune,
  showZodiac
})
