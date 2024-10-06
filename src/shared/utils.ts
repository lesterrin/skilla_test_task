import { CallType } from "shared/api/calls/types"

export const formatDateToYYYYMMDD = (date: Date) => {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

export const formatDateToDDMMYYYY = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const year = date.getFullYear()

  return `${day}.${month}.${year}`
}

export const formatStringDateToHHMM = (stringDate: string) => {
  const date = new Date(stringDate)

  const hours = date.getHours().toString().padStart(2, "0")
  const minutes = date.getMinutes().toString().padStart(2, "0")

  return `${hours}:${minutes}`
}

export const secondsToMMSS = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60)
  const seconds = totalSeconds % 60

  const formattedMinutes = String(minutes).padStart(2, "0")
  const formattedSeconds = String(seconds).padStart(2, "0")

  return `${formattedMinutes}:${formattedSeconds}`
}

export const groupByDate = (calls: CallType[]) => {
  return calls.reduce((accumulator: { [key: string]: CallType[] }, call) => {
    const dateKey = new Date(call.date_notime).toISOString().split("T")[0]

    if (!accumulator[dateKey]) {
      accumulator[dateKey] = []
    }

    accumulator[dateKey].push(call)

    return accumulator
  }, {})
}

export const classCombiner = (...classes: (string | undefined)[]) => {
  return `${classes.join(" ")}`
}
