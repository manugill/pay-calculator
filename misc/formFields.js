export default [
  {
    name: 'firstName',
    attrs: {
      required: true,
      type: 'text',
      placeholder: 'First Name',
      autoFocus: true
    }
  },
  {
    name: 'lastName',
    attrs: {
      placeholder: 'Last Name',
      required: true,
      type: 'text'
    }
  },
  {
    name: 'annualIncome',
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
