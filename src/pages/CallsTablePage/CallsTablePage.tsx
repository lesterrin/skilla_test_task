import React, { useMemo, useState } from "react"
import styles from "pages/CallsTablePage/CallsTablePage.module.css"
import { useCalls } from "shared/api/calls/queries"
import { CallsTable } from "pages/CallsTablePage/components/Table/CallsTable"
import { Filters } from "pages/CallsTablePage/components/Filters/Filters"
import { GetCallsListDataType, ORDER_TYPES, SORT_BY_TYPE } from "shared/api/calls/types"
import { CALL_TYPES } from "pages/CallsTablePage/components/Filters/TypeFilter/constants"
import { DateRangeType } from "shared/ui/CustomDateRangePicker/types"
import { formatDateToYYYYMMDD } from "shared/utils"
import { initialDateRange } from "pages/CallsTablePage/constants"
import { IN_OUT_PARAMS } from "shared/api/calls/constants"

export const CallsTablePage = () => {
  const [order, setOrder] = useState<ORDER_TYPES>(ORDER_TYPES.ASC)
  const [sortBy, setSortBy] = useState<SORT_BY_TYPE | undefined>()

  const [selectedCallType, setSelectedCallType] = useState<CALL_TYPES>(CALL_TYPES.ALL)

  const [dateRange, setDateRange] = useState<DateRangeType>(initialDateRange)

  const getCallsListParams: GetCallsListDataType = {
    order,
    sort_by: sortBy,
    date_start: formatDateToYYYYMMDD(dateRange?.startsAt),
    date_end: formatDateToYYYYMMDD(dateRange?.endsAt),
    in_out: IN_OUT_PARAMS[selectedCallType],
  }

  const toggleOrder = () =>
    setOrder(prev => (prev === ORDER_TYPES.ASC ? ORDER_TYPES.DESC : ORDER_TYPES.ASC))

  const { data, isLoading } = useCalls(getCallsListParams)

  const preloader = "Идёт загрузка данных..."
  const noDataPlug = "Таблица пуста"

  const filters = useMemo(
    () => (
      <Filters
        selectedCallType={selectedCallType}
        onCallTypeChangeHandler={setSelectedCallType}
        onDateRangeChange={setDateRange}
        dateRange={dateRange}
      />
    ),
    [selectedCallType, setDateRange, dateRange]
  )

  const table = useMemo(() => {
    if (isLoading) return preloader
    if (!data) return noDataPlug

    return (
      <CallsTable
        callsData={data}
        sortBy={sortBy}
        setSortBy={setSortBy}
        order={order}
        toggleOrder={toggleOrder}
      />
    )
  }, [isLoading, data, order, sortBy, selectedCallType, dateRange])

  return (
    <div className={styles.appWrapper}>
      {filters}
      {table}
    </div>
  )
}

export default CallsTablePage
