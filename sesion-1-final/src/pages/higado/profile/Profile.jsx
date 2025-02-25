import { useCallback } from "react";
import useAuthStore from "../../../stores/use-auth-store";
import { useNavigate } from "react-router";

const Profile = () => {
    const { userLogged, logout } = useAuthStore();
    const navigate = useNavigate();

    const HandleLogout = useCallback(() => {
        logout().then(() => navigate("/"))
    }, [logout, navigate]);   

    return (
        <>
        <h2>Perfil de usuario</h2>
        <p>Bienvenido!!! {userLogged?.displayname}</p>

        <h2>Cierre Sesión</h2>
        <button
        type = "button"
        title = "Cerrar Sesión"
        onClick = {HandleLogout}
        >
        Cerrar Sesión
        </button>

        
        </>
    );
};

export default Profile;