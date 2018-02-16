const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')
const router = express.Router()

router.use(bodyParser.json())

router.get('/', (req, res) => {
  return request
    .get('https://helloacm.com/api/fortune')
    .then(result => {
      const text = result.body
      res.json({text})
    })
})

module.exports = router
