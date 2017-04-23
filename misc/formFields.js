export default [
  {
    name: 'firstName',
    value: 'Manu',
    attrs: {
      required: true,
      type: 'text',
      placeholder: 'First Name',
      autoFocus: true
    }
  },
  {
    name: 'lastName',
    value: 'Gill',
    attrs: {
      placeholder: 'Last Name',
      required: true,
      type: 'text'
    }
  },
  {
    name: 'annualIncome',
    value: '60050',
    attrs: {
      placeholder: 'Annual Income',
      required: true,
      type: 'text',
      pattern: `[0-9]*`,
      title: 'Please enter an integer.',
      before: '$',
      after: '.00'
    }
  },
  {
    name: 'superRate',
    value: '9',
    attrs: {
      placeholder: 'Super Rate',
      required: true,
      type: 'number',
      min: 0,
      max: 100,
      step: 0.1,
      after: '%'
    }
  }
]
