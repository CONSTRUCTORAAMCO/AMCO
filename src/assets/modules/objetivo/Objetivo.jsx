import { useEffect, useState } from "react";
import styles from "./objetivo.module.css";
import { useLanguage } from "../../../i18n/languagecontext.jsx";

import imagenProyecto from "../../../assets/img/objetivosocialimg.png";
import videoBg from "../../../assets/video/21233-316116300_small.mp4";

const Objetivo = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

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
          <h2>{t('objective.title')}</h2>
          <p>
            {t('objective.paragraph')}
          </p>
        </div>
      </div>

      {/* DERECHA (solo desktop) */}
      {!isMobile && (
        <div className={styles.rightBox}>
          <img src={imagenProyecto} alt={t('objective.image_alt')} />
        </div>
      )}
    </section>
  );
};

export default Objetivo;