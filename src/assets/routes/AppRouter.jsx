import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Entrecalles from "../modules/entrecalles/Entrecalles";
import Historialproyectos from "../modules/historialproyectos/Historialproyectos";
import Ubicacion from "../modules/ubicacion/Ubicacion";
import Formulario from "../modules/formulario/Formulario";
import Footer from "../modules/footer/Footer";

const AppRouter = () => {
  return (
    <Routes>
       <Route element={<MainLayout />}>
      <Route path="/" element={<Entrecalles />} />
      <Route path="/historialproyectos" element={<Historialproyectos />} />
      <Route path="/ubicacion" element={<Ubicacion />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/footer" element={<Footer />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
