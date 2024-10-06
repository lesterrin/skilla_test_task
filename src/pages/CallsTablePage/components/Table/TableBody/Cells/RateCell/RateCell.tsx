import { FC } from "react"
import styles from "pages/CallsTablePage/components/Table/TableBody/Cells/RateCell/RateCell.module.css"

type RateCellPropsType = {
  errors?: string[]
}

export const RateCell: FC<RateCellPropsType> = ({ errors }) => {
  const errorsContent = errors?.map((error, index) => (
    <span key={index} className={styles.error}>
      {error}
    </span>
  ))

  return <td className={styles.rate}>{errorsContent}</td>
}
