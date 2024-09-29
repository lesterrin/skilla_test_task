import React, { FC, useEffect, useState } from "react";
import { ReactComponent as IconCalendar } from "shared/assets/icons/iconCalendar.svg";
import { ReactComponent as ArrowLeft } from "shared/assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "shared/assets/icons/arrowRight.svg";
import styles from "./DateFilter.module.css";
import { formatDays } from "components/Filters/DateFilter/utils";
import { DATE_FILTER_MODES, DateRangeType } from "components/Filters/DateFilter/types";

type DateFilterPropsType = {
  onChange: (params: DateRangeType) => void
}

export const DateFilter: FC<DateFilterPropsType> = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState(3);
  const [mode, setMode] = useState<DATE_FILTER_MODES>(DATE_FILTER_MODES.BY_DAYS);

  useEffect(() => {
    onChangeHandler();
  }, [mode, selectedDays]);

  const onChangeHandler = () => {
    let startsAt = new Date();
    let endsAt = new Date();

    if (mode === DATE_FILTER_MODES.BY_DAYS) {
      startsAt.setUTCHours(0, 0, 0, 0);

      endsAt.setDate(endsAt.getDate() + selectedDays);
      endsAt.setUTCHours(23, 59, 59);
    }

    onChange({ startsAt: startsAt.toISOString(), endsAt: endsAt.toISOString() });
  };

  const selectedDaysChangeHandler = (days: number) => {
    if (days > 0) {
      setSelectedDays(days);
    }
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((prevState => !prevState));
  };

  return (
    <div className={styles.dateRangeSelectorWrapper}>
      <div className={styles.dateRangeSelector}>
        <div onClick={() => selectedDaysChangeHandler(selectedDays - 1)}>
          <ArrowLeft/>
        </div>

        <div onClick={toggleOpen} className={styles.daysCounter}><IconCalendar/>{formatDays(selectedDays)}</div>


        <div onClick={() => selectedDaysChangeHandler(selectedDays + 1)}>
          <ArrowRight/>
        </div>
      </div>

      {isOpen && (
        <div className={styles.dateRangeSelectorDropdown}>
          <div onClick={() => selectedDaysChangeHandler(selectedDays)}>
            {selectedDays} дней
          </div>
          <div onClick={() => selectedDaysChangeHandler(7)}>Неделя</div>
        </div>
      )}
    </div>
  );
};