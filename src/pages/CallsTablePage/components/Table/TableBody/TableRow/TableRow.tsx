import React, { FC, useState } from "react"
import { CallType } from "shared/api/calls/types"
import styles from "pages/CallsTablePage/components/Table/TableBody/CallGroupItem/CallGroupItem.module.css"
import { StatusCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/StatusCell/StatusCell"
import { DateCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/DateCell/DateCell"
import { PersonAvatarCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/PersonAvatarCell/PersonAvatarCell"
import { ToNumberCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/ToNumberCell/ToNumberCell"
import { SourceCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/SourceCell/SourceCell"
import { RateCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/RateCell/RateCell"
import { DurationCell } from "pages/CallsTablePage/components/Table/TableBody/Cells/DurationCell/DurationCell"

type TableRowPropsType = {
  call: CallType
}

export const TableRow: FC<TableRowPropsType> = ({ call }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <tr
      className={styles.tableRow}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StatusCell status={call.status} />
      <DateCell date={call.date} />
      <PersonAvatarCell personAvatar={call.person_avatar} />
      <ToNumberCell toNumber={call.from_number} />
      <SourceCell source={call.source} />
      <RateCell errors={call.errors} />
      <DurationCell
        time={call.time}
        record={call.record}
        isHovered={isHovered}
        partnershipId={call.partnership_id}
      />
    </tr>
  )
}
