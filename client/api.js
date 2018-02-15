import request from 'superagent'


const compareUrl = 'http://localhost:3000/api/v1/zodiac'


  export function getZodiac (callback) {
    request
      .get(compareUrl)
      .end((err, res) => {
        callback(err, res.body)
      })
  }
  
  export function postBirthday (data, callback) {
    request
      .post(compareUrl)
      .set('Content-Type', 'application/json')
      .send(data)
      .then(callback)
  }
