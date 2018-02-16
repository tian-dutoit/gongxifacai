const path = require('path')
const express = require('express')

const zodiac = require('./routes/zodiac')
const fortunesAPI = require('./routes/fortunesAPI')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/zodiac', zodiac)
server.use('/api/v1/fortunesApi', fortunesAPI)

module.exports = server
