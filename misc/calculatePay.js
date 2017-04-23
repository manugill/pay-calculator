import calculateTax from './calculateTax'

export default (annualIncome, superRate) => {
  const grossIncome = Math.floor(annualIncome / 12)
  const annualTax = calculateTax(annualIncome)
  const incomeTax = Math.ceil(annualTax / 12)
  const netIncome = grossIncome - incomeTax
  const superTotal = Math.floor(grossIncome * (superRate / 100))
  const total = netIncome - superTotal

  return {
    // Sent
    annualIncome,
    superRate,

    // Calculated
    grossIncome,
    annualTax,
    incomeTax,
    netIncome,
    superTotal,
    total
  }
}
