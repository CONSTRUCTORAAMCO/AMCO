import { Routes, Route } from "react-router-dom";
import MainLayout from "../assets/components/layout/MainLayout";
import Home from "../assets/modules/home/home";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Agrega más rutas aquí si es necesario */}
      </Route>
    </Routes>
  );
};

export default AppRouter;