import { useState, useEffect } from "react";
import Select from "react-select";
import imgBodega from "../../img/bodega abastos.jpg";
import imgCarcel from "../../img/carcel de san angel.jpg";
import imgCedritos from "../../img/cedritos.jpg";
import imgCentroTalento from "../../img/Centro-de-Talento-Creativo-del-Bronx_17.jpg";
import imgComando from "../../img/Comando-de-Policia-de-Bogota.jpg";
import imgEjecucion from "../../img/EJECUCION-2.jpg";
import imgEscuelaAviacion from "../../img/Escuela-de-aviacion-FAC-Cali.jpg";
import imgGobernacion from "../../img/gobernacion de cundinamarca.jpg";
import imgJaveriana from "../../img/javeriana.jpg";
import imgLibreUni from "../../img/libre uni.jpg";
import imgPersoneria from "../../img/personeria.jpg";
import imgSenaSoacha from "../../img/Sena-de-Soacha.jpg";
import imgPenitenciaria from "../../img/Penitenciaria-de-maxima-seguridad-de-Valledupar.jpg";
import imgUniversidadLibre from "../../img/Universidad-libre-Bogota.jpg";
import styles from "./SesioProy.module.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// ================= DATA =================
const PROJECTS = [
  { id: 1, title: "Bodega Popular Corabastos", category: "Infraestructura", location: "Bogotá", image: imgBodega },
  { id: 2, title: "Cárcel de San Ángel", category: "Infraestructura", location: "Sabanas de San Ángel", image: imgCarcel },
  { id: 3, title: "Centro Comercial Cedritos 151", category: "Comercial", location: "Bogotá", image: imgCedritos },
  { id: 4, title: "Sena de Bronx", category: "Residencial", location: "Bogotá", image: imgCentroTalento },
  { id: 5, title: "Nuevo comando Policía", category: "Infraestructura", location: "Bogotá", image: imgComando },
  { id: 6, title: "Universidad Distrital Bogotá. PROYECTO EN EJECUCIÓN", category: "Residencial", location: "Bogotá", image: imgEjecucion },
  { id: 7, title: "Escuela De Aviación FAC", category: "Infraestructura", location: "Cali", image: imgEscuelaAviacion },
  { id: 8, title: "Gobernación De Cundinamarca", category: "Infraestructura", location: "Bogotá", image: imgGobernacion },
  { id: 9, title: "Universidad Javeriana Edificio Gabriel Giraldo", category: "Residencial", location: "Bogotá", image: imgJaveriana },
  { id: 10, title: "Universidad Libre Bogotá", category: "Comercial", location: "Bogotá", image: imgUniversidadLibre },
  { id: 11, title: "Personeria De Bogotá", category: "Comercial", location: "Bogotá", image: imgPersoneria },
  { id: 12, title: "Sena De Soacha", category: "Residencial", location: "Bogotá", image: imgSenaSoacha },
  { id: 13, title: "Penitenciaria De Máxima Seguridad De Valledupar", category: "Infraestructura", location: "Valledupar", image: imgPenitenciaria },
];

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
    borderColor: state.isFocused ? "#cbd5e1" : "#e5e7eb",
    boxShadow: state.isFocused ? "0 0 0 2px rgba(0,0,0,0.05)" : "none",
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

