import React from 'react'
import {connect} from 'react-redux'

import Cookie from './Cookie'
import Birthday from './Birthday'
import {showCookie} from '../actions/showCookie'

const App = (props) => {
  return (
    <div className='app'>
      {props.showBirthday && <Birthday />}
      {props.showCookie && <Cookie />}
      </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showCookie: state.showCookie,
    showBirthday: state.showBirthday
  }
}

export default connect(mapStateToProps)(App)
