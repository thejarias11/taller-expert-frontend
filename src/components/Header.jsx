import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Taller Expert</h1>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
