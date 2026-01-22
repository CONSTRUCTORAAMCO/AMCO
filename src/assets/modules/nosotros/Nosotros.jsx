import { useEffect, useRef } from "react";
import styles from "./Nosotros.module.css";

export default function Nosotros() {
  // Referencias para las animaciones
  const mainTitleRef = useRef(null);
  const organizacionRef = useRef(null);
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const politicasRef = useRef(null);
  const timelineRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observar todos los elementos
    const elements = [
      mainTitleRef.current,
      organizacionRef.current,
      misionRef.current,
      visionRef.current,
      politicasRef.current,
      timelineRef.current,
      ...paragraphRefs.current.filter(Boolean)
    ];

    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className={styles.nosotros}>
      <div className={styles.container}>
        {/* TÍTULO PRINCIPAL */}
        <h1 ref={mainTitleRef} className={styles.mainTitle}>
          Nosotros
        </h1>

        {/* SEPARADOR */}
        <div className={styles.separator}></div>

        {/* SECCIÓN LA ORGANIZACIÓN */}
        <div ref={organizacionRef} className={styles.organizacion}>
          <h2 className={styles.organizacionTitle}>LA ORGANIZACIÓN</h2>
          
          <div className={styles.organizacionContent}>
            <div className={styles.empresaCard}>
              <h3 className={styles.empresaName}>Constructora AMCO Ltda.</h3>
              <div className={styles.empresaYear}>Fundada en 1973</div>
              <p className={styles.empresaDescription}>
                Empresa fundada en la ciudad de Bogotá con capital colombiano, dedicada al servicio de promoción, mercadeo, ventas, diseño, gerencia y construcción en general.
              </p>
            </div>
            
            <div className={styles.empresaCard}>
              <h3 className={styles.empresaName}>AMR Construcciones y CIA S.A.</h3>
              <div className={styles.empresaYear}>Fundada en el año 2000</div>
              <p className={styles.empresaDescription}>
                Empresa constituida con capital colombiano para complementar y expandir los servicios de la organización en el sector de la construcción.
              </p>
            </div>
          </div>
          
          <p 
            ref={el => paragraphRefs.current[0] = el}
            className={`${styles.organizacionText} ${styles.animatedParagraph}`}
          >
            LA ORGANIZACIÓN compuesta por Constructora AMCO Ltda., fundada en 1973, en la ciudad de Bogotá y AMR Construcciones y CIA S.A., en el año 2000; constituidas con capital colombiano, para dedicarse al servicio de promoción, mercadeo, ventas, diseño, gerencia y construcción en general, de proyectos que cubren entre otros, el sector de Vivienda, Institucional, oficinas, comercial e industrial.
          </p>
          
          <p 
            ref={el => paragraphRefs.current[1] = el}
            className={`${styles.organizacionText} ${styles.animatedParagraph}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Desde su fundación hasta la fecha ha hecho importantes aportes al desarrollo del País, a través de diversos programas de construcción tanto de vivienda como de obras institucionales tanto públicas como privadas, generando miles de empleos tanto directos como indirectos.
          </p>
        </div>

        {/* TIMELINE VISUAL */}
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>1973</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLabel}>Fundación AMCO</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2000</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLabel}>Fundación AMR</div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Presente</div>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineLabel}>Liderazgo Continuo</div>
          </div>
        </div>

        {/* SECCIÓN MISIÓN Y VISIÓN */}
        <div className={styles.misionVision}>
          <div ref={misionRef} className={styles.misionCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>🎯</div>
              <h3 className={styles.cardTitle}>Misión</h3>
              <p className={styles.cardText}>
                LA ORGANIZACIÓN compuesta por Constructora AMCO Ltda., AMR Construcciones y CIA S.A., es un grupo de empresas para el servicio de la Sociedad Colombiana, a través de la construcción de obras civiles y obras de infraestructura, complementando su labor con la promoción de proyectos propios; asegurando satisfacción a sus clientes a través de la calidad de los servicios.
              </p>
            </div>
          </div>
          
          <div ref={visionRef} className={styles.visionCard}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>👁️</div>
              <h3 className={styles.cardTitle}>Visión</h3>
              <p className={styles.cardText}>
                SER UNA EMPRESA CONSULTORA Y CONSTRUCTORA, líder, emprendedora, competitiva y comprometida con su futuro, con principios de calidad, fomentando la capacidad y el talento humano colombiano.
              </p>
            </div>
          </div>
        </div>

        {/* SEPARADOR */}
        <div className={styles.separator}></div>

        {/* SECCIÓN POLÍTICAS DE CALIDAD */}
        <div ref={politicasRef} className={styles.politicasCalidad}>
          <h2 className={styles.politicasTitle}>Políticas de Calidad</h2>
          
          <div className={styles.politicasContent}>
            <p 
              ref={el => paragraphRefs.current[2] = el}
              className={`${styles.politicasText} ${styles.animatedParagraph}`}
            >
              En CONSTRUCTORA AMCO LTDA., AMR CONSTRUCCIONES Y CIA S.A., la calidad es responsabilidad de todos los miembros de LA ORGANIZACIÓN. Se atiende con diligencia y preferencia las necesidades del cliente y se desarrollan los proyectos cumpliendo todas las especificaciones técnicas de ingeniería y arquitectura, enmarcadas en el ámbito de un sistema de gestión de la calidad cuyos requisitos internos establecidos por LA ORGANIZACIÓN, están acordes con normas contractuales.
            </p>
            
            <p 
              ref={el => paragraphRefs.current[3] = el}
              className={`${styles.politicasText} ${styles.animatedParagraph}`}
              style={{ transitionDelay: "0.1s" }}
            >
              LA ORGANIZACIÓN promueve el mejoramiento continuo de la eficacia del sistema de gestión de calidad, y del producto o servicio ofrecido. Se propende porque sus trabajos se realicen con los materiales, equipos adecuados y personal competente debidamente entrenado y comprometido con LA ORGANIZACIÓN y sus clientes.
            </p>
            
            <div className={styles.politicasHighlight}>
              <p className={styles.highlightText}>
                "La excelencia en la construcción es nuestro compromiso permanente con Colombia y su desarrollo."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}