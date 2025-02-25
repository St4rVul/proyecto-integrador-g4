import "./Home.css";
import { useCallback } from "react";
import useAuthStore  from "../../stores/use-auth-store.js";
import { useNavigate } from "react-router";


const Home = () => {
  const {loginGoogleWithPopUp} = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp()
    .then(() => navigate("perfil"))
    .catch(() =>navigate("/"));
  }, [loginGoogleWithPopUp, navigate]);


  const handleClick = useCallback(() => {
    navigate("/higado", {
      state: { userData: { displayName: "Grupo 4" } },
    });
  }, [navigate]);

  return (
    <>
      <h1>Inicio</h1>
      <button onClick={handleClick}>Ver más enfermedades</button>

      <h2> Iniciar Sesión </h2>
      <button 
      type = "button"
      title = "Iniciar sesión con Google"
      onClick = {handleLogin}
      >
        Iniciar Sesión
      </button>
    </>
  );
};

export default Home;
