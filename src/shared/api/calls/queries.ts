import { useQuery } from "react-query"
import { getCallsList } from "shared/api/calls/requests"
import { GetCallsListDataType } from "shared/api/calls/types"

export const callsQueryKeys = {
  calls: ({ order, sort_by, date_start, date_end, in_out }: GetCallsListDataType) => [
    "calls",
    order,
    sort_by,
    date_start,
    date_end,
    in_out,
  ],
}

export const useCalls = (data: GetCallsListDataType) =>
  useQuery(callsQueryKeys.calls(data), () => getCallsList(data))
