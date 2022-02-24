import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Home from "./Home";
import Nav from "./Nav";
import Shop from "./Shop";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
