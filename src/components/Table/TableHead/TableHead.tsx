import { FC } from "react";
import { ORDER_TYPES, SORT_BY_TYPE } from "api/types";

import { ReactComponent as ArrowDown } from "shared/assets/icons/arrowDown.svg";
import { ReactComponent as ArrowUp } from "shared/assets/icons/arrowUp.svg";

import styles from "./TableHead.module.css";
import { classCombiner } from "shared/utils";

type TableHeadPropsType = {
  order: ORDER_TYPES
  toggleOrder: () => void
  sortBy?: SORT_BY_TYPE
  setSortBy: (sortBy: SORT_BY_TYPE) => void
}

export const TableHead: FC<TableHeadPropsType> = ({ order, toggleOrder, sortBy, setSortBy }) => {

  const orderArrow = order === ORDER_TYPES.ASC ? <ArrowDown/> : <ArrowUp/>;

  const onSortedColumnClick = (column: SORT_BY_TYPE) => {
    if (column === sortBy) toggleOrder();

    setSortBy(column);
  };

  const isDateSortActive = sortBy === SORT_BY_TYPE.DATE;
  const isDurationSortActive = sortBy === SORT_BY_TYPE.DURATION;

  return (
    <thead>
    <tr className={styles.tableHeadRow}>
      <td className={styles.statusColumn}>Тип</td>
      <td className={classCombiner(styles.dateColumn,styles.pointer)} onClick={() => onSortedColumnClick(SORT_BY_TYPE.DATE)}>Время {isDateSortActive && orderArrow}</td>
      <td className={styles.personAvatarColumn}>Сотрудник</td>
      <td className={styles.numberToColumn}>Звонок</td>
      <td className={styles.sourceColumn}>Источник</td>
      <td className={styles.rateColumn}>Оценка</td>
      <td className={classCombiner(styles.durationColumn,styles.pointer)}
        onClick={() => onSortedColumnClick(SORT_BY_TYPE.DURATION)}>Длительность {isDurationSortActive && orderArrow}</td>
    </tr>
    </thead>
  );
};