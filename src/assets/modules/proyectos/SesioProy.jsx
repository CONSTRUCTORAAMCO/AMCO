import { useState, useEffect } from "react";
import Select from "react-select";
import universityImg from "../../img/Universidad-libre-Bogota.jpg";
import styles from "./SesioProy.module.css";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// ================= DATA =================
const PROJECTS = Array.from({ length: 13 }).map((_, i) => ({
  id: i + 1,
  title: `Proyecto ${i + 1}`,
  category:
    i % 3 === 0
      ? "Residencial"
      : i % 3 === 1
      ? "Comercial"
      : "Infraestructura",
  location: "Colombia",
  image: universityImg,
}));

const REGIONS = ["Todas", "América", "Europa", "Asia"];
const COUNTRIES = ["Todos", "Colombia", "México", "España"];
const ACTIVITIES = ["Todas", "Residencial", "Comercial", "Infraestructura"];
const PAGE_SIZE = 6;

const regionOptions = REGIONS.map(r => ({ value: r, label: r }));
const countryOptions = COUNTRIES.map(c => ({ value: c, label: c }));
const activityOptions = ACTIVITIES.map(a => ({ value: a, label: a }));

// ================= REACT SELECT STYLES =================
const customStyles = {
  container: (base) => ({
    ...base,
    width: "310px",
    margin: "0 auto",
  }),

  control: (base, state) => ({
    ...base,
    minHeight: "36px",
    height: "36px",
    borderRadius: "9999px",
    fontSize: "13px",
    paddingLeft: "6px",
    borderColor: state.isFocused ? "#cbd5e1" : "#e5e7eb",
    boxShadow: state.isFocused
      ? "0 0 0 2px rgba(0,0,0,0.05)"
      : "none",
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0 12px",
  }),

  indicatorsContainer: (base) => ({
    ...base,
    height: "36px",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: "6px",
  }),

  /* 🔥 MENU */
  menu: (base) => ({
    ...base,
    borderRadius: "18px",
    overflow: "hidden",
    marginTop: "8px",
  }),

  /* 🔥 CLAVE */
  menuPortal: (base) => ({
    ...base,
    zIndex: 9999, // 👈 encima de TODO
  }),

  option: (base, state) => ({
    ...base,
    borderRadius: "12px",
    fontSize: "13px",
    padding: "8px 12px",
    backgroundColor: state.isSelected
      ? "#111827"
      : state.isFocused
      ? "#f3f4f6"
      : "transparent",
    color: state.isSelected ? "#ffffff" : "#111827",
  }),
};

