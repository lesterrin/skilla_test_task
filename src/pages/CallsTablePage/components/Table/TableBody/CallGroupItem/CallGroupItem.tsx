import React, { FC } from "react"
import { CallType } from "shared/api/calls/types"
import styles from "pages/CallsTablePage/components/Table/TableBody/CallGroupItem/CallGroupItem.module.css"
import { TableRow } from "pages/CallsTablePage/components/Table/TableBody/TableRow/TableRow"
import { classCombiner } from "shared/utils"

type CallGroupItemPropsType = {
  stringDate: string
  callsGroup: CallType[]
  index: number
}

export const CallGroupItem: FC<CallGroupItemPropsType> = ({ stringDate, callsGroup, index }) => {
  const isFirst = index === 0

  const groupDate = new Date(stringDate)
  const today = new Date()
  const timeDifference = (today.valueOf() - groupDate.valueOf()) / 24 / 60 / 60 / 1000
  let dateHeaderValue

  switch (true) {
    case timeDifference <= 1:
      break

    case timeDifference > 1 && timeDifference <= 2:
      dateHeaderValue = "Вчера"
      break

    default:
      dateHeaderValue = stringDate
  }

  const dateHeader = dateHeaderValue && (
    <tr>
      <td
        colSpan={7}
        className={classCombiner(styles.dateHeaderContainer, !isFirst ? styles.paddingTop : "")}
      >
        <span className={styles.date}>{dateHeaderValue}</span>
        <span className={styles.callCounter}>{callsGroup.length}</span>
      </td>
    </tr>
  )

  const callsList = callsGroup.map(call => <TableRow key={call.id} call={call} />)

  return (
    <>
      {dateHeader}
      {callsList}
    </>
  )
}
