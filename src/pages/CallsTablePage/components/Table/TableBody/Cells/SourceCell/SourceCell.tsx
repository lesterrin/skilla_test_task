import { FC } from "react"
import styles from "./SourceCell.module.css"

type SourceCellPropsType = {
  source: string
}
export const SourceCell: FC<SourceCellPropsType> = ({ source }) => {
  return <td className={styles.source}>{source}</td>
}
