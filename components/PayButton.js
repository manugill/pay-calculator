import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import { componentDidMount } from 'react-lifecycle-hoc'
import Button from './Button'
import request from '../misc/request'

const enhance = compose(
  withState('payed', 'payedSet', 'LOADING'),
  componentDidMount(async ({ props }) => {
    const { firstName, lastName, date } = props
    const { alreadyPayed } = await request('check', {
      firstName,
      lastName,
      date
    })
    props.payedSet(() => (alreadyPayed ? 'ALREADY' : 'NO'))
  }),
  withHandlers({
    onPay: (props) => async (e) => {
      const { firstName, lastName, date, annualIncome, superRate } = props
      e.preventDefault()
      props.payedSet(() => 'LOADING')

      const { payed } = await request('pay', {
        firstName,
        lastName,
        date,
        annualIncome,
        superRate
      })
      props.payedSet(() => (payed ? 'YES' : 'NO'))
    }
  })
)

export default enhance(({ payed, onPay }) => {
  return payed === 'NO'
    ? <Button onClick={onPay}>Pay</Button>
    : <Button disabled>
      {payed === 'LOADING' ? 'Loading...' : 'Done!'}
    </Button>
})
