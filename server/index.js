import micro, { json } from 'micro'
import moment from 'moment'
import cors from 'micro-cors'
import { serverPort } from '../misc/config'

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

const handler = async (req, res) => {
  const body = await json(req)
  const { action } = body

  try {
    const result = actions[action](body)

    console.log(result, submissions)

    return result
  } catch (e) {
    console.log(e)
    return { error: true }
  }
}

const server = micro(cors()(handler))

// Start
server.listen(serverPort)
