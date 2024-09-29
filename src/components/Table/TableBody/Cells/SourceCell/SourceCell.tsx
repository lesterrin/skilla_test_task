import { FC } from "react";

type SourceCellPropsType = {
  source: string
}
export const SourceCell: FC<SourceCellPropsType> = ({ source }) => {
  return <td>{source}</td>;
};