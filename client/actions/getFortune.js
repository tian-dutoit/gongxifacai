import request from 'superagent'

import {recieveFortune} from './recieveFortune'

export const SHOW_FORTUNE = 'SHOW_FORTUNE'

export const getFortune = () => {
  return (dispatch) => {
    return request
      .get('https://helloacm.com/api/fortune')
      .then(res => {
        dispatch(recieveFortune(res.body))
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
