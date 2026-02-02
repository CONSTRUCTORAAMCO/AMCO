import React, { useEffect, useRef, useState } from "react";
import styles from "./Entrecalles.module.css";
import { Building2, Target, Users, Award, Clock, ChevronRight, CheckCircle, Calendar, X, ChevronLeft, ChevronRight as RightIcon, Info } from "lucide-react";
import edificioImage from '../../img/Entrecallesimg1h.png';
import edificioImage2 from '../../img/Entrecallesimg2.png';
import edificioImage3 from '../../img/Entrecallesimg3.png';
import edificioImage4 from '../../img/Entrecallesimg4.png';
import edificioImage5 from '../../img/Entrecallesimg5.png';
import edificioImage6 from '../../img/Entrecallesimg6.png';
import edificioImage7 from '../../img/Entrecallesimg7.png';

const EntreCalles = () => {
  const sectionsRef = useRef([]);
  
  const mainTitleRef = useRef(null);
  const statsRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  const projectImages = [
    {
      id: 1,
      title: "Vista Principal del Edificio (Derechos de autor Bher President @Quantum-AIP LLC)",
      description: "Diseño arquitectónico innovador con tecnología 3D y materiales de vanguardia ",
      category: "Arquitectura",
      image: edificioImage
    },
    {
      id: 2,
      title: "Integración con el Entorno Urbano (Derechos de autor Bher President @Quantum-AIP LLC)",
      description: "Conexión perfecta del edificio con la estructura urbana existente",
      category: "Integración",
      image: edificioImage2
    },
    {
      id: 3,
      title: "Apartamentos de Lujo",
      description: "Espacios residenciales premium con acabados exclusivos y vistas panorámicas",
      category: "Residencial",
      image: edificioImage3
    },
    {
      id: 4,
      title: "Teatro y Espacio Cultural",
      description: "Área dedicada a eventos culturales, presentaciones y actividades artísticas",
      category: "Cultura",
      image: edificioImage4
    },
    {
      id: 5,
      title: "Gimnasio Premium",
      description: "Instalaciones deportivas de última generación con equipamiento profesional",
      category: "Deportes",
      image: edificioImage5
    },
    {
      id: 6,
      title: "Piscina Infinity",
      description: "Vistas panorámicas desde la piscina en altura con diseño infinity edge",
      category: "Amenidades",
      image: edificioImage6
    },
    {
      id: 7,
      title: "Restaurante Principal",
      description: "Gastronomía de alta cocina con vista privilegiada a la ciudad",
      category: "Gastronomía",
      image: edificioImage7
    }
  ];

  const projectFeatures = [
    {
      icon: <Target size={24} />,
      title: "Altura Récord",
      description: "500 metros - El edificio más alto de Colombia"
    },
    {
      icon: <Users size={24} />,
      title: "Uso Mixto Inteligente",
      description: "Integración perfecta de espacios residenciales, comerciales y oficinas"
    },
    {
      icon: <Award size={24} />,
      title: "Certificación LEED Platinum",
      description: "Máxima certificación en sostenibilidad y eficiencia energética"
    },
    {
      icon: <Clock size={24} />,
      title: "En Desarrollo",
      description: "Proyecto en construcción avanzada con tecnología de punta. Actualmente en desarrollo, sin fecha de finalización establecida."
    }
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    setSelectedImageIndex(prev => 
      prev === 0 ? projectImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex(prev => 
      prev === projectImages.length - 1 ? 0 : prev + 1
    );
  };

  // Cerrar con tecla ESC
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
      if (event.key === 'ArrowLeft') {
        goToPrevious();
      }
      if (event.key === 'ArrowRight') {
        goToNext();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <>
      {/* HERO SECTION - CON MÁS ESPACIO ABAJO */}
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

      {/* STATS BAR */}
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
            <div className={styles['image-masterpiece']}>
              <div className={styles['image-wrapper']} ref={imageRef}>
                <img 
                  src={edificioImage} 
                  alt="Edificio con vida" 
                  className={styles['living-image']}
                />
              </div>
              
              <div className={styles['title-container']}>
                <h1 className={styles['main-title']}>ENTRECALLES EMERALD TOWER</h1>
                <div className={styles['title-subtle']}>Derechos de autor de la imagen original Bher President @Quantum-AIP LLC</div>
              </div>
            </div>
            <br /> <br /> <br />
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Historia del Proyecto</h2>
            </div>
            
            <div className={styles.historyContent}>
              <div className={styles.historyText}>
                <h3>TORRE ENTRECALLES EMERALD TOWER: Un Sueño de Dos Décadas</h3>
                <p>
                  <strong>Torre Entrecalles nació hace más de veinte años</strong> como una visión 
                  para transformar el centro histórico de Bogotá. En ese momento, visualizamos 
                  un futuro donde los desarrollos modernos se integraran perfectamente con el 
                  patrimonio urbano, creando un equilibrio entre innovación y tradición.
                </p>
                <p>
                  Hoy, Torre EntreCalles se consolida como el rediseño del espacio urbano que 
                  nuestro querido centro necesita. Este hito de gran altura, único en su tipo 
                  y de uso mixto, no solo elevará el estándar para el desarrollo inmobiliario 
                  en la región, sino que satisfará la demanda reprimida de espacios vibrantes 
                  donde vivir, trabajar y disfrutar sean una constante armoniosa y placentera.
                </p>
              </div>
              
              <div className={styles.historyStats}>
                <div className={styles.statItem}>
                  <Calendar className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>20+</div>
                    <div className={styles.statLabel}>Años de planeación estratégica</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Target className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>500m</div>
                    <div className={styles.statLabel}>Altura total arquitectónica</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Building2 className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>75</div>
                    <div className={styles.statLabel}>Niveles de innovación</div>
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
            </div>
            
            <div className={styles.impactContent}>
              <div className={styles.impactIntro}>
                <h3>EntreCalles aborda las carencias urbanas de Bogotá y su centro de tres maneras clave:</h3>
              </div>
              
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>01</div>
                  <h4>Renovación Urbana Integral</h4>
                  <p>
                    Ante la saturación de corredores de oficinas tradicionales, el centro se 
                    destaca como una oportunidad única para proyectos inmobiliarios a través de 
                    una renovación urbana que respeta la historia mientras construye el futuro.
                  </p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>02</div>
                  <h4>Vivienda de Calidad Premium</h4>
                  <p>
                    Atiende la falta de viviendas de calidad para ejecutivos y estudiantes 
                    solventes que buscan vivir en el centro histórico con todas las comodidades 
                    y servicios de un desarrollo de primer nivel.
                  </p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>03</div>
                  <h4>Hito Arquitectónico Transformador</h4>
                  <p>
                    El proyecto no solo ofrece espacios adicionales, sino que enriquece, 
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

          {/* GALERÍA DE IMÁGENES MEJORADA */}
          <div 
            ref={el => sectionsRef.current[3] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Galería del Proyecto</h2>
              <p className={styles.sectionSubtitle}>
                Haz clic en cualquier imagen para explorar los espacios que harán de EntreCalles un icono arquitectónico
              </p>
            </div>
            
            <div className={styles.galleryGrid}>
              {projectImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className={styles.galleryItem}
                  onClick={() => openModal(index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div 
                    className={styles.galleryImage}
                    style={{ 
                      backgroundImage: `url(${image.image})`
                    }}
                  >
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
            </div>
            
            <div className={styles.specsContainer}>
              <div className={styles.specsColumn}>
                <h3>Datos Principales</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> <strong>Altura total:</strong> 300+ metros</li>
                  <li><CheckCircle size={16} /> <strong>Niveles totales:</strong> 75 pisos</li>
                  <li><CheckCircle size={16} /> <strong>Área construida:</strong> 180,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>Unidades residenciales:</strong> 450 apartamentos</li>
                  <li><CheckCircle size={16} /> <strong>Oficinas corporativas:</strong> 25,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>Área comercial:</strong> 15,000 m²</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>Amenidades Premium</h3>
                <ul className={styles.specsList}>
                  <li><ChevronRight size={16} /> Piscina infinity con vista panorámica 360°</li>
                  <li><ChevronRight size={16} /> Gimnasio y spa de lujo con tecnología avanzada</li>
                  <li><ChevronRight size={16} /> Jardines verticales y terrazas verdes inteligentes</li>
                  <li><ChevronRight size={16} /> Sky lounge y bar en azotea con vista privilegiada</li>
                  <li><ChevronRight size={16} /> Salones de eventos y espacios de coworking</li>
                  <li><ChevronRight size={16} /> Sistema de parqueaderos automatizados</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>Sostenibilidad y Tecnología</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> Certificación LEED Platinum objetivo</li>
                  <li><CheckCircle size={16} /> Sistema de recolección y reutilización de agua lluvia</li>
                  <li><CheckCircle size={16} /> Paneles solares fotovoltaicos integrados</li>
                  <li><CheckCircle size={16} /> Jardines verticales para regulación térmica</li>
                  <li><CheckCircle size={16} /> Materiales locales y reciclables certificados</li>
                  <li><CheckCircle size={16} /> Sistema de gestión inteligente de energía</li>
                </ul>
              </div>
            </div>
          </div>

          {/* VIDEO SIMPLIFICADO - SIN DOBLE CONTENEDOR */}
          <div 
            ref={el => sectionsRef.current[5] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.videoSection}>
              <div className={styles.videoContent}>
                <h4 className={styles.videoTitle}>ENTRECALLES EMERALD TOWER: El Futuro de Bogotá</h4>
                <p className={styles.videoSubtitle}>
                  Descubre en este video exclusivo la magnitud, visión y tecnología detrás 
                  del proyecto que redefinirá el skyline de la capital colombiana.
                </p>
                
                <div className={styles.videoWrapper}>
                  <iframe
                    src="https://www.youtube.com/embed/k5RfEowqxgI"
                    title="EntreCalles - Transformando Bogotá"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* NOTA INFORMATIVA */}
          <div 
            ref={el => sectionsRef.current[6] = el}
            className={styles.sectionWrapper}
          >
            <div className={styles.infoNote}>
              <Info className={styles.infoIcon} size={48} />
              <h3>Información del Proyecto</h3>
              <p>
                Esta página web es una plataforma informativa dedicada al proyecto TORRE ENTRECALLES EMERALD TOWER. 
                Toda la información presentada aquí corresponde al estado actual del desarrollo y 
                está sujeta a actualizaciones periódicas a medida que avanza el proyecto.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Cada proceso, avance o modificación en el desarrollo se irá actualizando en esta 
                plataforma, manteniendo a todos los interesados informados sobre el progreso 
                de esta obra que marcará un hito en la arquitectura colombiana.
              </p>
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }}>
                Agradecemos su interés en el proyecto y los invitamos a mantenerse conectados 
                para futuras actualizaciones. Última Actualización: 30/01/2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DE GALERÍA MEJORADO */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botón cerrar - SIEMPRE VISIBLE */}
            <button className={styles.closeButton} onClick={closeModal}>
              <X size={24} />
            </button>
            
            {/* Contenedor de la imagen con tamaño fijo */}
            <div className={styles.modalImageContainer}>
              <img 
                src={projectImages[selectedImageIndex].image} 
                alt={projectImages[selectedImageIndex].title}
                className={styles.modalImage}
              />
              {/* Controles de navegación - AHORA DENTRO DEL CONTENEDOR DE IMAGEN */}
              <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrevious}>
                <ChevronLeft size={28} />
              </button>
              
              <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext}>
                <RightIcon size={28} />
              </button>

              {/* Indicador de imágenes - AHORA DENTRO DEL CONTENEDOR DE IMAGEN */}
              <div className={styles.imageCounter}>
                <span className={styles.currentIndex}>{selectedImageIndex + 1}</span>
                <span className={styles.totalImages}> / {projectImages.length}</span>
              </div>
            </div>

            {/* Información de la imagen */}
            <div className={styles.imageInfo}>
              <h3 className={styles.imageTitle}>
                {projectImages[selectedImageIndex].title}
              </h3>
              <p className={styles.imageDescription}>
                {projectImages[selectedImageIndex].description}
              </p>
              <div className={styles.imageCategoryTag}>
                {projectImages[selectedImageIndex].category}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EntreCalles;