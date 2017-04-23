import React from 'react'
import Button from './Button'
import Input from './Input'
import fields from '../misc/formFields'

const Inputs = (props) =>
  fields.map(({ name, attrs }, i) => (
    <Input
      {...{
        ...attrs,
        key: i,
        value: props[name],
        onChange: ({ target: { value } }) => {
          props[`${name}Set`](() => value)
        }
      }}
    />
  ))

export default (props) => (
  <form onSubmit={props.onSubmit}>
    {Inputs(props)}

    <Button type='submit'>Generate Payslip</Button>
  </form>
)
