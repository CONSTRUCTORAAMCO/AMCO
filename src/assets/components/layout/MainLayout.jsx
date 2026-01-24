import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "./Navbar";
import WhatsAppWidget from "../../modules/whatsapp/WhatsAppWidget";


const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Navbar fijo */}
      
      <Navbar />
        <Outlet />
      <Footer />

      <WhatsAppWidget />
    </div>
  );
};

export default MainLayout;
