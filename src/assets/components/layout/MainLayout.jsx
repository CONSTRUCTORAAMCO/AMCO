import { Outlet } from "react-router-dom";
import Footer from "../../modules/footer/Footer";
import Navbar from "./Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar fijo */}
      <Navbar />

      {/* Contenido principal */}
      <div className="flex-1 pt-20">
        {/* pt-20 = altura del navbar (h-20) */}

        <main>
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
