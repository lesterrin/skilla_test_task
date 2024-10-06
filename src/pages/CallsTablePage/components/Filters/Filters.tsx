import { FC, memo } from "react"
import { TypeFilter } from "pages/CallsTablePage/components/Filters/TypeFilter/TypeFilter"
import { CustomDateRangePicker } from "shared/ui/CustomDateRangePicker/CustomDateRangePicker"
import { CALL_TYPES } from "pages/CallsTablePage/components/Filters/TypeFilter/constants"
import { DateRangeType } from "shared/ui/CustomDateRangePicker/types"
import styles from "pages/CallsTablePage/components/Filters/Filters.module.css"

type FiltersPropsType = {
  selectedCallType: CALL_TYPES
  onCallTypeChangeHandler: (value: CALL_TYPES) => void
  onDateRangeChange: (params: DateRangeType) => void
  dateRange: DateRangeType
}

export const Filters: FC<FiltersPropsType> = memo(props => {
  const { selectedCallType, onCallTypeChangeHandler, onDateRangeChange, dateRange } = props
  return (
    <div className={styles.filtersWrapper}>
      <TypeFilter selectedType={selectedCallType} onTypeChangeHandler={onCallTypeChangeHandler} />
      <CustomDateRangePicker onChange={onDateRangeChange} dateRange={dateRange} />
    </div>
  )
})
