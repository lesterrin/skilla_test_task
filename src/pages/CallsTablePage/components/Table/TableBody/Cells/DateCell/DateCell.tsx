import { FC } from "react"
import { formatStringDateToHHMM } from "shared/utils"
import styles from "pages/CallsTablePage/components/Table/TableBody/Cells/DateCell/DateCell.module.css"

export type DateCellPropsType = {
  date: string
}

export const DateCell: FC<DateCellPropsType> = ({ date }) => {
  const callTime = formatStringDateToHHMM(date)

  return <td className={styles.dateCell}>{callTime}</td>
}
