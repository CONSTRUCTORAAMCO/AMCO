import React, { useEffect, useRef, useState } from "react";
import styles from "./entrecalles.module.css";
import { Building2, Target, Users, Award, Clock, ChevronRight, CheckCircle, Calendar, X, ChevronLeft, ChevronRight as RightIcon, Info } from "lucide-react";
import edificioImage from '../../img/Entrecallesimg1h.png';
import edificioImage2 from '../../img/Entrecallesimg2.png';
import edificioImage3 from '../../img/Entrecallesimg3.png';
import edificioImage4 from '../../img/Entrecallesimg4.png';
import edificioImage5 from '../../img/Entrecallesimg5.png';
import edificioImage6 from '../../img/Entrecallesimg6.png';
import edificioImage7 from '../../img/Entrecallesimg7.png';
import { useLanguage } from "../../../i18n/languagecontext.jsx";

const EntreCalles = () => {
  const { t } = useLanguage();
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

  const projectImagesRaw = t('entrecallesPage.projectImages', { returnObjects: true }) || [];
  const projectImages = projectImagesRaw.map((item, index) => ({
    ...item,
    id: index + 1,
    image: [edificioImage, edificioImage2, edificioImage3, edificioImage4, edificioImage5, edificioImage6, edificioImage7][index]
  }));

  const projectFeaturesRaw = t('entrecallesPage.projectFeatures', { returnObjects: true }) || [];
  const projectFeatures = projectFeaturesRaw.map((feature, index) => ({
    ...feature,
    icon: [<Target size={24} />, <Users size={24} />, <Award size={24} />, <Clock size={24} />][index]
  }));


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
              <h1 className={styles.companyMainName}>{t('entrecallesPage.mainTitle')}</h1>
              <p className={styles.companySubtitle}>{t('entrecallesPage.mainSubtitle')}</p>
            </div>
          </div>
          <h2 ref={mainTitleRef} className={styles.heroTitle}>
            {t('entrecallesPage.heroTitle')}
          </h2>
          <p className={styles.heroSubtitle}>
            {t('entrecallesPage.heroSubtitle')}
          </p>
        </div>
      </div>

      {/* STATS BAR */}
      <div ref={statsRef} className={styles.statsBar}>
        <div className={styles.messageBox}>
          <p className={styles.messageText}>
            {t('entrecallesPage.messageText')}
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
                  alt={t('entrecallesPage.imageAlt')} 
                  className={styles['living-image']}
                />
              </div>
              
              <div className={styles['title-container']}>
                <h1 className={styles['main-title']}>{t('entrecallesPage.imageTitle')}</h1>
                <div className={styles['title-subtle']}>{t('entrecallesPage.imageSubtitle')}</div>
              </div>
            </div>
            <br /> <br /> <br />
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{t('entrecallesPage.historyTitle')}</h2>
            </div>
            
            <div className={styles.historyContent}>
              <div className={styles.historyText}>
                <h3>{t('entrecallesPage.historySubtitle')}</h3>
                <p dangerouslySetInnerHTML={{ __html: t('entrecallesPage.historyParagraph1') }} />
                <p dangerouslySetInnerHTML={{ __html: t('entrecallesPage.historyParagraph2') }} />
              </div>
              
              <div className={styles.historyStats}>
                <div className={styles.statItem}>
                  <Calendar className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>20+</div>
                    <div className={styles.statLabel}>{t('entrecallesPage.yearsOfPlanning')}</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Target className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>500m</div>
                    <div className={styles.statLabel}>{t('entrecallesPage.architecturalHeight')}</div>
                  </div>
                </div>
                
                <div className={styles.statItem}>
                  <Building2 className={styles.statIcon} />
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>75</div>
                    <div className={styles.statLabel}>{t('entrecallesPage.innovationLevels')}</div>
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
              <h2 className={styles.sectionTitle}>{t('entrecallesPage.urbanImpactTitle')}</h2>
            </div>
            
            <div className={styles.impactContent}>
              <div className={styles.impactIntro}>
                <h3>{t('entrecallesPage.urbanImpactIntro')}</h3>
              </div>
              
              <div className={styles.impactGrid}>
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>01</div>
                  <h4>{t('entrecallesPage.urbanRenewalTitle')}</h4>
                  <p>{t('entrecallesPage.urbanRenewalText')}</p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>02</div>
                  <h4>{t('entrecallesPage.premiumHousingTitle')}</h4>
                  <p>{t('entrecallesPage.premiumHousingText')}</p>
                </div>
                
                <div className={styles.impactCard}>
                  <div className={styles.impactNumber}>03</div>
                  <h4>{t('entrecallesPage.architecturalLandmarkTitle')}</h4>
                  <p>{t('entrecallesPage.architecturalLandmarkText')}</p>
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
              <h2 className={styles.sectionTitle}>{t('entrecallesPage.projectFeaturesTitle')}</h2>
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
              <h2 className={styles.sectionTitle}>{t('entrecallesPage.galleryTitle')}</h2>
              <p className={styles.sectionSubtitle}>
                {t('entrecallesPage.gallerySubtitle')}
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
              <h2 className={styles.sectionTitle}>{t('entrecallesPage.techSpecsTitle')}</h2>
            </div>
            
            <div className={styles.specsContainer}>
              <div className={styles.specsColumn}>
                <h3>{t('entrecallesPage.mainData')}</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.totalHeight')}</strong> 300+ metros</li>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.totalLevels')}</strong> 75 pisos</li>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.builtArea')}</strong> 180,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.residentialUnits')}</strong> 450 apartamentos</li>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.corporateOffices')}</strong> 25,000 m²</li>
                  <li><CheckCircle size={16} /> <strong>{t('entrecallesPage.commercialArea')}</strong> 15,000 m²</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>{t('entrecallesPage.premiumAmenities')}</h3>
                <ul className={styles.specsList}>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.infinityPool')}</li>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.gymAndSpa')}</li>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.verticalGardens')}</li>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.skyLounge')}</li>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.eventRooms')}</li>
                  <li><ChevronRight size={16} /> {t('entrecallesPage.automatedParking')}</li>
                </ul>
              </div>
              
              <div className={styles.specsColumn}>
                <h3>{t('entrecallesPage.sustainabilityAndTech')}</h3>
                <ul className={styles.specsList}>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.leedCertification')}</li>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.waterSystem')}</li>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.solarPanels')}</li>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.thermalRegulation')}</li>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.certifiedMaterials')}</li>
                  <li><CheckCircle size={16} /> {t('entrecallesPage.energyManagement')}</li>
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
                <h4 className={styles.videoTitle}>{t('entrecallesPage.videoTitle')}</h4>
                <p className={styles.videoSubtitle}>
                  {t('entrecallesPage.videoSubtitle')}
                </p>
                
                <div className={styles.videoWrapper}>
                  <iframe
                    src="https://www.youtube.com/embed/k5RfEowqxgI"
                    title={t('entrecallesPage.videoIframeTitle')}
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
              <h3>{t('entrecallesPage.infoNoteTitle')}</h3>
              <p>
                {t('entrecallesPage.infoNoteParagraph1')}
              </p>
              <p style={{ marginTop: '1rem' }} dangerouslySetInnerHTML={{ __html: t('entrecallesPage.infoNoteParagraph2') }} />
              <p style={{ marginTop: '1rem', fontStyle: 'italic' }} dangerouslySetInnerHTML={{ __html: t('entrecallesPage.infoNoteParagraph3') }} />
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
