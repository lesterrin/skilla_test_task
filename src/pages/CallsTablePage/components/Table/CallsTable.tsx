import { FC, memo } from "react"
import styles from "pages/CallsTablePage/components/Table/Table.module.css"
import { CallType, ORDER_TYPES, SORT_BY_TYPE } from "shared/api/calls/types"
import { TableHead } from "pages/CallsTablePage/components/Table/TableHead/TableHead"
import { TableBody } from "pages/CallsTablePage/components/Table/TableBody/TableBody"

type CallsTableProps = {
  callsData: CallType[]
  sortBy?: SORT_BY_TYPE
  setSortBy: (sortBy: SORT_BY_TYPE) => void
  order: ORDER_TYPES
  toggleOrder: () => void
}

export const CallsTable: FC<CallsTableProps> = memo(
  ({ callsData, sortBy, setSortBy, order, toggleOrder }) => {
    return (
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <TableHead
            order={order}
            toggleOrder={toggleOrder}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
          <TableBody callsData={callsData} />
        </table>
      </div>
    )
  }
)
