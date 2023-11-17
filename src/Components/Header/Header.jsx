import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header">
      <div className="flex">
        <img src={logo} className="lg:w-8 w-4" alt="img" />
        <h2 className="ms-3 text-xl font-semibold text-green-500 band">
          {" "}
          ShopBD{" "}
        </h2>
      </div>
      <div className="menu">
        <a className="me-4" href="/shop">
          Shop
        </a>
        <a className="me-4" href="/oder">
          Order
        </a>
        <a className="me-4" href="/inventory">
          Inventory
        </a>
        <a className="me-4" href="/login">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;