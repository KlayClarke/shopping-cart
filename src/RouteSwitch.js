import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";
import ShopItem from "./ShopItem";
import CartContext from "./Cart/CartContext";

let cart = [];

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <CartContext.Provider value={cart}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page Not Found</p>
              </main>
            }
          />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  );
};
export default RouteSwitch;
