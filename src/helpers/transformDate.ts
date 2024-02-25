

export const transformDate = (date: Date | string) => {
  if (!date) return 'invalid date'

  const dateObj = new Date(date)

  if (isNaN(dateObj.getTime())) return 'invalid date'

  const day = dateObj.getDate()
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()

  return `${day}/${month}/${year}`
}

