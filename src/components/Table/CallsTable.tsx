import { FC } from "react";
import styles from "./Table.module.css";
import { CallType, ORDER_TYPES, SORT_BY_TYPE } from "api/types";
import { TableHead } from "components/Table/TableHead/TableHead";
import { TableBody } from "components/Table/TableBody/TableBody";


type CallsTableProps = {
  callsData: CallType[]
  sortBy?: SORT_BY_TYPE
  setSortBy: (sortBy: SORT_BY_TYPE) => void
  order: ORDER_TYPES
  toggleOrder: () => void
}

export const CallsTable: FC<CallsTableProps> = ({ callsData, sortBy, setSortBy, order, toggleOrder }) => {

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <TableHead order={order} toggleOrder={toggleOrder} sortBy={sortBy} setSortBy={setSortBy}/>
        <TableBody callsData={callsData}/>
      </table>
    </div>
  );
};