import React from 'react'
import {connect} from 'react-redux'

const Display = (props) => (
  <div className='display'>
    <h1>Your Fortune</h1>
    <img src={`../../images/${props.zodiac}.png`}/>
    <p>{props.fortuneText}</p>
  </div>
)

const mapStateToProps = (state) => {
  return {
    zodiac: state.showZodiac,
    fortuneText: state.fortuneText
  }
}

export default connect(mapStateToProps)(Display)
