import { axiosInstance } from "./axiosInstance";
import { GetCallsListDataType, GetCallsListResultType } from "api/types";

export const getCallsList = (data: GetCallsListDataType) => {
  return axiosInstance
    .post<GetCallsListResultType>("getList", data)
    .then(res => res.data.results)
    .catch(error => console.log(error));
};