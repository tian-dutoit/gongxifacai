import React from 'react'
import {connect} from 'react-redux'
import {cookieBreak} from '../actions/cookie'

const Cookie = (props) => {
  return (
    <div className='cookie'>
      {props.cookieBreak ? <img src='/images/cookie-3.png'/> : <img onClick={() => props.dispatch(cookieBreak())}src='/images/cookie-1.png'/>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cookieBreak: state.breakCookie
  }
}

export default connect(mapStateToProps)(Cookie)
