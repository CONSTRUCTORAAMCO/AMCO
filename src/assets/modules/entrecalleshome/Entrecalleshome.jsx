import React, { useState } from 'react';
import styles from './Entrecalleshome.module.css';
import { Play, MapPin, Building, Youtube } from 'lucide-react';

import edificioImage from '../../img/Entrecallesimg1.png'; // Cambia esto por la ruta correcta

const EntreCallesHome = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
            <span>PROYECTO EN DESARROLLO</span>
          </div>
          
          <h1 className={styles.title}>
            <span className={styles.titleAccent}>Entre Calles</span>
          </h1>
          
          <p className={styles.description}>
            Sobre la intersección de la Avenida 19 con la Calle Real del Comercio, 
            más conocida como Carrera Séptima; toma vuelo el proyecto que renovará 
            la cara del centro de Bogotá y de Colombia entera. Una obra que se 
            convertirá, a la vez, en el punto de encuentro para millones de 
            capitalinos y en el lugar donde Latinoamérica alcanzará el cielo.
          </p>
        </div>

        {/* Imagen del edificio en el medio (solo desktop) */}
        <div className={styles.imageSection}>
          <img 
            src={edificioImage} 
            alt="Edificio Entre Calles" 
            className={styles.edificioImage}
            onError={(e) => {
              // Si la imagen no carga, usa un placeholder
              e.target.src = "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
            }}
          />
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
                  Video del proyecto
                </span>
                <h3>Entre Calles: El futuro de Bogotá</h3>
                <p>Descubre el rascacielos que transformará el centro de la ciudad</p>
              </div>
            </div>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <Building size={20} />
              <div>
                <div className={styles.statNumber}>300+</div>
                <div className={styles.statText}>metros de altura</div>
              </div>
            </div>
            <div className={styles.stat}>
              <MapPin size={20} />
              <div>
                <div className={styles.statNumber}>Ubicación</div>
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
              <h3>Video del Proyecto</h3>
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
                title="Entre Calles - Proyecto"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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