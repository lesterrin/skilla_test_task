import { axiosInstance } from "shared/api/axiosInstance"
import { GetCallsListDataType, GetCallsListResultType } from "shared/api/calls/types"

export const getCallsList = (data: GetCallsListDataType) => {
  return axiosInstance
    .post<GetCallsListResultType>("getList", data)
    .then(res => res.data.results)
    .catch(error => console.log(error))
}
