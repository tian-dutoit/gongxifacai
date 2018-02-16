import React from 'react'
import {connect} from 'react-redux'
import {cookieBreak} from '../actions/breakCookie'
import {getFortune} from '../actions/getFortune'

const Cookie = (props) => {
  return (
    <div className='cookie'>
      {props.cookieBreak
        ? <img onClick={() => props.dispatch(getFortune())} src='/images/cookie-3.png'/>
        : <img onClick={() => props.dispatch(cookieBreak())}src='/images/cookie-1.png'/>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cookieBreak: state.breakCookie
  }
}

export default connect(mapStateToProps)(Cookie)
