export type Category = {
  id: string;
  name: string;
  photo?: string;
};
export type Operation = Cost | Profit;
type OperationData = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
};
export type Cost = {
  type: "Cost";
} & OperationData;
export type Profit = {
  type: "Profit";
} & OperationData;

/**
 * Возвращает 50/50
 * */
const isLucky = () => {
  return Math.random() > 0.5;
};

/**
 * Создает случайную строку с максимальной длиной 19
 * */
const createRandomString = (len?: number) => {
  if (typeof len === "number") {
    len = len > 19 ? 19 : len;
  }
  return Math.random().toPrecision(21).toString().substring(2, len);
};
/**
 * Создает случайное число от 0 до maxPrice
 * если maxPrice <= 0 maxPrice устанавливается 1000
 * */
const createRandomPrice = (maxPrice?: number) => {
  if (typeof maxPrice !== "number") {
    maxPrice = 1000;
  } else if (maxPrice <= 0) {
    maxPrice = 1000;
  }
  return Math.random() * maxPrice;
};
/**
 * Создает случайную категорию (Category)
 * */
const createRandomCategory = () => {
  return {
    id: createRandomString(),
    name: "categoryName_" + createRandomString(6),
    photo: "photo_" + createRandomString(10),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  return {
    type: isLucky() ? "Profit" : "Cost",
    id: createRandomString(),
    name: "operationName_" + createRandomString(6),
    desc: "operationDesc_" + createRandomString(6),
    createdAt: createdAt,
    amount: createRandomPrice(),
    category: createRandomCategory(),
  };
};

export type Product = {
  id: string;
  name: string;
  photo: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  return {
    id: createRandomString(),
    name: "productName_" + createRandomString(6),
    photo: "productPhoto_" + createRandomString(6),
    desc: "productDesc_" + createRandomString(6),
    createdAt: createdAt,
    oldPrice: createRandomPrice(),
    price: createRandomPrice(),
    category: createRandomCategory(),
  };
};
