import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/footer.jsx";
import Navbar from "./navbar.jsx";
const WhatsAppWidget = lazy(() => import("../../modules/whatsapp/whatsappwidget.jsx"));

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
