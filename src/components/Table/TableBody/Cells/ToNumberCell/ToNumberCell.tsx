import { FC } from "react";
import styles from './ToNumberCell.module.css'

type ToNumberCellPropsType = {
  toNumber: string
}

export const ToNumberCell: FC<ToNumberCellPropsType> = ({ toNumber }) => {
  return <td className={styles.toNumber}>{toNumber}</td>;
};