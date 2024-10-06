export const formatDays = (days: number) => {
  if (days > 10 && [11, 12, 13, 14].includes(days % 100)) return `${days} дней`

  const lastDigit = days % 10
  if (lastDigit == 1) return `${days} день`
  if ([2, 3, 4].includes(lastDigit)) return `${days} дня`
  if ([5, 6, 7, 8, 9, 0].includes(lastDigit)) return `${days} дней`
}
