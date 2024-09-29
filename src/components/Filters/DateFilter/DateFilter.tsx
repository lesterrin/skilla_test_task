import React, { useState } from "react";
import { ReactComponent as IconCalendar } from "shared/assets/icons/iconCalendar.svg";
import { ReactComponent as ArrowLeft } from "shared/assets/icons/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "shared/assets/icons/arrowRight.svg";
import styles from "./DateFilter.module.css";

export const DateFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDays, setSelectedDays] = useState(3);

  const handleDaysChange = (days: number) => {
    setSelectedDays(days);
    setIsOpen(false);
  };

  const toggleOpen = () => {
    setIsOpen((prevState => !prevState));
  };

  return (
    <div className={styles.dateRangeSelectorWrapper}>
      <div className={styles.dateRangeSelector}>
        <div onClick={() => handleDaysChange(selectedDays - 1)}>
          <ArrowLeft/>
        </div>

        <div onClick={toggleOpen} className={styles.daysCounter}><IconCalendar/>{selectedDays} дней</div>


        <div onClick={() => handleDaysChange(selectedDays + 1)}>
          <ArrowRight/>
        </div>
      </div>

      {isOpen && (
        <div className={styles.dateRangeSelectorDropdown}>
          <div onClick={() => handleDaysChange(selectedDays)}>
            {selectedDays} дней
          </div>
          <div onClick={() => handleDaysChange(7)}>Неделя</div>
          <div>
          </div>
        </div>
      )}
    </div>
  );
};