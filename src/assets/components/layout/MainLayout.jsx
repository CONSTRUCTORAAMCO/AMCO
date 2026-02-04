import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";
import Navbar from "./navbar";
const WhatsAppWidget = lazy(() => import("../../modules/whatsapp/whatsappwidget"));

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