// ================= COMPONENT =================
export default function ProjectsSection2028() {
  const [region, setRegion] = useState("Todas");
  const [country, setCountry] = useState("Todos");
  const [activity, setActivity] = useState("Todas");
  const [page, setPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = PROJECTS.filter(
    (p) => activity === "Todas" || p.category === activity
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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

    const els = document.querySelectorAll('[data-sr]');
    els.forEach((el) => observer.observe(el));

    const styleTag = document.createElement('style');
    styleTag.setAttribute('data-generated', 'scrollbar');
    styleTag.innerHTML = `
      html { scrollbar-color: #f6c400 transparent; }
      ::-webkit-scrollbar { width: 12px; height: 12px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: #f6c400; border-radius: 9999px; border: 3px solid transparent; background-clip: padding-box; }

      /* Global in-view animation class to ensure consistent behavior */
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
      {/* ================= HERO ================= */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${universityImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-6">
          <h1 data-sr className={`text-5xl font-bold text-white mb-6 ${styles.scrollAnimate}`} style={{ transitionDelay: '0ms' }}>Proyectos</h1>
          <p data-sr className={`text-lg text-white/80 max-w-2xl mx-auto ${styles.scrollAnimate}`} style={{ transitionDelay: '80ms' }}>
            Proyectos de construcción con visión moderna y ejecución de alto
            nivel.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6"><br /><br /><br /><br />
          {/* ===== MOBILE FILTER BUTTON ===== */}
  <div className="md:hidden flex justify-center mb-8">
    <button
      onClick={() => setShowFilters(!showFilters)}
      className="flex items-center justify-between w-fit min-w-[220px] px-5 py-2.5 border border-black text-black text-sm font-medium transition shadow-none"
      style={{ borderRadius: '15px', backgroundColor: 'transparent' }}
    >
      <span>
        {showFilters ? 'Hide filters' : 'Show filters'}
      </span>

      {/* REMIX ICON */}
      <i className="ri-filter-3-line text-lg ml-4 text-black"></i>
    </button>
  </div>

<div
  className={`
    grid grid-cols-1 md:grid-cols-3
    w-full max-w-6xl mx-auto
    items-center gap-6
    transition-all duration-300 ease-in-out
    ${showFilters ? "block" : "hidden"}
    md:grid
  `}
>
  {/* IZQUIERDA */}
  <div className="justify-self-center md:justify-self-start md:translate-x-12">
    <Select
      menuPortalTarget={document.body}
      classNamePrefix="rs"
      value={regionOptions.find(o => o.value === region)}
      onChange={(o) => setRegion(o.value)}
      options={regionOptions}
      styles={customStyles}
      placeholder="Región"
    />
  </div>

  {/* CENTRO → un poco más a la derecha */}
  <div className="justify-self-center md:translate-x-8">
    <Select
      menuPortalTarget={document.body}
      classNamePrefix="rs"
      value={countryOptions.find(o => o.value === country)}
      onChange={(o) => setCountry(o.value)}
      options={countryOptions}
      styles={customStyles}
      placeholder="País"
    />
  </div>

  {/* DERECHA → un poco más a la derecha */}
  <div className="justify-self-center md:justify-self-end md:translate-x-6">
    <Select
      menuPortalTarget={document.body}
      classNamePrefix="rs"
      value={activityOptions.find(o => o.value === activity)}
      onChange={(o) => {
        setActivity(o.value);
        setPage(1);
      }}
      options={activityOptions}
      styles={customStyles}
      placeholder="Actividad"
    />
  </div>
</div>


          {/* ===== RESULTS ===== */}
          <div className="flex items-center justify-between text-sm text-gray-600 max-w-6xl mx-auto mt-10">
            <span>{filtered.length} Resultados</span>
            <span className="uppercase tracking-wide">
              Afficher uniquement les projets terminés
            </span>
          </div>

          {/* ================= PROJECT GRID ================= */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visible.map((project, idx) => (
              <div
                key={project.id}
                data-sr
                className={`${styles.scrollAnimate} group relative overflow-hidden rounded-2xl shadow-xl bg-black`}
                style={{ transitionDelay: `${idx * 90}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-semibold mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {project.title}
                  </h3>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <button className={styles["uiverse-btn"]}>
                      <span>Ver más</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
<br /><br /><br /><br />
{/* ================= PAGINATION (MUI) ================= */}
<div className="flex justify-center mt-12">
  <Stack spacing={2}>
    <Pagination
      count={totalPages}
      page={page}
      onChange={(e, value) => setPage(value)}
      shape="rounded"
      sx={{
        "& .MuiPaginationItem-root": {
          borderRadius: "12px",       // bordes redondos
          backgroundColor: "#ffffff", // color base blanco
          color: "#111827",           // texto oscuro
          fontWeight: 500,
          transition: "all 0.3s ease",
        },
        "& .MuiPaginationItem-root:hover": {
          backgroundColor: "#e5e7eb", // gris al hover
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "#111827", // seleccionado negro
          color: "#ffffff",           // texto blanco
        },
        "& .MuiPaginationItem-root.Mui-selected:hover": {
          backgroundColor: "#111827", // mantener negro al hover
        },
      }}
    />
  </Stack>
</div>

    </div>
  </section>
  <br /><br />
    </>
  );
}
