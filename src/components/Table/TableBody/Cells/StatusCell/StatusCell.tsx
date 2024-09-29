import { FC } from "react";
import { STATUS_VALUES } from "api/types";

import { ReactComponent as OutgoingCall } from "shared/assets/icons/outgoingCall.svg";
import { ReactComponent as BadOutgoingCall } from "shared/assets/icons/badOutgoingCall.svg";

type StatusCellProps = {
  status: STATUS_VALUES
}

export const StatusCell: FC<StatusCellProps> = ({ status }) => {

  let icon;

  switch (status) {
    case STATUS_VALUES.BAD_OUTGOING_CALL:
      icon = <BadOutgoingCall/>;
      break;

    case STATUS_VALUES.OUTGOING_CALL:
      icon = <OutgoingCall/>;
      break;

    default:
      icon = <OutgoingCall/>;
  }

  return <td>{icon}</td>;
};