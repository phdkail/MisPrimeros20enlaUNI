import { Link } from "react-router-dom";
import logo from "../assets/scalogno.png";
import searchIcon from "../assets/search.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Contenedor del logo con clase específica */}
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Enlaces de navegación */}
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Del Evento</Link></li>
        <li><Link to="/teams">Participantes</Link></li>
        <li><Link to="/championships">Campeonatos</Link></li>
        <li><Link to="/results">Resultados</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        
        {/* Icono de búsqueda */}
        <li className="search-icon">
          <img src={searchIcon} alt="Buscar" />
        </li>
      </ul>
    </nav>
  );
}
