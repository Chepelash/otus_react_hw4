import { Product } from "../operationFunctions";
import "./productShort.css";

export interface ProductShortProps {
  product: Product;
}
export const ProductShort = ({ product }: ProductShortProps) => {
  return (
    <div className="shortProduct">
      <p className="operationText">
        Price: {product.price.toPrecision(4)} $$
        <br />
        {product.photo}
        <br />
        {product.name}
        <br />
        {product.desc}
      </p>
      <button>InCart</button>
    </div>
  );
};
