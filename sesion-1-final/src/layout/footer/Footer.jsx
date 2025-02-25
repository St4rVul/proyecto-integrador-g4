import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Quiénes Somos</h4>
        <p>
          Somos estudiantes de desarrollo de software creando una página médica.
        </p>
      </div>

      <div className="footer-section">
        <h4>Enlaces Útiles</h4>
        <ul>
          <li>
            <Link to="/enfermedades/cirrosis">Cirrosis</Link>
          </li>
          <li>
            <Link to="/enfermedades/cancer-hepatico">Cáncer Hepático</Link>
          </li>
          <li>
            <Link to="/enfermedades/hepatitis">Hepatitis</Link>
          </li>
          <li>
            <Link to="/enfermedades/higado-graso">Hígado Graso</Link>
          </li>
          <li>
            <Link to="/quiz">Quiz</Link>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Contacto</h4>
        <p>Email: LiverCare@prueba.com</p>
        <p>Teléfono: +57 123 456 7890</p>
      </div>

      <div className="footer-section">
        <h4>¿Necesita Ayuda?</h4>
        <Link to="/contacto">Contáctenos</Link>
      </div>
    </footer>
  );
};

export default Footer;
