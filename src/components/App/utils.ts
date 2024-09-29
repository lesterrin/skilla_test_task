import { CallType, STATUS_VALUES } from "api/types";
import { CALL_TYPES } from "components/Filters/TypeFilter/constants";
import { DateRangeType } from "components/Filters/DateFilter/types";

export const filterCallsData = (data: CallType[], callType: CALL_TYPES, dateRange?: DateRangeType) => {
  let resData = data;

  if (callType === CALL_TYPES.ALL) resData = data;
  else resData = data.filter(({ status }) => status === STATUS_VALUES[callType]);

  if (!dateRange) return resData;

  return resData.filter(({ date_notime }) => {
    const startsAtDate = new Date(dateRange.startsAt).getTime();
    const endsAtDate = new Date(dateRange.endsAt).getTime();
    const callDate = new Date(date_notime).getTime();
    console.log(callDate, callDate >= startsAtDate, callDate <= endsAtDate);
    return callDate >= startsAtDate && callDate <= endsAtDate;

  });

};