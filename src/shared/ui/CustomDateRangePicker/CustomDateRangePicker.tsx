import React, { FC, memo, useRef, useState } from "react"
import { ReactComponent as IconCalendar } from "shared/assets/icons/iconCalendar.svg"
import { ReactComponent as ArrowLeft } from "shared/assets/icons/arrowLeft.svg"
import { ReactComponent as ArrowRight } from "shared/assets/icons/arrowRight.svg"
import styles from "shared/ui/CustomDateRangePicker/CustomDateRangePicker.module.css"
import { formatDays } from "shared/ui/CustomDateRangePicker/utils"
import { DATE_FILTER_MODES, DateRangeType } from "shared/ui/CustomDateRangePicker/types"
import { formatDateToDDMMYYYY } from "shared/utils"
import { useOutsideAlerter } from "shared/hooks/useOutsideClickDetecter"
import { DateRangeCalendar } from "@mui/x-date-pickers-pro"
import dayjs, { Dayjs } from "dayjs"

type DateFilterPropsType = {
  onChange: (params: DateRangeType) => void
  dateRange: DateRangeType
}

export const CustomDateRangePicker: FC<DateFilterPropsType> = memo(({ onChange, dateRange }) => {
  const [isSelectorOpen, setIsSelectorOpen] = useState(false)
  const [isCalendarModalOpen, setIsCalendarModalOpen] = useState(false)

  const [selectedDays, setSelectedDays] = useState(1)
  const [mode, setMode] = useState<DATE_FILTER_MODES>(DATE_FILTER_MODES.BY_DAYS)

  const selectWrapperRef = useRef(null)
  useOutsideAlerter({ ref: selectWrapperRef, callback: () => setIsSelectorOpen(false) })

  const calendarModalRef = useRef(null)
  useOutsideAlerter({ ref: calendarModalRef, callback: () => setIsCalendarModalOpen(false) })

  const selectorLabelValues = {
    BY_DAYS: formatDays(selectedDays),
    THIS_WEEK: "Неделя",
    THIS_MONTH: "Месяц",
    THIS_YEAR: "Год",
    CUSTOM_RANGE: `${formatDateToDDMMYYYY(dateRange.startsAt)} - ${formatDateToDDMMYYYY(dateRange.endsAt)}`,
  }

  const selectorLabel = selectorLabelValues[mode]

  const selectedDaysChangeHandler = (days: number) => {
    if (days > 0) {
      const startsAt = new Date()
      const endsAt = new Date()

      startsAt.setDate(startsAt.getDate() - selectedDays + 1)
      startsAt.setHours(0, 0, 0, 0)

      endsAt.setHours(23, 59, 59)
      setSelectedDays(days)

      setMode(DATE_FILTER_MODES.BY_DAYS)

      onChange({ startsAt, endsAt })
    }

    setIsSelectorOpen(false)
  }

  const selectWeekChangeHandler = () => {
    const date = new Date()
    const dayOfWeek = date.getDay()

    const mondayOffset = dayOfWeek === 0 ? -6 : 1
    const startsAt = new Date(date)
    startsAt.setDate(date.getDate() - (dayOfWeek - mondayOffset))

    const endsAt = new Date(date)
    const sundayOffset = dayOfWeek === 0 ? 0 : 7 - dayOfWeek
    endsAt.setDate(date.getDate() + sundayOffset)

    setMode(DATE_FILTER_MODES.THIS_WEEK)
    onChange({ startsAt, endsAt })
    setIsSelectorOpen(false)
  }

  const selectMonthChangeHandler = () => {
    const date = new Date()
    const startsAt = new Date(date.getFullYear(), date.getMonth(), 2)
    const endsAt = new Date(date.getFullYear(), date.getMonth() + 1, 1)

    setMode(DATE_FILTER_MODES.THIS_MONTH)
    onChange({ startsAt, endsAt })
    setIsSelectorOpen(false)
  }

  const selectYearChangeHandler = () => {
    const date = new Date()
    const currentYear = date.getFullYear()

    const startsAt = new Date(currentYear, 0, 1)
    const endsAt = new Date(currentYear, 11, 31)

    setMode(DATE_FILTER_MODES.THIS_YEAR)
    onChange({ startsAt, endsAt })
    setIsSelectorOpen(false)
  }

  const toggleOpen = () => {
    setIsSelectorOpen(prevState => !prevState)
  }

  const onCustomDateRangeChange = (newValue: Dayjs[]) => {
    if (newValue[1]) {
      onChange({ startsAt: newValue[0].toDate(), endsAt: newValue[1].toDate() })
      setMode(DATE_FILTER_MODES.CUSTOM_RANGE)
      setIsSelectorOpen(false)
      setIsCalendarModalOpen(false)
    }
  }

  const calendarModal = (
    <div ref={calendarModalRef} className={styles.calendarModal}>
      <DateRangeCalendar calendars={1} onChange={onCustomDateRangeChange} />
    </div>
  )

  return (
    <div ref={selectWrapperRef} className={styles.dateRangeSelectorWrapper}>
      <div className={styles.dateRangeSelector}>
        <div onClick={() => selectedDaysChangeHandler(selectedDays - 1)}>
          <ArrowLeft />
        </div>

        <div onClick={toggleOpen} className={styles.daysCounter}>
          <IconCalendar />
          {selectorLabel}
        </div>

        <div onClick={() => selectedDaysChangeHandler(selectedDays + 1)}>
          <ArrowRight />
        </div>
      </div>

      {isSelectorOpen && (
        <ul className={styles.dateRangeSelectorDropdown}>
          <li
            className={mode === DATE_FILTER_MODES.BY_DAYS ? styles.active : ""}
            onClick={() => selectedDaysChangeHandler(selectedDays)}
          >
            {formatDays(selectedDays)}
          </li>
          <li
            className={mode === DATE_FILTER_MODES.THIS_WEEK ? styles.active : ""}
            onClick={selectWeekChangeHandler}
          >
            Неделя
          </li>
          <li
            className={mode === DATE_FILTER_MODES.THIS_MONTH ? styles.active : ""}
            onClick={selectMonthChangeHandler}
          >
            Месяц
          </li>
          <li
            className={mode === DATE_FILTER_MODES.THIS_YEAR ? styles.active : ""}
            onClick={selectYearChangeHandler}
          >
            Год
          </li>
          <li
            className={mode === DATE_FILTER_MODES.CUSTOM_RANGE ? styles.active : ""}
            onClick={() => setIsCalendarModalOpen(true)}
          >
            <div>Указать даты</div>
            <div className={styles.customRangeWrapper}>
              <span>{selectorLabelValues[DATE_FILTER_MODES.CUSTOM_RANGE]}</span>
              <IconCalendar />
            </div>
          </li>
        </ul>
      )}

      {isCalendarModalOpen && calendarModal}
    </div>
  )
})
