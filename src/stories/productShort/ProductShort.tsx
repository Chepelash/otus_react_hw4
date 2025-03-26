import "./productShort.css";

export type ProductShortType = {
  price: number;
  photo: string;
  name: string;
  desc: string;
};
export interface ProductShortProps {
  product: ProductShortType;
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
