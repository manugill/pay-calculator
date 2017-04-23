import 'isomorphic-fetch'
import React from 'react'
import { compose, withHandlers, withState } from 'recompose'
import Title from './Title'
import Name from './Name'
import Form from './Form'
import Payslip from './Payslip'
import Back from './Back'
import fields from '../misc/formFields'
// import calculatePay from '../misc/calculatePay'

// From formFields, generate the HOCs to manage state and submission
const enhance = compose(
  ...fields.map(({ name, value }) =>
    withState(name, `${name}Set`, value || '')
  ),
  withState('showPayslip', 'showPayslipSet', false),
  withHandlers({
    onSubmit: (props) => (e) => {
      e.preventDefault()
      props.showPayslipSet(() => true)
    },
    onBack: (props) => (e) => {
      e.preventDefault()
      props.showPayslipSet(() => false)
    }
  })
)

export default enhance(
  (props) =>
    (!props.showPayslip
      ? <div>
        <Title>Employee Info</Title>

        <Form {...props} />
      </div>
      : <div>
        <Back onClick={props.onBack}>‹ Back</Back>

        <Title>Payslip</Title>
        <Name>{props.firstName} {props.lastName}</Name>

        <Payslip {...props} />
      </div>)
)
