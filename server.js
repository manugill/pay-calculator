import express from 'express'
import bodyParser from 'body-parser'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  express()
    .use(bodyParser.json())
    .post('/api', (req, res) => {
      const { body } = req
      console.log('to /api')
      console.log(body)
      return 'test'
    })
    .get('*', (req, res) => {
      return handle(req, res)
    })
    .listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
})
