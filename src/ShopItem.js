import { useContext } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "./data";
import CartContext from "./Cart/CartContext";

const ShopItem = () => {
  let products = getProducts();
  let params = useParams();
  let cart = useContext(CartContext);

  function addToCart(e) {
    for (let product of products) {
      if (product.id == e.target.id) {
        cart.push(product);
      }
    }
    console.log(cart);
  }

  let product;
  for (let p of products) {
    if (p.id == params.id) {
      product = p;
    }
  }

  return (
    <div>
      <img src={product["img"]} alt=""></img>
      <h2>{product["name"]}</h2>
      <h3>{product["description"]}</h3>
      <h3>${product["price"]}</h3>
      <button type="button" onClick={addToCart} id={product["id"]}>
        Add To Cart
      </button>
    </div>
  );
};

export default ShopItem;
