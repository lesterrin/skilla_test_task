export enum DATE_FILTER_MODES {
  BY_DAYS = "BY_DAYS",
  THIS_WEEK = "THIS_WEEK",
  THIS_MONTH = "THIS_MONTH",
  THIS_YEAR = "THIS_YEAR",
  CUSTOM_RANGE = "CUSTOM_RANGE",
}

export type DateRangeType = { startsAt: Date; endsAt: Date }
