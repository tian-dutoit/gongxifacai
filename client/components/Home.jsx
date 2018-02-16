import React from 'react'
import {connect} from 'react-redux'

import {hideHome} from '../actions/hideHome'

const Home = (props) => {
  return (
    <div className='home'>
      <h1 className='mainHeader'>GONG XI FA CAI</h1>
      <h1 className='mainHeader'>恭禧發財</h1>
      <img src='../../images/happy.png' className ='HNYimg'/>
      <button className='HNYbutton' onClick={() => props.dispatch(hideHome())}> FIND YOUR NEW YEARS FORTUNE </button>
    </div>
  )
}

export default connect()(Home)
