import React from 'react'
import {connect} from 'react-redux'

import Cookie from './Cookie'
import Birthday from './Birthday'
import Display from './Display'

const App = (props) => {
  return (
    <div className='app'>
      {props.showBirthday && <Birthday />}
      {props.showCookie && <Cookie />}
      {props.showDisplay && <Display />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showCookie: state.showCookie,
    showBirthday: state.showBirthday,
    showDisplay: state.showDisplay
  }
}

export default connect(mapStateToProps)(App)
