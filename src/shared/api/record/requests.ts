import { axiosInstance } from "shared/api/axiosInstance"
import { GetAudioParamsType } from "shared/api/record/types"

export const getAudio = (data: GetAudioParamsType) => {
  return axiosInstance
    .post(
      `getRecord?record=${data.record}&partnership_id=${data.partnership_id}`,
      {},
      {
        responseType: "arraybuffer",
      }
    )
    .then(res => {
      return res.data
    })
    .catch(error => console.log(error))
}
