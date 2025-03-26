import { Operation } from "../operationFunctions";
import "./shortOperation.css";

type OperationShortT = Pick<
  Operation,
  "type" | "amount" | "category" | "name" | "desc"
>;

export interface OperationShortProps {
  operation: OperationShortT;
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
