import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa"; // Icono de usuario
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src="/miniBlanco.svg" alt="Logo" className="logo" />
      <nav className="nav">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <div className="dropdown">
          <NavLink to="/enfermedades" end>
            Enfermedades
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/enfermedades/cirrosis">Cirrosis</NavLink>
            <NavLink to="/enfermedades/cancer-hepatico">
              Cáncer Hepático
            </NavLink>
            <NavLink to="/enfermedades/hepatitis">Hepatitis</NavLink>
            <NavLink to="/enfermedades/higado-graso">Hígado Graso</NavLink>
          </div>
        </div>
        <NavLink to="/quiz" end>
          Quiz
        </NavLink>
        <NavLink to="/contacto" end>
          Contacto
        </NavLink>
      </nav>

      {/* Icono de usuario */}
      <div className="user-menu">
        <FaUserCircle
          className="user-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="user-dropdown">
            <NavLink to="/login">Iniciar sesión</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
