import { NavLink } from "react-router";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="/miniBlanco.svg" alt="Logo" className="logo" />
      <nav className="nav">
        <NavLink to="/" end>
          Inicio
        </NavLink>
        <div className="dropdown">
          <NavLink to="/higado" end>
            Enfermedades
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/higado/cirrosis">Cirrosis</NavLink>
            <NavLink to="/higado/cancer-hepatico">Cáncer Hepático</NavLink>
            <NavLink to="/higado/hepatitis">Hepatitis</NavLink>
            <NavLink to="/higado/higado-graso">Hígado Graso</NavLink>
          </div>
        </div>
        <NavLink to="/quiz" end>
          Quiz
        </NavLink>
      </nav>
<<<<<<< Updated upstream
=======

      {/* Icono de usuario con texto "Entrar" */}
      <div className="user-menu" onClick={() => setMenuOpen(!menuOpen)}>
        <FaUserCircle className="user-icon" />
        <span className="user-text">Entrar</span> {/* Agregado el texto */}
        {menuOpen && (
          <div className="user-dropdown">
            <NavLink to="/login">Iniciar sesión</NavLink>
            <NavLink to="/register">Registrarse</NavLink>
          </div>
        )}
      </div>
>>>>>>> Stashed changes
    </header>
  );
};

export default Header;
