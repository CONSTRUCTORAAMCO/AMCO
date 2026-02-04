import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { proyectos as PROJECTS } from "./dataproyectos.js";
import imgUniversidadLibre from "../../img/bogota-proyectos.jpg";
import styles from "./SesioProy.module.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ================= DATA =================
const ACTIVITIES = ["Todas", "Residencial", "Comercial", "Infraestructura"];
const PAGE_SIZE = 6;
const activityOptions = ACTIVITIES.map(a => ({ value: a, label: a }));

// ================= React Select Styles =================
const customStyles = {
  container: (base) => ({ ...base, width: "310px", margin: "0 auto" }),
  control: (base, state) => ({
    ...base,
    minHeight: "36px",
    height: "36px",
    borderRadius: "9999px",
    fontSize: "13px",
    paddingLeft: "6px",
    borderColor: state.isFocused ? "#f6c400" : "#e5e7eb",
    boxShadow: "none",
    "&:hover": {
      borderColor: state.isFocused ? "#f6c400" : "#cbd5e1",
    },
  }),
  valueContainer: (base) => ({ ...base, padding: "0 12px" }),
  indicatorsContainer: (base) => ({ ...base, height: "36px" }),
  dropdownIndicator: (base) => ({ ...base, padding: "6px" }),
  menu: (base) => ({ ...base, borderRadius: "18px", overflow: "hidden", marginTop: "8px" }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  option: (base, state) => ({
    ...base,
    borderRadius: "12px",
    fontSize: "13px",
    padding: "8px 12px",
    backgroundColor: state.isSelected ? "#111827" : state.isFocused ? "#f3f4f6" : "transparent",
    color: state.isSelected ? "#ffffff" : "#111827",
  }),
};

export default function ProjectsSection2028() {
  const navigate = useNavigate();

  const [region, setRegion] = useState("Todos");
  const [city, setCity] = useState("Todos");
  const [activity, setActivity] = useState("Todas");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [regionOptionsState, setRegionOptionsState] = useState([{ value: 'Todos', label: 'Departamentos' }]);

  // ===== NUEVO: SCROLL ZOOM HERO =====
  const [scrollY, setScrollY] = useState(0);

  // ===== NUEVO: TYPEWRITER =====
  const fullText = "Proyectos";
  const [displayText, setDisplayText] = useState("");

  const cityOptions = [
    { value: 'Todos', label: 'Ciudades' },
    ...Array.from(new Set(PROJECTS.map(p => p.location))).map(c => ({ value: c, label: c }))
  ];

  const filtered = PROJECTS.filter((p) => {
    const matchesActivity = activity === "Todas" || p.category === activity;
    const matchesRegion = region === 'Todos' || p.location.toLowerCase().includes(region.toLowerCase());
    const matchesCity = city === 'Todos' || p.location.toLowerCase().includes(city.toLowerCase());
    return matchesActivity && matchesRegion && matchesCity;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // ===== ZOOM SCALE =====
  const heroScale = 1 + scrollY * 0.0005;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 120);

    fetch('https://api-colombia.com/api/v1/Department')
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          const apiRegions = json.map(d => ({ value: d.name, label: d.name }));
          const merged = [{ value: 'Todos', label: 'Departamentos' }, ...apiRegions];
          setRegionOptionsState(merged);
        }
      });

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      .inview { opacity: 1 !important; transform: translateY(0) !important; transition: 0.5s; }
    `;
    document.head.appendChild(styleTag);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('inview');
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('[data-sr]');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [visible]);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center">
        {/* IMAGEN */}
        <div
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${imgUniversidadLibre})`,
            transform: `scale(${1 + scrollY * 0.00025})`
          }}
        />

        {/* OSCURECER GENERAL */}
        <div className="absolute inset-0 bg-black/25" />

        {/* DEGRADADO SOLO BORDES LIGERO */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black/40 to-transparent" />
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black/40 to-transparent" />
        </div>

        {/* CONTENIDO */}
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold text-white mb-6">
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-gray-50">
        <div className={`${styles.projectContentWrapper} max-w-7xl mx-auto px-6`}>
          <br /><br /><br /><br />

          {/* MOBILE FILTER BUTTON */}
          <div className="md:hidden flex justify-center mb-8">
            <button onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center justify-between w-fit min-w-[220px] px-5 py-2.5 border border-black text-black text-sm font-medium transition shadow-none"
                    style={{ borderRadius: '15px', backgroundColor: 'transparent' }}>
              <span>{showFilters ? 'Hide filters' : 'Show filters'}</span>
              <i className="ri-filter-3-line text-lg ml-4 text-black"></i>
            </button>
          </div>

          {/* FILTERS */}
          <div
            className={`${showFilters ? "grid" : "hidden"} md:grid mx-auto`}
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              maxWidth: '1024px',
              margin: '0 auto',
              justifyItems: 'center',
            }}
          >
            <Select menuPortalTarget={document.body} classNamePrefix="rs"
                    value={regionOptionsState.find(o => o.value === region)}
                    onChange={(o) => { setRegion(o.value); setPage(1); }}
                    options={regionOptionsState} styles={customStyles} placeholder="Departamentos"/>
            <Select menuPortalTarget={document.body} classNamePrefix="rs"
                    value={cityOptions.find(o => o.value === city)}
                    onChange={(o) => { setCity(o.value); setPage(1); }}
                    options={cityOptions} styles={customStyles} placeholder="Ciudades"/>
            <Select menuPortalTarget={document.body} classNamePrefix="rs"
                    value={activityOptions.find(o => o.value === activity)}
                    onChange={(o) => { setActivity(o.value); setPage(1); }}
                    options={activityOptions} styles={customStyles} placeholder="Categorías"/>
          </div>

          <br /><br />

          {/* RESULTS */}
          <div className="flex items-center justify-between text-sm text-gray-600 max-w-6xl mx-auto mt-10">
            <span>{filtered.length} Resultados</span>
            <span className="uppercase tracking-wide">Proyectos Destacados</span>
          </div>

          {/* PROJECT GRID */}
          <div className={`mt-10 ${styles.projectsGrid}`}>
            {visible.map((project, index) => (
              <Card
                key={project.id}
                data-sr
                className={`${styles.projectCard} ${
                  index % 2 === 0 ? styles.fromLeft : styles.fromRight
                }`}
                sx={{ 
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Contenedor de imagen con altura fija */}
                <div className={styles.imageContainer}>
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ 
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                </div>

                <CardContent className={styles.cardContent}>
                  <Typography gutterBottom variant="h6" component="div" className={styles.cardTitle}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary" component="div">
                    <div className="flex items-center gap-2 mb-2">
                      <i className="ri-briefcase-line text-lg" /> 
                      <span><strong>Categoría:</strong> {project.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-map-pin-line text-lg" /> 
                      <span><strong>Ubicación:</strong> {project.location}</span>
                    </div>
                  </Typography>
                </CardContent>

                <div style={{ padding: "0 16px 16px" }}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => navigate(`/vistaproyecto/${project.id}`)}
                    sx={{
                      color: 'black',
                      borderColor: '#f6c400',
                      '&:hover': {
                        borderColor: '#f6c400',
                        backgroundColor: 'rgba(246, 196, 0, 0.08)',
                      },
                    }}
                  >
                    Ver más
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <br /><br />

          {/* PAGINATION */}
          <div className="flex justify-center mt-12">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(e, value) => setPage(value)}
                shape="rounded"
                sx={{
                  "& .MuiPaginationItem-root": {
                    borderRadius: "12px",
                    backgroundColor: "#ffffff",
                    color: "#000000",
                    fontWeight: 500,
                    transition: "all 0.3s ease",
                  },
                  "& .MuiPaginationItem-root:hover": {
                    backgroundColor: "#d4d4d4",
                  },
                  "& .MuiPaginationItem-root.Mui-selected": {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                  },
                  "& .MuiPaginationItem-root.Mui-selected:hover": {
                    backgroundColor: "#000000",
                  },
                }}
              />
            </Stack>
          </div>
        </div>
      </section>
      <br />
    </>
  );
}