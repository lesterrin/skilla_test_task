import React, { FC } from "react";
import { CallType } from "api/types";
import { groupByDate } from "shared/utils";
import { CallGroupItem } from "components/Table/TableBody/CallGroupItem/CallGroupItem";
import styles from "./TableBody.module.css";

type TableBodyPropsType = {
  callsData: CallType[]
}

export const TableBody: FC<TableBodyPropsType> = ({ callsData }) => {

  const grouppedCallsData = groupByDate(callsData);

  const callGroupItems = Object.keys(grouppedCallsData)
    .map((key, index) => <CallGroupItem key={index}
                                        stringDate={key}
                                        callsGroup={grouppedCallsData[key]}/>);

  return (
    <tbody className={styles.tableBody}>
    {callGroupItems}
    </tbody>
  );
};