import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./navBar.css";

// 3. Remplazar etiquetas HTML <a> por componentes <Link>
function NavBar() {
  return (
    <nav className="nav-menu">
      <Link to="/">
        <h3>LOGO</h3>
      </Link>

      <Link to="/category/remeras">Remeras</Link>
      <Link to="/category/accesorios">Accesorios</Link>
      <Link to="/category/gorros">Gorros</Link>
      <CartWidget />
    </nav>
  );
}

export default NavBar;