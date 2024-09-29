import { FC } from "react";
import { TypeFilter } from "components/Filters/TypeFilter/TypeFilter";
import { DateFilter } from "components/Filters/DateFilter/DateFilter";
import { CALL_TYPES } from "components/Filters/TypeFilter/constants";
import { DateRangeType } from "components/Filters/DateFilter/types";
import styles from "./Filters.module.css";

type FiltersPropsType = {
  selectedCallType: CALL_TYPES
  onCallTypeChangeHandler: (value: CALL_TYPES) => void
  onDateRangeChange: (params: DateRangeType) => void
}

export const Filters: FC<FiltersPropsType> = ({ selectedCallType, onCallTypeChangeHandler, onDateRangeChange }) => {
  return <div className={styles.filtersWrapper}>
    <TypeFilter selectedType={selectedCallType} onTypeChangeHandler={onCallTypeChangeHandler}/>
    <DateFilter onChange={onDateRangeChange}/>
  </div>;
};