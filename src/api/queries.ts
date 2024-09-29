import { useQuery } from "react-query";
import { getCallsList } from "./requests";
import { GetCallsListDataType } from "api/types";

export const queryKeys = {
  calls: ({ order, sort_by }: GetCallsListDataType) => ["calls", order, sort_by]
};

export const useCalls = (data: GetCallsListDataType) => useQuery(queryKeys.calls(data),
  () => getCallsList(data)
);