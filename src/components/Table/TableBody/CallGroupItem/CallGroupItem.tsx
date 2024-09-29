import React, { FC } from "react";
import { CallType } from "api/types";
import styles from "./CallGroupItem.module.css";
import { TableRow } from "components/Table/TableBody/TableRow/TableRow";

type CallGroupItemPropsType = {
  stringDate: string
  callsGroup: CallType[]
}

export const CallGroupItem: FC<CallGroupItemPropsType> = ({ stringDate, callsGroup }) => {

  const groupDate = new Date(stringDate);
  const today = new Date();
  const timeDifference = (today.valueOf() - groupDate.valueOf()) / 24 / 60 / 60 / 1000;
  let dateHeaderValue;

  switch (true) {
    case (timeDifference <= 1):
      break;

    case (timeDifference > 1 && timeDifference <= 2):
      dateHeaderValue = "Вчера";
      break;

    default:
      dateHeaderValue = stringDate;
  }

  const dateHeader = dateHeaderValue &&
    <tr>
      <td colSpan={7} className={styles.dateHeaderContainer}>
        <span className={styles.date}>{dateHeaderValue}</span>
        <span className={styles.callCounter}>{callsGroup.length}</span>
      </td>
    </tr>;

  const callsList = callsGroup.map(call => <TableRow key={call.id} call={call}/>);

  return <>
    {dateHeader}
    {callsList}
  </>;
};