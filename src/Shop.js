import { useState } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([
    {
      img: "https://cdni.llbean.net/is/image/wim/510981_1155_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbprod/A0211793_2",
      price: 43.95,
      name: "Graffi Cotton Sweater",
      description:
        "Artsy shirt made of love and hard work. Comforts the skin and fits true to size.",
    },
    {
      img: "https://www.chloe.com/product_image/54176787vq/f/w1080.jpg",
      price: 76.82,
      name: "Graffi Cotton Trousers",
      description:
        "Artsy pair of trousers made of love and hard work. Warning: These pants are so comfortable, they may feel as if one is wearing no pants.",
    },

    {
      img: "https://cdn.shopify.com/s/files/1/0193/6253/products/2706352897_1600x.jpg?v=1638487619",
      price: 39.85,
      name: "Graffi Circ Shades",
      description: "A beautiful pair of shades that filters blue light",
    },
  ]);

  return (
    <div>
      <div id="grid-container">
        <div id="cards-grid">
          {products.map((product) => (
            <div>
              <h3 key={products.indexOf(product)}>
                <Link to={`/shop/${products.indexOf(product)}`}>
                  {product.name} | ${product.price}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
