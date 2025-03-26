import {
  createRandomCategory,
  createRandomPrice,
  createRandomString,
  isLucky,
} from "../commonFunctions";
import { OperationShortType } from "./OperationShort";

export const createRandomShortOperation = (): OperationShortType => {
  return {
    type: isLucky() ? "Profit" : "Cost",
    name: "operationName_" + createRandomString(6),
    desc: "operationDesc_" + createRandomString(6),
    amount: createRandomPrice(),
    category: createRandomCategory(),
  };
};
