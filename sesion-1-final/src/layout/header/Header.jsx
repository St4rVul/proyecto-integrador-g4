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
    </header>
  );
};

export default Header;
