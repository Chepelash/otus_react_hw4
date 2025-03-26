import "./cartButton.css";

export interface CartButtonProps {
  counter: number;
}

/** Primary UI component for user interaction */
export const CartButton = ({ counter }: CartButtonProps) => {
  if (counter === 0) {
    return (
      <div className="counterDiv">
        <button className="buyButton">Buy now</button>
      </div>
    );
  }
  return (
    <div className="counterDiv">
      <button className="counterDivButton">-</button>
      <div className="counterDivCounter">{counter}</div>
      <button className="counterDivButton">+</button>
    </div>
  );
};
