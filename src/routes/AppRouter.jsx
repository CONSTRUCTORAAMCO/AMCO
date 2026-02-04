import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "../assets/components/layout/MainLayout.jsx"; // ✅ Mayúscula
import ScrollToTop from "../assets/components/scrolltotop/scrolltotop.jsx/ ✅ Mayúscula + extensión

const Home = lazy(() => import("../pages/Home.jsx"));
const Nosotros = lazy(() => import("../pages/nosotros.jsx")); // ✅ Mayúscula
const Entrecalles = lazy(() => import("../pages/entrecalles.jsx")); // ✅ Mayúscula
const Contacto = lazy(() => import("../pages/contacto.jsx")); // ✅ Mayúscula
const Proyectos = lazy(() => import("../pages/proyectos.jsx")); // ✅ Mayúscula
const Politicaprivacidad = lazy(() => import("../pages/politicaprivacidad.jsx")); // ✅ Mayúscula
const Tyc = lazy(() => import("../pages/tyc.jsx")); // ✅ Mayúscula
const VistasProyecto = lazy(() =>
  import("../assets/modules/vistasproyectos/vistaproyecto.jsx").then((module) => ({ // ✅ Agregada extensión
    default: module.default,
  }))
);

const ComunidadesCarousel = lazy(() =>
  import("../assets/modules/prototipos.jsx").then((module) => ({ // ✅ Agregada extensión
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