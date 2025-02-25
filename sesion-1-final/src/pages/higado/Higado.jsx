import { Outlet, useLocation } from "react-router";
import "./Higado.css";

const Higado = () => {
  const location = useLocation();
  const userData = location.state?.userData;

  return (
    <>
      <h1>Enfermedades del Hígado</h1>
      <p>{userData?.displayName}</p>
      <Outlet />
    </>
  );
};

export default Higado;
