import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import NotFound from "./pages/not-found/NotFound";
import Higado from "./pages/higado/Higado";
import HigadoGraso from "./pages/higado/higado-graso/HigadoGraso";
import Cirrosis from "./pages/higado/cirrosis/Cirrosis"
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
        <Route path = "/perfil" element = {<Profile />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="*" element={<NotFound />} />
        <Route path="higado" element={<Higado />}>
        <Route path="higado-graso" element={<HigadoGraso />} />
        <Route path="cirrosis" element={<Cirrosis />} />
          
        </Route>
      </Routes>
    </Layout>
  </BrowserRouter>
);
