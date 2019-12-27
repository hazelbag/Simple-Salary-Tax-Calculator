// Created an else if function to compare the user input
function taxTable(monthlySalary) {
  // Take the input from the user, multiply by 12 months to get their annual income
  // and set it to annualSalary
  const annualSalary = monthlySalary * 12;
  // Declare the taxAmount
  let taxAmount = 0;
  // If the input earnings is less than R195,850 run this function, if not, move on
  if (annualSalary <= 195850) {
    taxAmount = annualSalary * 0.18;
    // If the input is equal or greater butr not greater than use this
  } else if (annualSalary >= 195851 && annualSalary <= 305850) {
    taxAmount = annualSalary * 0.26 - 35253;
    // If the input is equal or greater butr not greater than use this
  } else if (annualSalary >= 305851 && annualSalary <= 423300) {
    taxAmount = annualSalary * 0.31 - 63853;
    // If the input is equal or greater butr not greater than use this
  } else if (annualSalary >= 423301 && annualSalary <= 555600) {
    taxAmount = annualSalary * 0.36 - 100263;
    // If the input is equal or greater butr not greater than use this
  } else if (annualSalary >= 555601 && annualSalary <= 708310) {
    taxAmount = annualSalary * 0.39 - 147891;
    // If the input is equal or greater butr not greater than use this
  } else if (annualSalary >= 708311 && annualSalary <= 1500000) {
    taxAmount = annualSalary * 0.41 - 207448;
    // Else run this function
  } else {
    taxAmount = annualSalary * 0.45 - 532041;
  }
  // Return the output
  return ((annualSalary - taxAmount) / 12).toFixed(2);
}
  // Export the taxTable as taxTable
  module.exports.taxTable = taxTable;