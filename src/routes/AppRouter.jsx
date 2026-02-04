import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../assets/components/layout/mainlayout.jsx";
import ScrollToTop from "../assets/components/scrolltotop/scrollToTop";

const Home = lazy(() => import("../pages/Home.jsx"));
const Nosotros = lazy(() => import("../pages/nosotros.jsx"));
const Entrecalles = lazy(() => import("../pages/entrecalles.jsx"));
const Contacto = lazy(() => import("../pages/contacto.jsx"));
const Proyectos = lazy(() => import("../pages/proyectos.jsx"));
const Politicaprivacidad = lazy(() => import("../pages/politicaprivacidad.jsx"));
const Tyc = lazy(() => import("../pages/tyc.jsx"));
const VistasProyecto = lazy(() =>
  import("../assets/modules/vistasproyectos/vistaproyecto").then((module) => ({
    default: module.default,
  }))
);

const ComunidadesCarousel = lazy(() =>
  import("../assets/modules/prototipos").then((module) => ({
    default: module.ComunidadesCarousel,
  }))
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/entrecalles" element={<Entrecalles />} />
          <Route path="/prototipos" element={<ComunidadesCarousel />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/politicaprivacidad" element={<Politicaprivacidad />} />
          <Route path="/tyc" element={<Tyc />} />
          <Route path="/vistaproyecto/:id" element={<VistasProyecto />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;