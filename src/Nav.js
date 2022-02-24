import { Link } from "react-router-dom";

const Nav = () => {
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
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
