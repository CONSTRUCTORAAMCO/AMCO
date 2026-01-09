import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* Parte superior */}
  
        {/* Branding */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>AMCO</h2>
          <p>
            Ubicacion: Edificio Business Center 93 - Oficina 403 - Cra, 16 #93a - 36, Bogotá D.C
          </p>
          <p>
           Correo Eletronico: constructoraamcoltda@gmail.com
          </p>
        </div>


      {/* Redes sociales */}
      <div className={styles.socials}>
          <a href="/">Inicio</a>
          <a href="/entrecalles">Entrecalles</a>
          <a href="/historial">Historial</a>
          <a href="/ubicacion">Ubicación</a>
          <a href="/contacto">Contacto</a>
      </div>

      <hr className={styles.line} />

      {/* Parte inferior (se queda igual) */}
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
