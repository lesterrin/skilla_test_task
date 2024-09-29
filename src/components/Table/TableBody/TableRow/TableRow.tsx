import React, { FC, useState } from "react";
import { CallType } from "api/types";
import styles from "components/Table/TableBody/CallGroupItem/CallGroupItem.module.css";
import { StatusCell } from "components/Table/TableBody/Cells/StatusCell/StatusCell";
import { DateCell } from "components/Table/TableBody/Cells/DateCell/DateCell";
import { PersonAvatarCell } from "components/Table/TableBody/Cells/PersonAvatarCell/PersonAvatarCell";
import { ToNumberCell } from "components/Table/TableBody/Cells/ToNumberCell/ToNumberCell";
import { SourceCell } from "components/Table/TableBody/Cells/SourceCell/SourceCell";
import { RateCell } from "components/Table/TableBody/Cells/RateCell/RateCell";
import { DurationCell } from "components/Table/TableBody/Cells/DurationCell/DurationCell";

type TableRowPropsType = {
  call: CallType
}

export const TableRow: FC<TableRowPropsType> = ({ call }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <tr className={styles.tableRow} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
      <StatusCell status={call.status}/>
      <DateCell date={call.date}/>
      <PersonAvatarCell personAvatar={call.person_avatar}/>
      <ToNumberCell toNumber={call.from_number}/>
      <SourceCell source={call.source}/>
      <RateCell errors={call.errors}/>
      <DurationCell time={call.time} record={call.record} isHovered={isHovered}/>
    </tr>
  );
};