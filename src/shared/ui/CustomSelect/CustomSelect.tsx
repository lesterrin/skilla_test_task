import React, { FC, useRef, useState } from "react"
import { ReactComponent as ArrowDown } from "shared/assets/icons/arrowDown.svg"
import { ReactComponent as ArrowUp } from "shared/assets/icons/arrowUp.svg"
import styles from "./CustomSelect.module.css"
import { classCombiner } from "shared/utils"
import { useOutsideAlerter } from "shared/hooks/useOutsideClickDetecter"

type Option = {
  value: string
  label: string
}

type CustomSelectorPropsType = {
  value: string
  options: Option[]
  onChange: (value: string) => void
  selectedValueClassNames?: string
}

export const CustomSelect: FC<CustomSelectorPropsType> = props => {
  const { value, options, onChange, selectedValueClassNames } = props

  const [isOpen, setIsOpen] = useState(false)

  const wrapperRef = useRef(null)
  useOutsideAlerter({ ref: wrapperRef, callback: () => setIsOpen(false) })

  const selectedOption = options.find(option => option.value === value)
  const arrow = isOpen ? <ArrowUp /> : <ArrowDown />

  const handleOptionClick = (option: Option) => {
    onChange(option.value)
    setIsOpen(false)
  }

  const optionsList = (
    <ul className={styles.optionsList}>
      {options.map(option => {
        const isSelected = option.value === value

        return (
          <li
            key={option.value}
            className={isSelected ? styles.selectedOptionColor : styles.defaultOptionColor}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        )
      })}
    </ul>
  )

  return (
    <div ref={wrapperRef} className={styles.customSelect} onClick={() => setIsOpen(!isOpen)}>
      <div className={classCombiner(styles.selectedValue, selectedValueClassNames)}>
        {selectedOption?.label}
        {arrow}
      </div>
      {isOpen && optionsList}
    </div>
  )
}
