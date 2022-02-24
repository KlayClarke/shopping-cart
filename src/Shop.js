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
              to={`/shop/${products.indexOf(product)}`}
              key={products.indexOf(product)}
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
