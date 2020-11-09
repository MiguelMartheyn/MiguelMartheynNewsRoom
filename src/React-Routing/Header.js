import React from "react";
import { Link } from "react-router-dom";
import '../styles.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="nav-bar">
          <li>
            <Link className="nav-item" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/politica">
              Politica
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/internacionales">
              Internacionales
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/tecnologia">
              Tecnologia
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/espectaculos">
              Espectaculos
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/deportes">
              Deportes
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/diseno">
              Diseño
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/buscar">
              Buscar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
