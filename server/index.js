import api from './api'
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server
    .use(bodyParser.json())
    .use('/api', api)
    .get('*', (req, res) => {
      return handle(req, res)
    })
    .listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
})
