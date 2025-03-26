import { createRandomPrice, createRandomString } from "../commonFunctions";
import { ProductShortType } from "./ProductShort";

export const createRandomProductShort = (): ProductShortType => {
  return {
    price: createRandomPrice(),
    photo: "randPhoto_" + createRandomString(6),
    name: "randName_" + createRandomString(6),
    desc: "randDesc_" + createRandomString(6),
  };
};
