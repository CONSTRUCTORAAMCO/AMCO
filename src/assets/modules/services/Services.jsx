import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";

export default function Services() {
  const textRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.services}>
      <div ref={textRef} className={styles.container}>
        <h2 className={styles.mainTitle}>
          Constructora AMCO Ltda.
        </h2>
        <br />
        
        <div className={styles.twoColumnLayout}>
          {/* COLUMNA IZQUIERDA */}
          <div 
            ref={leftRef}
            className={`${styles.leftColumn} ${isVisible ? styles.slideInLeft : ''}`}
          >
            <div className={styles.subtitleBox}>
              <h3 className={styles.subtitle}>
                Construyendo Obras Civiles e Infraestructura con Excelencia en Colombia
              </h3>
              <div className={styles.accentLine}></div>
            </div>
            
            <div className={styles.contentBox}>
              <p className={styles.paragraph}>
               Constructora AMCO Ltda. es una empresa colombiana con una sólida trayectoria dedicada a la construcción de obras civiles,
               infraestructura y la promoción de proyectos propios a nivel nacional. Con sede principal en Bogotá, 
               la compañía se caracteriza por su compromiso con la calidad, la excelencia y la búsqueda del 
               desarrollo sostenible en cada uno de sus procesos.
              </p>
              
           
              

              
          
            </div>
          </div>
          
          
          <div 
            ref={rightRef}
            className={`${styles.rightColumn} ${isVisible ? styles.slideInRight : ''}`}
          >
            <div className={styles.projectsHeader}>
              <div className={styles.badge}>PROYECTOS DESTACADOS</div>
              <h3 className={styles.projectsTitle}>Proyectos y Clientes Destacados</h3>
              <p className={styles.projectsIntro}>
                AMCO ha colaborado en importantes proyectos para clientes del sector público y privado
              </p>
            </div>
            
            <div className={styles.projectsGrid}>
              {[
                "Centro Comercial Cedritos 151",
                "Nuevo comando Policía de Bogotá", 
                "SENA de Bronx",
                "Bodega Popular Corabastos",
                "Personería De Bogotá",
                "Universidad Libre Bogotá",
                "Gobernación de Cundinamarca"
              ].map((project, index) => (
                <div 
                  key={index} 
                  className={styles.projectCard}
                  style={{ animationDelay: `${0.2 + (index * 0.1)}s` }}
                >
                  <div className={styles.projectNumber}>0{index + 1}</div>
                  <div className={styles.projectName}>{project}</div>
                  <div className={styles.projectLine}></div>
                </div>
              ))}
            </div>
            
       
          </div>
        </div>
      </div>
    </section>
  );
}

