import { Routes, Route } from "react-router-dom";
import MainLayout from "../assets/components/layout/MainLayout";
import { ComunidadesCarousel } from "../assets/modules/prototipos";
import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Entrecalles from "../pages/Entrecalles";
import Contacto from "../pages/Contacto";
import Proyectos from "../pages/Proyectos";

function App() {
  return (
 
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/entrecalles" element={<Entrecalles />} />
          <Route path="/prototipos" element={<ComunidadesCarousel />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Route>

      </Routes>
    
  );
}

export default App;
