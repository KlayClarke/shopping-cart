import { useParams } from "react-router-dom";
import { getProducts } from "./data";

const ShopItem = () => {
  let products = getProducts();
  let params = useParams();

  return (
    <div>
      <img src={products[params.id]["img"]}></img>
      <h2>{products[params.id]["name"]}</h2>
      <h3>{products[params.id]["description"]}</h3>
      <h3>{products[params.id]["price"]}</h3>
      <button>Add To Cart</button>
    </div>
  );
};

export default ShopItem;
