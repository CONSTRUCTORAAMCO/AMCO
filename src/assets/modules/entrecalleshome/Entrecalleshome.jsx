import React, { useState } from 'react';
import styles from './Entrecalleshome.module.css';
import { Play, MapPin, Building, Youtube } from 'lucide-react';
import { useLanguage } from '../../../i18n/LanguageContext';
import edificioImage from '../../img/Entrecallesimg1.png'; 

const EntreCallesHome = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { t } = useLanguage();

  const toggleVideoModal = () => {
    setIsVideoModalOpen(!isVideoModalOpen);
  };

  // URL del thumbnail del video de YouTube
  const videoThumbnail = "https://img.youtube.com/vi/k5RfEowqxgI/maxresdefault.jpg";

  return (
    <div className={styles.container}>
      {/* Contenido Principal */}
      <div className={styles.content}>
        {/* Texto a la izquierda */}
        <div className={styles.textSection}>
          <div className={styles.badge}>
            <Building size={14} />
            <span>{t('entrecalles.badge')}</span>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>{t('entrecalles.title')}</span>
          </h1>
          
          <p className={styles.description}>
            {t('entrecalles.description')}
          </p>
        </div>

        {/* Imagen del edificio en el medio (solo desktop) */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img 
              src={edificioImage} 
              alt="Edificio Entre Calles" 
              className={styles.edificioImage}
              onError={(e) => {
                // Si la imagen no carga, usa un placeholder
                e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
              }}
            />
            <p className={styles.copyrightText}>
              Derechos de autor de la imagen Bher President @Quantum-AIP LLC
            </p>
          </div>
        </div>
        
        {/* Video a la derecha */}
        <div className={styles.videoSection}>
          <div 
            className={styles.videoCard}
            onClick={toggleVideoModal}
          >
            <div 
              className={styles.videoThumbnail}
              style={{ backgroundImage: `url(${videoThumbnail})` }}
            >
              <div className={styles.videoOverlay}>
                <div className={styles.playButton}>
                  <Play size={32} />
                </div>
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoLabel}>
                  <Play size={12} />
                  {t('entrecalles.video_label')}
                </span>
                <h3>{t('entrecalles.video_title')}</h3>
                <p>{t('entrecalles.video_description')}</p>
              </div>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Building size={20} />
              <div>
                <div className={styles.statNumber}>500</div>
                <div className={styles.statText}>{t('entrecalles.height')}</div>
              </div>
            </div>
            <div className={styles.stat}>
              <MapPin size={20} />
              <div>
                <div className={styles.statNumber}>{t('entrecalles.location')}</div>
                <div className={styles.statText}>Avenida 19 con la Carrera Séptima</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de video */}
      {isVideoModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleVideoModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{t('entrecalles.modal_title')}</h3>
              <button 
                className={styles.closeButton}
                onClick={toggleVideoModal}
              >
                ×
              </button>
            </div>
            <div className={styles.videoContainer}>
              <iframe
                src="https://www.youtube.com/embed/k5RfEowqxgI?autoplay=1"
                title={t('entrecalles.iframe_title')}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EntreCallesHome;