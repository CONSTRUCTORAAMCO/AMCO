import { useEffect, useState } from "react";
import styles from "./objetivo.module.css";

import imagenProyecto from "../../../assets/img/objetivosocialimg.png";
import videoBg from "../../../assets/video/21233-316116300_small.mp4";

const Objetivo = () => {
  const [isMobile, setIsMobile] = useState(false);

  /* Detectar móvil */
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  /* Animación del texto al hacer scroll */
  useEffect(() => {
  const texto = document.querySelector(".reveal");
  if (!texto) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        texto.classList.add("active");
      } else {
        texto.classList.remove("active");
      }
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(texto);

  return () => observer.disconnect();
}, []);


  return (
    <section className={styles.section}>
      
      {/* IZQUIERDA */}
      <div className={styles.leftBox}>
        <video
          className={styles.video}
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
        />

        <div className={`${styles.glassOverlay} reveal`}>
          <h2>OBJETO SOCIAL</h2>
          <p>
            Constructora AMCO Ltda. es la planeación, diseño, desarrollo,
            gerencia y ejecución de proyectos de construcción en los sectores
            de vivienda, oficinas, comercio, institucional e industrial en
            todo el territorio colombiano. La empresa se compromete a realizar
            obras bajo estrictas normas técnicas y de calidad, utilizando
            materiales y tecnologías de avanzada, con el fin de satisfacer las
            necesidades de sus clientes y contribuir al desarrollo urbano
            sostenible.
          </p>
        </div>
      </div>

      {/* DERECHA (SOLO DESKTOP) */}
      {!isMobile && (
        <div className={styles.rightBox}>
          <img src={imagenProyecto} alt="Proyecto AMCO" />
        </div>
      )}
    </section>
  );
};

export default Objetivo;
