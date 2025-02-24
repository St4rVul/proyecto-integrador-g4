import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
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
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index path="/" element={<Home />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
