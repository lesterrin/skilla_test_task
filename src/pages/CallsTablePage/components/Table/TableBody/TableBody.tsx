import React, { FC } from "react"
import { CallType } from "shared/api/calls/types"
import { groupByDate } from "shared/utils"
import { CallGroupItem } from "pages/CallsTablePage/components/Table/TableBody/CallGroupItem/CallGroupItem"
import styles from "pages/CallsTablePage/components/Table/TableBody/TableBody.module.css"

type TableBodyPropsType = {
  callsData: CallType[]
}

export const TableBody: FC<TableBodyPropsType> = ({ callsData }) => {
  const grouppedCallsData = groupByDate(callsData)

  const callGroupItems = Object.keys(grouppedCallsData).map((key, index) => (
    <CallGroupItem key={index} index={index} stringDate={key} callsGroup={grouppedCallsData[key]} />
  ))

  return <tbody className={styles.tableBody}>{callGroupItems}</tbody>
}
