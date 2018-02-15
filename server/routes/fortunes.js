const express = require('express')
const request = require('superagent')
const bodyParser = require('body-parser')

const router = express.Router()
const zod = require('../zodiac')

router.use(bodyParser.json())

// router.get('/', (req, res) => {
//   request
//     .get
// })

const zodiac = {
  zodiac: ['rooster', 'pig']
}

router.post('/', (req, res) => {
  const birthyear = req.body.birthyear
  const animal = zod.getZodiac(birthyear)
  console.log(zodiac)
  res.json({animal})
})

module.exports = router
