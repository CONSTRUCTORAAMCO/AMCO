import React, { useEffect, useRef } from "react";
import styles from "./Entrecalles.module.css";
import { Building2, Target, Users, Award, Clock, ChevronRight, CheckCircle, Calendar } from "lucide-react";
import edificioImage from '../../img/Entrecallesimg1.png'; 

const EntreCalles = () => {
  const sectionsRef = useRef([]);
  
  // Definir las referencias que faltaban
  const mainTitleRef = useRef(null);
  const statsRef = useRef(null);

  // Animaciones de scroll
  useEffect(() => {
    // Animación inicial de elementos principales
    const timer = setTimeout(() => {
      if (mainTitleRef.current) {
        mainTitleRef.current.classList.add(styles.visible);
      }
      if (statsRef.current) {
        statsRef.current.classList.add(styles.visible);
      }
    }, 100);

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

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Galería de imágenes del proyecto
  const projectImages = [
    {
      id: 1,
      title: "Diseño Arquitectónico",
      description: "Concepto moderno e innovador",
      category: "Diseño"
    },
    {
      id: 2,
      title: "Vistas Panorámicas",
      description: "360° de Bogotá desde las alturas",
      category: "Vistas"
    },
    {
      id: 3,
      title: "Espacios Comunes",
      description: "Áreas sociales de lujo",
      category: "Amenidades"
    },
    {
      id: 4,
      title: "Tecnología Integrada",
      description: "Smart building de última generación",
      category: "Tecnología"
    },
    {
      id: 5,
      title: "Sostenibilidad",
      description: "Diseño eco-amigable y eficiente",
      category: "Sostenibilidad"
    },
    {
      id: 6,
      title: "Ubicación Privilegiada",
      description: "Centro histórico de Bogotá",
      category: "Ubicación"
    }
  ];

  // Características del proyecto
  const projectFeatures = [
    {
      icon: <Target size={24} />,
      title: "Altura Récord",
      description: "300+ metros - Más alto de Colombia"
    },
    {
      icon: <Users size={24} />,
      title: "Uso Mixto",
      description: "Residencial, comercial y oficinas"
    },
    {
      icon: <Award size={24} />,
      title: "Certificación LEED",
      description: "Sostenibilidad y eficiencia energética"
    },
    {
      icon: <Clock size={24} />,
      title: "Entrega 2026",
      description: "Proyecto en construcción avanzada"
    }
  ];

  return (
    <>
      {/* HERO SECTION */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.companyLogo}>
            <Building2 size={64} className={styles.logoIcon} />
            <div className={styles.companyName}>
              <h1 className={styles.companyMainName}>ENTRECALLES</h1>
              <p className={styles.companySubtitle}>CONSTRUCTORA AMCO LTDA</p>
            </div>
          </div>
          <h2 ref={mainTitleRef} className={styles.heroTitle}>
            Construyendo el Futuro de Colombia
          </h2>
          <p className={styles.heroSubtitle}>
            Más de 50 años de experiencia, innovación y excelencia en construcción
          </p>
        </div>
      </div>
      


      {/* STATS BAR - REEMPLAZADO POR EL MENSAJE */}
      <div ref={statsRef} className={styles.statsBar}>
        <div className={styles.messageBox}>
          <p className={styles.messageText}>
            La columna vertebral de un nuevo centro.
          </p>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.contentSection}>
        <div className={styles.container}>
          {/* HISTORIA DEL PROYECTO */}
          <div 
            ref={el => sectionsRef.current[0] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Historia del Proyecto</h2>
              
            </div>
            
            <div className={styles.historyContent}>
              <div className={styles.historyText}>
                <h3>Torre EntreCalles</h3>
                <p>
                  <strong>Torre EntreCalles nació hace más de veinte años.</strong> En ese momento 
                  visualizamos el futuro del centro de Bogotá con desarrollos modernos en perfecta 
                  integración con el patrimonio urbano.
                </p>
                <p>
                  Hoy, Torre EntreCalles rediseña el espacio urbano de nuestro querido centro. 
                  Un hito de gran altura único en su tipo, de uso mixto, que elevará el nivel 
                  para el desarrollo inmobiliario en la región y satisfará la demanda reprimida 
                  de los consumidores de lugares transitables y vibrantes donde vivir, trabajar 
                  y jugar es una constante de disfrute, armonioso y placentero.
                </p>
              </div>
              
              <div className={styles.historyStats}>
                <div className={styles.statItem}>
                  <Calendar className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>20+</div>
                    <div className={styles.statLabel}>Años de planeación</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Target className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>300m</div>
                    <div className={styles.statLabel}>Altura total</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Building2 className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>75</div>
                    <div className={styles.statLabel}>Niveles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMPACTO URBANO */}
          <div 
            ref={el => sectionsRef.current[1] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Impacto Urbano</h2>
              <div className={styles.sectionDivider}></div>
            </div>
            
            <div className={styles.impactContent}>
              <div className={styles.impactIntro}>
                <h3>EntreCalles aborda las carencias urbanas de Bogotá y su centro de tres maneras clave:</h3>
              </div>
              
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>01</div>
                  <h4>Renovación Urbana</h4>
                  <p>
                    Ante la saturación de corredores de oficinas tradicionales, el centro se 
                    destaca como una oportunidad para proyectos inmobiliarios a través de 
                    renovación urbana.
                  </p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>02</div>
                  <h4>Vivienda de Calidad</h4>
                  <p>
                    Atiende la falta de viviendas de calidad para ejecutivos y estudiantes 
                    solventes que buscan vivir en el centro histórico con todas las comodidades.
                  </p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>03</div>
                  <h4>Hito Arquitectónico</h4>
                  <p>
                    El proyecto no solo ofrece espacios adicionales, sino que también enriquece, 
                    valora y contribuye al desarrollo urbano, marcando un hito arquitectónico 
                    que se integra armoniosamente con la identidad del sector.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CARACTERÍSTICAS PRINCIPALES */}
          <div 
            ref={el => sectionsRef.current[2] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Características del Proyecto</h2>
              <div className={styles.sectionDivider}></div>
            </div>
            
            <div className={styles.featuresGrid}>
              {projectFeatures.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GALERÍA DE IMÁGENES */}
          <div 
            ref={el => sectionsRef.current[3] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Galería del Proyecto</h2>
              <div className={styles.sectionDivider}></div>
              <p className={styles.sectionSubtitle}>
                Descubre los espacios que harán de EntreCalles un icono arquitectónico
              </p>
            </div>
            
            <div className={styles.galleryGrid}>
              {projectImages.map((image) => (
                <div key={image.id} className={styles.galleryItem}>
                  <div className={styles.galleryImage}>
                    <div className={styles.imageCategory}>{image.category}</div>
                    <div className={styles.imageContent}>
                      <h4>{image.title}</h4>
                      <p>{image.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ESPECIFICACIONES TÉCNICAS */}
          <div 
            ref={el => sectionsRef.current[4] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Especificaciones Técnicas</h2>
              <div className={styles.sectionDivider}></div>
            </div>
            
            <div className={styles.specsContainer}>
              <div className={styles.specsColumn}>
                <h3>Datos Principales</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> <strong>Altura:</strong> 300+ metros</li>
                  <li><CheckCircle size={16} /> <strong>Niveles:</strong> 75 pisos</li>
                  <li><CheckCircle size={16} /> <strong>Área construida:</strong> 180,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>Unidades residenciales:</strong> 450</li>
                  <li><CheckCircle size={16} /> <strong>Oficinas:</strong> 25,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>Comercio:</strong> 15,000 m²</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>Amenidades Premium</h3>
                <ul className={styles.specsList}>
                  <li><ChevronRight size={16} /> Piscina infinity con vista panorámica</li>
                  <li><ChevronRight size={16} /> Gimnasio y spa de lujo</li>
                  <li><ChevronRight size={16} /> Jardines verticales y terrazas verdes</li>
                  <li><ChevronRight size={16} /> Sky lounge y bar en azotea</li>
                  <li><ChevronRight size={16} /> Salones de eventos y coworking</li>
                  <li><ChevronRight size={16} /> Parqueaderos automatizados</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>Sostenibilidad</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> Certificación LEED Gold objetivo</li>
                  <li><CheckCircle size={16} /> Sistema de recolección de agua lluvia</li>
                  <li><CheckCircle size={16} /> Paneles solares fotovoltaicos</li>
                  <li><CheckCircle size={16} /> Jardines verticales regulación térmica</li>
                  <li><CheckCircle size={16} /> Materiales locales y reciclables</li>
                  <li><CheckCircle size={16} /> Sistema de gestión inteligente de energía</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VIDEO Y CONTEXTO */}
          <div 
            ref={el => sectionsRef.current[5] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.videoSection}>
              <div className={styles.videoHeader}>
                <h3>Video del Proyecto</h3>
                <p>Descubre en video la magnitud y visión de este proyecto transformador</p>
              </div>
              <div className={styles.videoContainer}>
                <div className={styles.videoWrapper}>
                  <iframe
                    src="https://www.youtube.com/embed/k5RfEowqxgI"
                    title="EntreCalles - Transformando Bogotá"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className={styles.videoInfo}>
                  <div className={styles.videoStats}>
                    <div className={styles.videoStat}>
                      <span className={styles.statLabel}>Inversión</span>
                      <span className={styles.statValue}>$500M USD</span>
                    </div>
                    <div className={styles.videoStat}>
                      <span className={styles.statLabel}>Empleos</span>
                      <span className={styles.statValue}>2,000+</span>
                    </div>
                    <div className={styles.videoStat}>
                      <span className={styles.statLabel}>Entrega</span>
                      <span className={styles.statValue}>2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EntreCalles;