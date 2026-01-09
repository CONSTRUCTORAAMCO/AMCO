import Footer from "../../modules/footer/Footer";
import Ubicacion from "../../modules/ubicacion/Ubicacion";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Ubicacion />

        <main style={{ padding: "20px", width: "100%" }}>
          <Outlet />
        </main>
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;

