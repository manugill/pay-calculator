import React from 'react'
import Table from './Table'

const format = (n) => {
  return '$' + Number(n.toFixed(2)).toLocaleString()
}

export default (props) => {
  const rows = [
    {
      title: 'Pay Date',
      value: props.date.format('D MMMM YYYY')
    },
    {
      title: 'Pay Frequency',
      value: 'Monthly'
    },
    {
      title: 'Annual Income',
      value: format(props.annualIncome)
    },
    {
      title: 'Gross Income',
      value: format(props.grossIncome)
    },
    {
      title: 'Income Tax',
      value: format(props.incomeTax)
    },
    {
      title: 'Net Income',
      value: format(props.netIncome)
    },
    {
      title: 'Super',
      value: format(props.superTotal)
    },
    {
      title: 'Pay',
      value: format(props.total)
    }
  ]

  return (
    <Table>
      <tbody>
        {rows.map(({ title, value }, i) => (
          <tr key={i}>
            <th>{title}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
