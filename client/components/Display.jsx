import React from 'react'
import { connect } from 'react-redux'

const Display = (props) => (
  <div className='display'>
    <div class='header'>
      <h1>Your Fortune</h1>
    </div>
    <div class='speechbubble'>
      <img src="/images/talk.png" alt="" />
      <p>{props.fortuneText}</p>
    </div>
    <div class='animal'>
      <img src={`../../images/${props.zodiac}.png`} />
    </div>

  </div>
)

const mapStateToProps = (state) => {
  return {
    zodiac: state.showZodiac,
    fortuneText: state.fortuneText
  }
}

export default connect(mapStateToProps)(Display)
