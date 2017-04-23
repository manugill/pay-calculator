import React from 'react'
import PayButton from './PayButton'
import moment from 'moment'
import PayTable from './PayTable'
import calculatePay from '../misc/calculatePay'

export default (props) => {
  const annualIncome = parseFloat(props.annualIncome)
  const superRate = parseFloat(props.superRate)
  const now = moment()

  const tableProps = {
    now,
    ...calculatePay(annualIncome, superRate)
  }
  const buttonProps = {
    ...props,
    date: now.format()
  }

  return (
    <div>
      <PayTable {...tableProps} />
      <PayButton {...buttonProps} />
    </div>
  )
}