// ================= COMPONENT =================
export default function ProjectsSection2028() {
  const [region, setRegion] = useState("Todos");
  const [city, setCity] = useState("Todos");
  const [activity, setActivity] = useState("Todas");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [regionOptionsState, setRegionOptionsState] = useState([{ value: 'Todos', label: 'Departamentos' }]);

  // Opciones de ciudad derivadas de proyectos
  const cityOptions = [
    { value: 'Todos', label: 'Ciudades' },
    ...Array.from(new Set(PROJECTS.map(p => p.location))).map(c => ({ value: c, label: c }))
  ];

  // Filtro combinado
  const filtered = PROJECTS.filter((p) => {
    const matchesActivity = activity === "Todas" || p.category === activity;
    const matchesRegion = region === 'Todos' || p.location.toLowerCase().includes(region.toLowerCase());
    const matchesCity = city === 'Todos' || p.location.toLowerCase().includes(city.toLowerCase());
    return matchesActivity && matchesRegion && matchesCity;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('inview');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('[data-sr]').forEach((el) => observer.observe(el));

    // Api de departamentos de Colombia
    fetch('https://api-colombia.com/api/v1/Department')
      .then(res => res.json())
      .then(json => {
        if (Array.isArray(json)) {
          const apiRegions = json.map(d => ({ value: d.name, label: d.name }));
          const merged = [{ value: 'Todos', label: 'Departamentos' }, ...apiRegions];
          setRegionOptionsState(merged);
        }
      })
      .catch(error => {
        console.error("Error fetching departments:", error);
      });

    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      html { scrollbar-color: #f6c400 transparent; }
      ::-webkit-scrollbar { width: 12px; height: 12px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #f6c400; border-radius: 9999px; border: 3px solid transparent; background-clip: padding-box; }
      .inview { opacity: 1 !important; transform: translateY(0) !important; transition: opacity 520ms cubic-bezier(.2,.9,.3,1), transform 520ms cubic-bezier(.2,.9,.3,1); }
      .inview img { transform: scale(1.08); transition: transform 700ms cubic-bezier(.2,.9,.3,1); }
    `;
    document.head.appendChild(styleTag);

    return () => {
      observer.disconnect();
      if (styleTag.parentNode) styleTag.parentNode.removeChild(styleTag);
    };
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center"
               style={{ backgroundImage: `url(${imgUniversidadLibre})` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 data-sr className={`text-5xl font-bold text-white mb-6 ${styles.scrollAnimate}`}>Proyectos</h1>
          <p data-sr className={`text-lg text-white/80 max-w-2xl mx-auto ${styles.scrollAnimate}`}>
            Proyectos de construcción con visión moderna y ejecución de alto nivel.
          </p>
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
              justifyItems: 'center',  // Esto centra los selects dentro de cada celda
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
          <div className={`mt-10 flex flex-wrap justify-center gap-8 ${styles.projectsGrid}`}>
            {visible.map((project) => (
              <Card key={project.id} sx={{ maxWidth: 345 }}>
                <CardMedia component="img" height="180" image={project.image} alt={project.title}
                           style={{ width: '100%', height: '180px', objectFit: 'cover', display: 'block' }}/>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">{project.title}</Typography>
                  <Typography variant="body2" color="text.secondary" component="div">
                    <div className="flex items-center gap-2 mb-1">
                      <i className="ri-briefcase-line text-lg" /> Categoría: {project.category}
                    </div>
                    <div className="flex items-center gap-2">
                      <i className="ri-map-pin-line text-lg" /> Ubicación: {project.location}
                    </div>
                  </Typography>
                </CardContent>
                <div style={{ padding: "0 16px 16px" }}>
                  <Button variant="outlined" fullWidth>Ver más</Button>
                </div>
              </Card>
            ))}
          </div>
<br />  <br />
          {/* PAGINATION */}
          <div className="flex justify-center mt-12">
            <Stack spacing={2}>
              <Pagination count={totalPages} page={page} onChange={(e, value) => setPage(value)} shape="rounded"
                          sx={{
                            "& .MuiPaginationItem-root": { borderRadius: "12px", backgroundColor: "#ffffff", color: "#111827", fontWeight: 500, transition: "all 0.3s ease" },
                            "& .MuiPaginationItem-root:hover": { backgroundColor: "#e5e7eb" },
                            "& .MuiPaginationItem-root.Mui-selected": { backgroundColor: "#111827", color: "#ffffff" },
                            "& .MuiPaginationItem-root.Mui-selected:hover": { backgroundColor: "#111827" },
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
