const express = require('express')
const cors = require('cors')
const isDev = require('isdev')
require('dotenv').config()

const { createServer } = require('./createServer')
const app = express()

app.use(cors())

const server = createServer(app)

server.listen(isDev ? 3001 : process.env.SERVER_PORT, () => {
  console.log('Server is running')
})
