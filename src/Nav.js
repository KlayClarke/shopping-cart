import { Link } from "react-router-dom";
import CartContext from "./Cart/CartContext";
import { useContext, useEffect } from "react";

const Nav = () => {
  let cart = useContext(CartContext);

  return (
    <nav>
      <Link to={"/"} className="nav-link logo">
        Logo
      </Link>
      <ul>
        <li>
          <Link to={"/shop"} className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to={"/cart"} className="nav-link">
            Cart[{cart.length}]
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
