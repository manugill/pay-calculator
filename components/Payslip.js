import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import moment from 'moment'
import Button from './Button'
import PayTable from './PayTable'
// import fields from '../misc/formFields'
import calculatePay from '../misc/calculatePay'

const enhance = compose(
  withState('payed', 'payedSet', false),
  withState('payedLoading', 'payedLoadingSet', false),
  withHandlers({
    onPay: (props) => (e) => {
      e.preventDefault()
      props.payedSet(() => true)
      props.payedLoadingSet(() => true)
    }
  })
)

export default enhance((props) => {
  const annualIncome = parseFloat(props.annualIncome)
  const superRate = parseFloat(props.superRate)
  const date = moment()

  const tableProps = {
    date,
    ...calculatePay(annualIncome, superRate)
  }
  console.log(tableProps)

  return (
    <div>
      <PayTable {...tableProps} />

      <Button onClick={props.onPay}>Pay</Button>
    </div>
  )
})
