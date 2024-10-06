import { FC } from "react"
import styles from "pages/CallsTablePage/components/Table/TableBody/Cells/PersonAvatarCell/PersonAvatar.module.css"

type PersonAvatarCellPropsType = {
  personAvatar: string
}

export const PersonAvatarCell: FC<PersonAvatarCellPropsType> = ({ personAvatar }) => {
  return (
    <td>
      <img className={styles.personAvatarImg} src={personAvatar} />
    </td>
  )
}
