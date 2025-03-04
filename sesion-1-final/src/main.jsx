import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
<<<<<<< Updated upstream
import Higado from "./pages/higado/Higado";
import HigadoGraso from "./pages/higado/higado-graso/HigadoGraso";
import Cirrosis from "./pages/higado/cirrosis/Cirrosis"
=======
import Cirrhosis from "./pages/enfermedades/Cirrhosis";
import LiverCancer from "./pages/enfermedades/LiverCancer";
import Hepatitis from "./pages/enfermedades/Hepatitis";
import FattyLiver from "./pages/enfermedades/FattyLiver";
import Contact from "./pages/contact/Contact.jsx";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register.jsx";
import Layout from "./layout/Layout";
import Profile from "./pages/profile/profile";
import Organo3D from "./pages/organo3D/Organo3D";
import House from "./pages/organo3D/models-3d/House";
import Liver from "./pages/organo3D/models-3d/Liver";
import "./pages/organo3D/models-3d/Liver";
>>>>>>> Stashed changes
import "./index.css";
import Layout from "./layout/Layout";
import Profile from "./pages/higado/profile/profile";


// import App from "./App";

createRoot(document.getElementById("root")).render(
  // <App />
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
<<<<<<< Updated upstream
        <Route path = "/perfil" element = {<Profile />} />
        <Route path="quiz" element={<Quiz />} />
=======
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/enfermedades" element={<NotFound />} />
        <Route path="/enfermedades/cirrosis" element={<Cirrhosis />} />
        <Route path="/enfermedades/cancer-hepatico" element={<LiverCancer />} />
        <Route path="/enfermedades/hepatitis" element={<Hepatitis />} />
        <Route path="/enfermedades/higado-graso" element={<FattyLiver />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/acerca-de" element={<About />} />
        <Route path="/organo3D" element={<Organo3D />} />
        <Route path="/organo3D/models-3d/Liver" element={<Liver />} />
        {/* <Route path="/organo3D/models-3d/House" element={<House />} /> */}
        
>>>>>>> Stashed changes
        <Route path="*" element={<NotFound />} />
        <Route path="higado" element={<Higado />}>
        <Route path="higado-graso" element={<HigadoGraso />} />
        <Route path="cirrosis" element={<Cirrosis />} />
          
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
