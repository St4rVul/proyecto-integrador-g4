import { useNavigate } from "react-router";
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { FcGoogle } from "react-icons/fc";
import "./Register.css";

const Register = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  // Función para registro con Google (puedes ajustar si tienes lógica separada para registro)
  const handleGoogleRegister = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/register"));
  }, [loginGoogleWithPopUp, navigate]);

  return (
    <div className="register-container">
      <h2>Regístrate</h2>
      <form>
        <label>Nombre:</label>
        <input type="text" placeholder="Ingresa tu nombre" />

        <label>Email:</label>
        <input type="email" placeholder="Ingresa tu correo" />

        <label>Contraseña:</label>
        <input type="password" placeholder="Crea una contraseña" />

        <button type="submit">Registrarse</button>
      </form>
      <p>O regístrate con:</p>
      <button className="google-register" onClick={handleGoogleRegister}>
        <FcGoogle className="google-icon" />
        Registrarse con Google
      </button>
    </div>
  );
};

export default Register;
