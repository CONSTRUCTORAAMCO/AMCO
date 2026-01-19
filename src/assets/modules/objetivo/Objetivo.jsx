import { useEffect, useState } from "react";
import styles from "./objetivo.module.css";

import imagenProyecto from "../../../assets/img/objetivosocialimg.png";
import videoBg from "../../../assets/video/21233-316116300_small.mp4";

const Objetivo = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* Detectar móvil */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  /* Animación scroll */
  useEffect(() => {
    const texto = document.querySelector(`.${styles.reveal}`);
    if (!texto) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          texto.classList.add(styles.active);
        } else {
          texto.classList.remove(styles.active);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(texto);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.objetivoSection}>
      {/* IZQUIERDA */}
      <div className={styles.leftBox}>
        <video
          className={styles.videoBg}
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={`${styles.glassOverlay} ${styles.reveal}`}>
          <h2>OBJETO SOCIAL</h2>
          <p>
            Constructora AMCO Ltda. se dedica a la planeación, diseño, desarrollo,
            gerencia y ejecución de proyectos de construcción en los sectores de
            vivienda, oficinas, comercio, institucional e industrial, bajo
            estrictas normas técnicas y de calidad, contribuyendo al desarrollo
            urbano sostenible de Colombia.
          </p>
        </div>
      </div>

      {/* DERECHA (solo desktop) */}
      {!isMobile && (
        <div className={styles.rightBox}>
          <img src={imagenProyecto} alt="Proyecto AMCO" />
        </div>
      )}
    </section>
  );
};

export default Objetivo;
