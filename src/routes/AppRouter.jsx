import { Routes, Route } from "react-router-dom";
import MainLayout from "../assets/components/layout/MainLayout";
import { ComunidadesCarousel } from "../assets/modules/prototipos";
import Home from "../pages/Home";
import Contacto from "../pages/Contacto";

function App() {
  return (
 
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/prototipos" element={<ComunidadesCarousel />} />
        </Route>

      </Routes>
    
  );
}

export default App;
