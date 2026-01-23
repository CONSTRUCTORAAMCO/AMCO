import { useEffect, useRef } from "react";
import { 
  Building2, Target, Eye, Award, Clock, Leaf, MessageSquare, 
  Lightbulb, Users, Calendar, CheckCircle, TrendingUp, 
  Home, Briefcase, ShoppingBag, School, Factory,
  MapPin, Phone, Mail, Facebook, Instagram, Linkedin
} from "lucide-react";
import styles from "./Nosotros.module.css";

export default function Nosotros() {
  // Referencias para las animaciones
  const mainTitleRef = useRef(null);
  const organizacionRef = useRef(null);
  const misionRef = useRef(null);
  const visionRef = useRef(null);
  const valoresRef = useRef(null);
  const timelineRef = useRef(null);
  const statsRef = useRef(null);
  const sectoresRef = useRef(null);
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
      valoresRef.current,
      timelineRef.current,
      statsRef.current,
      sectoresRef.current,
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
      {/* HERO SECTION */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.companyLogo}>
            <Building2 size={64} className={styles.logoIcon} />
            <div className={styles.companyName}>
              <h1 className={styles.companyMainName}>NOSOTROS</h1>
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

      <div className={styles.container}>
        {/* STATS BAR */}
        <div ref={statsRef} className={styles.statsBar}>
          <div className={styles.statItem}>
            <Calendar className={styles.statIcon} />
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>50+</h3>
              <p className={styles.statLabel}>Años de Experiencia</p>
            </div>
          </div>
          
          <div className={styles.statDivider}></div>
          
          <div className={styles.statItem}>
            <TrendingUp className={styles.statIcon} />
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>60+</h3>
              <p className={styles.statLabel}>Proyectos Ejecutados</p>
            </div>
          </div>
          
          <div className={styles.statDivider}></div>
          
          <div className={styles.statItem}>
            <CheckCircle className={styles.statIcon} />
            <div className={styles.statContent}>
              <h3 className={styles.statNumber}>1M+</h3>
              <p className={styles.statLabel}>m² Construidos</p>
            </div>
          </div>
        </div>

        {/* SECCIÓN LA ORGANIZACIÓN */}
        <div ref={organizacionRef} className={styles.organizacion}>
          <div className={styles.sectionHeader}>
            <Building2 className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Nuestra Organización</h2>
          </div>
          
          <div className={styles.organizacionContent}>
            <div className={styles.empresaCard}>
              <div className={styles.empresaHeader}>
                <div className={styles.empresaLogo}>
                  <Building2 className={styles.empresaIcon} />
                </div>
                <div className={styles.empresaInfo}>
                  <h3 className={styles.empresaName}>Constructora AMCO Ltda.</h3>
                  <div className={styles.empresaBadge}>
                    <Calendar size={16} />
                    <span>Fundada en 1973</span>
                  </div>
                </div>
              </div>
              <p className={styles.empresaDescription}>
                Empresa fundada en Bogotá con capital colombiano, dedicada a promoción, 
                mercadeo, ventas, diseño, gerencia y construcción en general.
              </p>
              <div className={styles.empresaTags}>
                <span className={styles.tag}>Sede Principal</span>
                <span className={styles.tag}>Capital Colombiano</span>
                <span className={styles.tag}>50+ Años</span>
              </div>
            </div>
            
            <div className={styles.empresaCard}>
              <div className={styles.empresaHeader}>
                <div className={styles.empresaLogo}>
                  <Building2 className={styles.empresaIcon} />
                </div>
                <div className={styles.empresaInfo}>
                  <h3 className={styles.empresaName}>AMR Construcciones y CIA S.A.</h3>
                  <div className={styles.empresaBadge}>
                    <Calendar size={16} />
                    <span>Fundada en 2000</span>
                  </div>
                </div>
              </div>
              <p className={styles.empresaDescription}>
                Empresa constituida para complementar y expandir los servicios de 
                la organización en el sector de la construcción.
              </p>
              <div className={styles.empresaTags}>
                <span className={styles.tag}>Expansión</span>
                <span className={styles.tag}>Complemento</span>
                <span className={styles.tag}>Innovación</span>
              </div>
            </div>
          </div>
          
          <p 
            ref={el => paragraphRefs.current[0] = el}
            className={`${styles.organizacionText} ${styles.animatedParagraph}`}
          >
            Nuestra organización, compuesta por Constructora AMCO Ltda. (1973) y AMR Construcciones y CIA S.A. (2000), 
            se dedica al servicio de promoción, mercadeo, ventas, diseño, gerencia y construcción en general, 
            abarcando los sectores de vivienda, institucional, oficinas, comercial e industrial.
          </p>
          
          <p 
            ref={el => paragraphRefs.current[1] = el}
            className={`${styles.organizacionText} ${styles.animatedParagraph}`}
            style={{ transitionDelay: "0.1s" }}
          >
            Desde su fundación, hemos realizado importantes aportes al desarrollo del país a través de diversos 
            programas de construcción, generando miles de empleos directos e indirectos en proyectos públicos y privados.
          </p>
        </div>

        {/* TIMELINE VISUAL */}
        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>1973</div>
            <div className={styles.timelineDot}>
              <div className={styles.timelineDotInner}></div>
            </div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Fundación AMCO</h4>
              <p className={styles.timelineDescription}>
                Inicio de operaciones en Bogotá con capital 100% colombiano
              </p>
            </div>
          </div>
          
          <div className={styles.timelineConnector}></div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>2000</div>
            <div className={styles.timelineDot}>
              <div className={styles.timelineDotInner}></div>
            </div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Expansión AMR</h4>
              <p className={styles.timelineDescription}>
                Creación de AMR Construcciones para ampliar servicios
              </p>
            </div>
          </div>
          
          <div className={styles.timelineConnector}></div>
          
          <div className={styles.timelineItem}>
            <div className={styles.timelineYear}>Presente</div>
            <div className={styles.timelineDot}>
              <div className={styles.timelineDotInner}></div>
            </div>
            <div className={styles.timelineContent}>
              <h4 className={styles.timelineTitle}>Liderazgo Continuo</h4>
              <p className={styles.timelineDescription}>
                Más de 60 proyectos exitosos a nivel nacional
              </p>
            </div>
          </div>
        </div>

        {/* SECTORES DE ESPECIALIZACIÓN */}
        <div ref={sectoresRef} className={styles.sectores}>
          <div className={styles.sectionHeader}>
            <Briefcase className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Sectores de Especialización</h2>
          </div>
          
          <div className={styles.sectoresGrid}>
            <div className={styles.sectorCard}>
              <Home className={styles.sectorIcon} />
              <h3 className={styles.sectorTitle}>Vivienda</h3>
              <p className={styles.sectorDescription}>
                Proyectos residenciales de alta calidad
              </p>
            </div>
            
            <div className={styles.sectorCard}>
              <Briefcase className={styles.sectorIcon} />
              <h3 className={styles.sectorTitle}>Oficinas</h3>
              <p className={styles.sectorDescription}>
                Espacios corporativos modernos
              </p>
            </div>
            
            <div className={styles.sectorCard}>
              <ShoppingBag className={styles.sectorIcon} />
              <h3 className={styles.sectorTitle}>Comercial</h3>
              <p className={styles.sectorDescription}>
                Centros comerciales y locales
              </p>
            </div>
            
            <div className={styles.sectorCard}>
              <School className={styles.sectorIcon} />
              <h3 className={styles.sectorTitle}>Institucional</h3>
              <p className={styles.sectorDescription}>
                Edificios públicos y educativos
              </p>
            </div>
            
            <div className={styles.sectorCard}>
              <Factory className={styles.sectorIcon} />
              <h3 className={styles.sectorTitle}>Industrial</h3>
              <p className={styles.sectorDescription}>
                Plantas y bodegas especializadas
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN MISIÓN Y VISIÓN */}
        <div className={styles.misionVision}>
          <div ref={misionRef} className={styles.misionCard}>
            <div className={styles.cardHeader}>
              <Target className={styles.cardHeaderIcon} />
              <h3 className={styles.cardTitle}>Nuestra Misión</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                Servir a la Sociedad Colombiana a través de la construcción de obras civiles 
                y de infraestructura, complementando con la promoción de proyectos propios. 
                Aseguramos satisfacción a nuestros clientes mediante calidad y excelencia 
                en cada servicio.
              </p>
              <div className={styles.cardHighlight}>
                <CheckCircle className={styles.highlightIcon} />
                <span>Compromiso con la calidad</span>
              </div>
              <div className={styles.cardHighlight}>
                <Users className={styles.highlightIcon} />
                <span>Servicio a la sociedad</span>
              </div>
            </div>
          </div>
          
          <div ref={visionRef} className={styles.visionCard}>
            <div className={styles.cardHeader}>
              <Eye className={styles.cardHeaderIcon} />
              <h3 className={styles.cardTitle}>Nuestra Visión</h3>
            </div>
            <div className={styles.cardContent}>
              <p className={styles.cardText}>
                Ser una empresa consultora y constructora líder, emprendedora y competitiva, 
                comprometida con su futuro. Fomentamos principios de calidad y desarrollamos 
                el talento humano colombiano para construir un mejor país.
              </p>
              <div className={styles.cardHighlight}>
                <TrendingUp className={styles.highlightIcon} />
                <span>Liderazgo en el sector</span>
              </div>
              <div className={styles.cardHighlight}>
                <Users className={styles.highlightIcon} />
                <span>Desarrollo del talento colombiano</span>
              </div>
            </div>
          </div>
        </div>

        {/* VALORES CORPORATIVOS */}
        <div ref={valoresRef} className={styles.valores}>
          <div className={styles.sectionHeader}>
            <Award className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
          </div>
          
          <div className={styles.valoresGrid}>
            <div className={styles.valorCard}>
              <Award className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Calidad</h3>
              <p className={styles.valorDescription}>
                Priorizamos precisión y atención al detalle en cada proyecto
              </p>
            </div>
            
            <div className={styles.valorCard}>
              <Clock className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Responsabilidad</h3>
              <p className={styles.valorDescription}>
                Cumplimos plazos sin comprometer la excelencia
              </p>
            </div>
            
            <div className={styles.valorCard}>
              <Leaf className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Sostenibilidad</h3>
              <p className={styles.valorDescription}>
                Implementamos prácticas y materiales ecológicos
              </p>
            </div>
            
            <div className={styles.valorCard}>
              <MessageSquare className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Comunicación</h3>
              <p className={styles.valorDescription}>
                Transparencia y comunicación constante
              </p>
            </div>
            
            <div className={styles.valorCard}>
              <Lightbulb className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Innovación</h3>
              <p className={styles.valorDescription}>
                Tecnología de vanguardia para soluciones modernas
              </p>
            </div>
            
            <div className={styles.valorCard}>
              <Users className={styles.valorIcon} />
              <h3 className={styles.valorTitle}>Enfoque Cliente</h3>
              <p className={styles.valorDescription}>
                Personalizamos soluciones para cada visión
              </p>
            </div>
          </div>
        </div>

        {/* OBJETO SOCIAL */}
        <div className={styles.objetoSocial}>
          <div className={styles.sectionHeader}>
            <Target className={styles.sectionIcon} />
            <h2 className={styles.sectionTitle}>Nuestro Compromiso</h2>
          </div>
          
          <div className={styles.objetoContent}>
            <p className={styles.objetoText}>
              En <strong>Constructora AMCO Ltda.</strong> nos dedicamos a la planeación, diseño, 
              desarrollo, gerencia y ejecución de proyectos de construcción en los sectores 
              de vivienda, oficinas, comercio, institucional e industrial. Trabajamos bajo 
              estrictas normas técnicas y de calidad, contribuyendo al desarrollo urbano 
              sostenible de Colombia.
            </p>
            
            <div className={styles.objetoHighlight}>
              <div className={styles.highlightIconWrapper}>
                <Award className={styles.highlightIconMain} />
              </div>
              <p className={styles.highlightText}>
                "La excelencia en la construcción es nuestro compromiso permanente 
                con Colombia y su desarrollo sostenible."
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}