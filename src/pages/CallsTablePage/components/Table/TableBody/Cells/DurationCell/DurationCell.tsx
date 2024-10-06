import { FC } from "react"
import { secondsToMMSS } from "shared/utils"
import styles from "pages/CallsTablePage/components/Table/TableBody/Cells/DurationCell/DurationCell.module.css"
import { useRecord } from "shared/api/record/queries"

type DurationCellPropsType = {
  time: number
  record: string
  partnershipId: string
  isHovered: boolean
}

export const DurationCell: FC<DurationCellPropsType> = ({
  time,
  record,
  partnershipId,
  isHovered,
}) => {
  const duration = secondsToMMSS(time)

  const { data: recordFile } = useRecord({ record, partnership_id: partnershipId })

  const binaryData = new Uint8Array(recordFile)
  const blob = new Blob([binaryData], { type: "audio/mpeg" })

  const audioUrl = recordFile ? URL.createObjectURL(blob) : ""

  const recordComponent = (
    <div className={styles.recordWrapper}>
      <audio controls>
        <source src={audioUrl} type="audio/mpeg" />
      </audio>
    </div>
  )

  const content = record && isHovered ? recordComponent : duration

  return <td className={styles.duration}>{content}</td>
}
