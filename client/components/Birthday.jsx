import React from 'react'
import {postBirthday} from '../api'
import {connect} from 'react-redux'
import {showZodiac} from '../actions/birthday'

class Birthday extends React.Component {
  constructor(props) {
    super (props)
    this.state = {
      birthyear: '',
      zodiac: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.updateZodiac = this.updateZodiac.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleClick () {
    postBirthday(this.state, this.updateZodiac)
  }

  updateZodiac (zodiacAnimal) {
    const data = zodiacAnimal.body.animal
    this.props.dispatch(showZodiac(data))
    // this.setState({
    //   zodiac: zodiacAnimal.body.animal
    // })
}


  render () {
    return (
      <div className='birthday'>
        <input type="text" name="birthyear" placeholder="enter your birth year" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Find my zodiac</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    updateAnimal: state.animal
  }
}

export default connect(mapStateToProps)(Birthday)
