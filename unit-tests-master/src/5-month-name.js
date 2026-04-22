const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export const monthName = (monthNumber) => {
  const monthArrayNumber = monthNumber - 1;
  if (monthNumber === 0 || monthNumber > 12) {
    return null
  }
  return `${months[monthArrayNumber]}`
}
