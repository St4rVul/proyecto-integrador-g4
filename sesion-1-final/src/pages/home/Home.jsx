import { useNavigate } from "react-router";
import { useCallback } from "react";

import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    navigate("/organo3D", {
      state: { userData: { displayName: "Grupo 4" } },
    });
  }, [navigate]);

  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Bienvenido a la web 3D de el higado
      </motion.h1>

      <motion.button
        onClick={handleClick}
        className="home-button"
        aria-label="Ver organo 3D"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Ver más enfermedades
      </motion.button>
    </div>
  );
};

export default Home;
