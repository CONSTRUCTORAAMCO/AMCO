import { useEffect, useRef, useState } from "react";
import styles from "./Services.module.css";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function Services() {
  const textRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

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
          {t('services.title')}
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
                {t('services.subtitle')}
              </h3>
              <div className={styles.accentLine}></div>
            </div>
            
            <div className={styles.contentBox}>
              <p className={styles.paragraph}>
               {t('services.paragraph')}
              </p>
              
           
              

              
          
            </div>
          </div>
          
          
          <div 
            ref={rightRef}
            className={`${styles.rightColumn} ${isVisible ? styles.slideInRight : ''}`}
          >
            <div className={styles.projectsHeader}>
              <div className={styles.badge}>{t('services.badge')}</div>
              <h3 className={styles.projectsTitle}>{t('services.projects_title')}</h3>
              <p className={styles.projectsIntro}>
                {t('services.projects_intro')}
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
