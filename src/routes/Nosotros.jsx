import { Routes, Route } from "react-router-dom";
import Agentes from "./nosotros/Agentes";
import Estructura from "./nosotros/Estructura";
import Etica from "./nosotros/Etica";
import QuienesSomos from "./nosotros/QuienesSomos";
import Resena from "./nosotros/Resena";

export default function Nosotros() {
  return (
    <Routes>
      <Route
        path="/agentes-asociados/:agente?"
        element={<Agentes />}
        component={() => {
          window.location.replace = "example.com";
          return null;
        }}
      />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/estructura" element={<Estructura />} />
      <Route path="/agentes-asociados" element={<Agentes />} exact/>
      <Route path="/resena-historica" element={<Resena />} />
      <Route path="/etica" element={<Etica />} />
    </Routes>
  );
}
