import express from 'express'
import moment from 'moment'

const router = express.Router()

// We're storing these in the server runtime
const submissions = []
const keys = ['firstName', 'lastName', 'date', 'annualIncome', 'superRate']

const isUnique = ({ firstName, lastName, date }) => {
  const month = moment(date).format('M')
  return !submissions.some(
    (s) =>
      firstName === s.firstName &&
      lastName === s.lastName &&
      month === moment(s.date).format('M')
  )
}

const actions = {
  pay: (body) => {
    const valid = keys.every((k) => body[k] !== undefined)
    const unique = isUnique(body)
    if (valid && unique) {
      // Keep only the required keys
      const data = Object.assign(
        ...Object.entries(body)
          .filter(([k, v]) => keys.some((k2) => k === k2))
          .map(([k, v]) => ({
            [k]: v
          }))
      )

      submissions.push(data)
      return { payed: true }
    }
    return { payed: false }
  },
  check: (body) => ({
    alreadyPayed: !isUnique(body)
  })
}

Object.entries(actions).forEach(([name, action]) => {
  router.post(`/${name}`, (req, res) => {
    console.log('to /api')
    const { body } = req

    console.log(req)

    try {
      const result = action(body)

      console.log(result, submissions)

      res.json(result)
    } catch (e) {
      console.log(e)
      res.json({ error: true })
    }
  })
})

export default router
