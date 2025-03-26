import { Category } from "../commonFunctions";
import "./shortOperation.css";

export type OperationShortType = CostShort | ProfitShort;
type OperationShortData = {
  name: string;
  desc?: string;
  amount: number;
  category: Category;
};
type CostShort = {
  type: "Cost";
} & OperationShortData;
type ProfitShort = {
  type: "Profit";
} & OperationShortData;

export interface OperationShortProps {
  operation: OperationShortType;
}

export const OperationShort = ({ operation }: OperationShortProps) => {
  return (
    <div className="shortOperation">
      <p className="operationText">
        {operation.type} {operation.amount.toPrecision(4)} $$
        <br />
        {operation.category.name}
        <br />
        {operation.name}
        <br />
        {operation.desc}
      </p>
    </div>
  );
};
