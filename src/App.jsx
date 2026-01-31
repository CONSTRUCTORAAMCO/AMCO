import WhatsAppWidget from "./assets/modules/whatsapp/WhatsAppWidget";
import AppRouter from "./routes/AppRouter";
import VistaProyecto from "./vistasproyectos/vistaproyecto";

import "./App.css";

function App() {
  return <AppRouter />;
  <WhatsAppWidget />;
  <Route
  path="/vistaproyecto/:id"
  element={<VistaProyecto />}
/>
}

export default App;
