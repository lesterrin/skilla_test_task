import { useQuery } from "react-query"
import { GetAudioParamsType } from "shared/api/record/types"
import { getAudio } from "shared/api/record/requests"

export const recordsQueryKeys = {
  record: ({ record, partnership_id }: GetAudioParamsType) => ["record", record, partnership_id],
}

export const useRecord = (data: GetAudioParamsType) =>
  useQuery(recordsQueryKeys.record(data), () => getAudio(data), {
    enabled: Boolean(data.record && data.partnership_id),
  })
