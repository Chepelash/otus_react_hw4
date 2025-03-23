import { Product } from "../operationFunctions";
import "./productFull.css";

export interface ProductFullProps {
  product: Product;
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
