import { FC } from "react";
import { secondsToMMSS } from "shared/utils";
import styles from "./DurationCell.module.css";

type DurationCellPropsType = {
  time: number
  record: string
  isHovered: boolean
}

export const DurationCell: FC<DurationCellPropsType> = ({ time, record, isHovered }) => {
  const duration = secondsToMMSS(time);

  const recordComponent = <audio controls>
    <source src={record} type="audio/mpeg"/>
  </audio>;

  const content = record && isHovered ? recordComponent : duration;

  return <td className={styles.duration}>{content}</td>;
};