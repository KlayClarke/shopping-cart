import { useContext } from "react";
import CartContext from "./CartContext";

const Cart = () => {
  let cart = useContext(CartContext);
  let total = 0;

  for (let product of cart) {
    total += product.price;
  }

  return (
    <div>
      <h1>This is cart</h1>
      <h2>Grand Total: {total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
