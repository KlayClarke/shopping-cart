import { getProducts } from "./data";
import { Link } from "react-router-dom";

const Shop = () => {
  let products = getProducts();
  return (
    <div>
      <div>
        <div>
          {products.map((product) => (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="shop-item"
            >
              {product.name} | ${product.price}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
