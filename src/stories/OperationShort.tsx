import { Operation } from "./operationFunctions";
import "./shortOperation.css";

export interface OperationShortProps {
  operation: Operation;
}

export const OperationShort = ({ operation }: OperationShortProps) => {
  return (
    <>
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
    </>
  );
};
