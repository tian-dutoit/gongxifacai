const path = require('path')
const express = require('express')

const fortunes = require('./routes/fortunes')
const server = express()

server.use(express.static(path.join(__dirname, '../public')))

// server.use('/api/v1/fortunes', fortunes)
server.use('/api/v1/zodiac', fortunes)

module.exports = server
