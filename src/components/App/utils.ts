import { CallType, STATUS_VALUES } from "api/types";
import { CALL_TYPES } from "components/Filters/TypeFilter/constants";

export const filterCallsData = (data: CallType[], callType: CALL_TYPES) => {
  if (callType === CALL_TYPES.ALL) return data;

  return data.filter(({ status }) => status === STATUS_VALUES[callType]);

};