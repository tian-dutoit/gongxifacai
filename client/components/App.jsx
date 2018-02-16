import React from 'react'
import {connect} from 'react-redux'

import Cookie from './Cookie'
import Birthday from './Birthday'
import Display from './Display'
import Home from './Home'

const App = (props) => {
  return (
    <div className='app'>
      {props.showBirthday && <Birthday />}
      {props.showCookie && <Cookie />}
      {props.showDisplay && <Display />}
      {props.showHome && <Home />}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showCookie: state.showCookie,
    showBirthday: state.showBirthday,
    showDisplay: state.showDisplay,
    showHome: state.showHome
  }
}

export default connect(mapStateToProps)(App)
