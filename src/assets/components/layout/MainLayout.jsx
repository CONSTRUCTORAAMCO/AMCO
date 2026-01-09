import { Outlet } from "react-router-dom";
import Footer from "../../modules/footer/Footer";
import Ubicacion from "../../modules/ubicacion/Ubicacion";
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout">
      {/* Contenido principal */}
      <div className="layout-content">
        <Ubicacion />

        <main className="main">
          <Outlet />
        </main>
      </div>

      {/* Footer siempre al fondo y a ancho completo */}
      <Footer />
    </div>
  );
};

export default MainLayout;
