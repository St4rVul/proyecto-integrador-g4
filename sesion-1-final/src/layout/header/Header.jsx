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
          <NavLink to="/enfermedades" end>
            Enfermedades
          </NavLink>
          <div className="dropdown-content">
            <NavLink to="/enfermedades/cirrosis">Cirrosis</NavLink>
            <NavLink to="/enfermedades/cancer-hepatico">Cáncer Hepático</NavLink>
            <NavLink to="/enfermedades/hepatitis">Hepatitis</NavLink>
            <NavLink to="/enfermedades/higado-graso">Hígado Graso</NavLink>
          </div>
        </div>
        <NavLink to="/quiz" end>
          Quiz
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
