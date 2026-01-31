import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "./Navbar";
const WhatsAppWidget = lazy(() => import("../../modules/whatsapp/WhatsAppWidget"));

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
      <Suspense fallback={<div></div>}>
        <WhatsAppWidget />
      </Suspense>
    </div>
  );
};

export default MainLayout;
