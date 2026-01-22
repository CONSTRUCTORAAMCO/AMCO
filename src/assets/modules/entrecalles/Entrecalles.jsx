import React, { useState, useEffect } from "react";
import styles from "./Entrecalles.module.css";

const EntreCalles = () => {
  const videoUrl = "https://www.youtube.com/watch?v=k5RfEowqxgI";
  const videoId = videoUrl.split("v=")[1];
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    // Efecto de scroll para animaciones
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(`.${styles["fade-in"]}`).forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.wrapper}>
      {/* Fondo decorativo */}
      <div className={styles.backgroundElements}>
        <div className={styles.gradientCircle1}></div>
        <div className={styles.gradientCircle2}></div>
        <div className={styles.gridLines}></div>
      </div>

      <div className={styles.container}>
        {/* TEXTO */}
        <div className={`${styles.textSection} ${styles["fade-in"]}`}>
          <div className={styles.content}>
            <div className={styles.badge}>PROYECTO EMBLEMÁTICO</div>

            <h1 className={styles.title}>
              <span className={styles.titleMain}>Entre</span>
              <span className={styles.titleAccent}>Calles</span>
            </h1>

            <p className={styles.description}>
              En la intersección de la Avenida 19 con la Carrera Séptima nace{" "}
              <span className={styles.highlight}>un proyecto que redefine</span>{" "}
              el centro de Bogotá. Un rascacielos que no solo toca el cielo, sino que{" "}
              <span className={styles.highlight}>transforma la manera de habitar</span>{" "}
              la ciudad.
            </p>

            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statLabel}>Metros de altura</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>2026</div>
                <div className={styles.statLabel}>Año de inauguración</div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>75</div>
                <div className={styles.statLabel}>Pisos</div>
              </div>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📍</div>
                <div>
                  <h4 className={styles.featureTitle}>Ubicación privilegiada</h4>
                  <p className={styles.featureDesc}>Av. 19 x Cra. Séptima</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🏆</div>
                <div>
                  <h4 className={styles.featureTitle}>Rascacielos regional</h4>
                  <p className={styles.featureDesc}>La más alta de la región</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🤝</div>
                <div>
                  <h4 className={styles.featureTitle}>Centro urbano renovado</h4>
                  <p className={styles.featureDesc}>Impacto social positivo</p>
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryButton}
                onClick={() => setIsVideoVisible(true)}
              >
                <span className={styles.playIcon}>▶</span>
                Ver video del proyecto
              </button>
              <a 
                href={videoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                Ver en YouTube
              </a>
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <div className={`${styles.videoSection} ${styles["fade-in"]}`}>
          <div className={styles.videoContainer}>
            <div className={styles.videoCard}>
              <div className={styles.videoWrapper}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=${isVideoVisible ? 1 : 0}`}
                  title="Entre Calles - Proyecto emblemático de Bogotá"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              <div className={styles.videoOverlay}>
                <div className={styles.videoBadge}>VIDEO DEMOSTRATIVO</div>
                <h3 className={styles.videoTitle}>Descubre la experiencia</h3>
                <p className={styles.videoDesc}>
                  Recorrido virtual por el proyecto que transformará el corazón de Bogotá
                </p>
              </div>
            </div>
            
            <div className={styles.socialProof}>
              <div className={styles.quote}>
                "Un hito arquitectónico para Bogotá y Latinoamérica"
              </div>
              <div className={styles.source}>— Revista Arquitectura Hoy</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer moderno */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>ENTRE CALLES</div>
          <div className={styles.footerLinks}>
            <span>Proyecto en desarrollo</span>
            <span>•</span>
            <span>Bogotá, Colombia</span>
            <span>•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default EntreCalles;