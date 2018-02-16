import request from 'superagent'

import {recieveFortune} from './recieveFortune'

export const SHOW_FORTUNE = 'SHOW_FORTUNE'

export const getFortune = () => {
  return (dispatch) => {
    return request
      .get('http://localhost:3000/api/v1/fortunesApi')
      .then(res => {
        dispatch(recieveFortune(res.body.text))
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
