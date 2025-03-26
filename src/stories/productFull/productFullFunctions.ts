import {
  createRandomCategory,
  createRandomPrice,
  createRandomString,
} from "../commonFunctions";
import { ProductFullType } from "./ProductFull";

export const createRandomProductFull = (): ProductFullType => {
  return {
    price: createRandomPrice(),
    photo: "randPhoto_" + createRandomString(6),
    category: createRandomCategory(),
    name: "randName_" + createRandomString(6),
    desc: "randDesc_" + createRandomString(6),
  };
};
