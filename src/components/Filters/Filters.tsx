import styles from "./Filters.module.css";
import { TypeFilter } from "components/Filters/TypeFilter/TypeFilter";
import { DateFilter } from "components/Filters/DateFilter/DateFilter";
import { CALL_TYPES } from "components/Filters/TypeFilter/constants";
import { FC } from "react";

type FiltersPropsType = {
  selectedCallType: CALL_TYPES
  onCallTypeChangeHandler: (value: CALL_TYPES) => void
}

export const Filters: FC<FiltersPropsType> = ({ selectedCallType, onCallTypeChangeHandler }) => {
  return <div className={styles.filtersWrapper}>
    <TypeFilter selectedType={selectedCallType} onTypeChangeHandler={onCallTypeChangeHandler}/>
    <DateFilter/>
  </div>;
};