import { useNavigate } from "react-router";
import { useCallback } from "react";
import useAuthStore from "../../stores/use-auth-store";
import { FcGoogle } from "react-icons/fc"; // ícono de Google
import "./Login.css";

const Login = () => {
  const { loginGoogleWithPopUp } = useAuthStore();
  const navigate = useNavigate();

  const handleGoogleLogin = useCallback(() => {
    loginGoogleWithPopUp()
      .then(() => navigate("/perfil"))
      .catch(() => navigate("/login"));
  }, [loginGoogleWithPopUp, navigate]);

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form>
        <label>Email:</label>
        <input type="email" placeholder="Ingresa tu correo" />
        <label>Contraseña:</label>
        <input type="password" placeholder="Ingresa tu contraseña" />
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>O continúa con:</p>
      <button className="google-login" onClick={handleGoogleLogin}>
        <FcGoogle className="google-icon" />
        Iniciar sesión con Google
      </button>
    </div>
  );
};

export default Login;
