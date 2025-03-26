import { Category } from "../commonFunctions";
import "./productFull.css";

export type ProductFullType = {
  price: number;
  photo: string;
  category: Category;
  name: string;
  desc: string;
};
export interface ProductFullProps {
  product: ProductFullType;
}

export const ProductFull = ({ product }: ProductFullProps) => {
  return (
    <div className="fullProduct">
      <p className="operationText">
        Price: {product.price.toPrecision(4)} $$
        <br />
        {product.photo}
        <br />
        {product.category.name}
        <br />
        {product.name}
        <br />
        {product.desc}
      </p>
      <button>InCart</button>
    </div>
  );
};
