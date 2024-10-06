import { FC } from "react"
import {
  CALL_TYPES,
  CALL_TYPES_VALUES,
} from "pages/CallsTablePage/components/Filters/TypeFilter/constants"
import { ReactComponent as Cross } from "shared/assets/icons/cross.svg"
import { CustomSelect } from "shared/ui/CustomSelect/CustomSelect"
import styles from "pages/CallsTablePage/components/Filters/TypeFilter/TypeFilter.module.css"

type TypeFilterPropsType = {
  selectedType: CALL_TYPES
  onTypeChangeHandler: (value: CALL_TYPES) => void
}

export const TypeFilter: FC<TypeFilterPropsType> = ({ selectedType, onTypeChangeHandler }) => {
  const clearFilters = (
    <div onClick={() => onTypeChangeHandler(CALL_TYPES.ALL)} className={styles.clearFilters}>
      <span>Сбросить фильтры</span> <Cross />
    </div>
  )

  const isFilterActive = selectedType !== CALL_TYPES.ALL

  const options = Object.keys(CALL_TYPES).map(type => {
    const typedType = type as CALL_TYPES
    return { value: type, label: CALL_TYPES_VALUES[typedType] }
  })

  const onChange = (value: string) => {
    onTypeChangeHandler(value as CALL_TYPES)
  }

  return (
    <div className={styles.typeFilterWrapper}>
      <CustomSelect
        value={selectedType}
        options={options}
        onChange={onChange}
        selectedValueClassNames={isFilterActive ? styles.activeFilter : undefined}
      />
      {isFilterActive && clearFilters}
    </div>
  )
}
