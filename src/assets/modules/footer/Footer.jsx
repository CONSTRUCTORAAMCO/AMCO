import styles from "./Footer.module.css";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      {/* Parte superior */}
      <div className={styles.top}>
        
        {/* Branding */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>AMCO</h2>

          <p className={styles.item}>
            <RiMapPinLine size={18} />
            <span>
              Edificio Business Center 93 - Oficina 403 - Cra 16 #93a - 36, Bogotá D.C
            </span>
          </p>

          <p className={styles.item}>
            <RiMailLine size={18} />
            <span>constructoraamcoltda@gmail.com</span>
          </p>
        </div>
        <br />

        {/* Redes / navegación */}
        <div className={styles.socials}>
          <a href="/">Inicio</a>
          <a href="/entrecalles">Entrecalles</a>
          <a href="/historial">Historial</a>
          <a href="/ubicacion">Ubicación</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>

      <hr className={styles.line} />

      {/* Parte inferior */}
      <div className={styles.bottom}>
        <span>© 2026 CONSTRUCTORA AMCO LTDA. Todos los derechos reservados.</span>

        <div className={styles.legal}>
          <a href="/terminos">Términos y condiciones</a>
          <a href="/privacidad">Política de privacidad</a>
        </div>
      </div>
    </footer>
  );
}
