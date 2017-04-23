const taxRates = [
  {
    from: 0,
    rate: 0,
    amount: 0
  },
  {
    from: 18200,
    rate: 0.19,
    amount: 0
  },
  {
    from: 37000,
    rate: 0.325,
    amount: 3572
  },
  {
    from: 80000,
    rate: 0.37,
    amount: 17547
  },
  {
    from: 180000,
    rate: 0.45,
    amount: 54547
  }
]

export default (annualIncome) =>
  taxRates.reduceRight((tax, { from, rate, amount }) => {
    return tax === 0 && from < annualIncome
      ? amount + (annualIncome - from) * rate
      : tax
  }, 0)
