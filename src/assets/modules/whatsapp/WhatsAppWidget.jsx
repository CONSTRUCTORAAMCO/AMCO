import { useEffect, useState } from "react";
import "./whatsapp.css";

import whatsappIcon from "../../img/WhatsApp_icon.png";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 1200);
  }, []);

  const phoneNumber = "573001234567";
  const message = "Hola 👋, quisiera más información sobre el proyecto";

  return (
    <>
      {/* Botón flotante */}
      <button className={`wa-float ${open ? "active" : ""}`} onClick={() => setOpen(!open)}>
        <img src={whatsappIcon} alt="WhatsApp" />
      </button>

      {/* Ventana de chat - siempre montada para animar via clases */}
      <div className={`wa-chat ${open ? "open" : "closed"}`}>
          <div className="wa-header">
            <i className="ri-customer-service-2-fill wa-icon"></i>

            <div>
              <strong>Asesor en línea</strong>
              <p>En línea</p>
            </div>

            <span className="wa-close" onClick={() => setOpen(false)}>
              ✕
            </span>
            </div>

          <div className="wa-body">
            <div className="wa-message">
              Hola 👋 <br />
              ¿En qué puedo ayudarte?
            </div>
          </div>

          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(   message )}`} target="_blank" rel="noopener noreferrer" className="wa-button">
            <img src={whatsappIcon} alt="" />
            Comenzar chat
          </a>
        </div>
    </>
  );
}
