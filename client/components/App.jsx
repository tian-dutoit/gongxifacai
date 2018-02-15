import React from 'react'
import {connect} from 'react-redux'

import Cookie from './Cookie'
import Birthday from './Birthday'
import {showCookie} from '../actions/app'

const App = (props) => {
  return (
    <div className='app'>
      <Birthday/>
      {props.showCookie && <Cookie />}
      <button onClick = {() => props.dispatch(showCookie())} > press to show cookie </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    showCookie: state.showCookie
  }
}

export default connect(mapStateToProps)(App)
