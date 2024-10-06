import { FC } from "react"
import styles from "pages/CallsTablePage/components/Table/TableBody/Cells/ToNumberCell/ToNumberCell.module.css"

type ToNumberCellPropsType = {
  toNumber: string
}

export const ToNumberCell: FC<ToNumberCellPropsType> = ({ toNumber }) => {
  return <td className={styles.toNumber}>{toNumber}</td>
}
