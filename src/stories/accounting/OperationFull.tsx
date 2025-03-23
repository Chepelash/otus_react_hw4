import { Operation } from "./operationFunctions";
import "./fullOperation.css";
import { Button } from "./Button";

export interface OperationFullProps {
  operation: Operation;
}

export const OperationFull = ({ operation }: OperationFullProps) => {
  return (
    <>
      <div className="fullOperation">
        <p className="operationText">
          {operation.type} {operation.amount.toPrecision(4)} $$
          <br />
          {operation.category.name}
          <br />
          {operation.name}
          <br />
          {operation.desc}
          <br />
          Creation date: {operation.createdAt}
        </p>
        <Button label="Edit" />
      </div>
    </>
  );
};
