import { useEffect, useRef, useState } from "react";
import { comunidades } from "./proposito.data.js";

export default function ComunidadesCarousel() {
  const containerRef = useRef(null);
  const [autoPlay, setAutoPlay] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  const isMobile = () => window.innerWidth < 640;

  /* ===== ANCHO REAL DEL ITEM (MISMO QUE CSS) ===== */
  const getItemWidth = () => {
    if (window.innerWidth < 640) return 180;
    if (window.innerWidth < 768) return 240;
    if (window.innerWidth < 1024) return 300;
    if (window.innerWidth < 1280) return 360;
    return 420;
  };

  const scrollNext = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: getItemWidth(),
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({
      left: -getItemWidth(),
      behavior: "smooth",
    });
  };

  /* ===== AUTOPLAY SOLO DESKTOP ===== */
  useEffect(() => {
    if (!autoPlay || isMobile()) return;

    const interval = setInterval(scrollNext, 2800);
    return () => clearInterval(interval);
  }, [autoPlay]);

  /* ===== DRAG (SAFARI FRIENDLY) ===== */
  const handleMouseDown = (e) => {
    if (!isMobile()) return;
    setIsDragging(true);
    startX.current = e.pageX;
    scrollStart.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const walk = e.pageX - startX.current;
    containerRef.current.scrollLeft = scrollStart.current - walk;
  };

  const stopDrag = () => setIsDragging(false);

  return (
    <section className="w-full mt-24 px-4 sm:px-8 lg:px-16"><br /><br /><br />
      {/* HEADER */}
      <div className="relative flex items-center justify-center mb-12">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] italic text-4xl sm:text-5xl md:text-6xl">
            Nuestros Proyectos
          </h2>
          <div className="w-24 h-px bg-gray-800 mx-auto mt-4 opacity-60" />
        </div>

        {/* FLECHAS */}
        <div className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 gap-6 text-2xl">
          <i
            onClick={scrollPrev}
            className="ri-arrow-left-line cursor-pointer hover:opacity-60"
          />
          <i
            onClick={scrollNext}
            className="ri-arrow-right-line cursor-pointer hover:opacity-60"
          />
        </div>
      </div>
<br /><br /><br />
      {/* CARRUSEL */}
      <div
        ref={containerRef}
        className={`
          flex justify-start
          overflow-x-auto scroll-smooth
          gap-4 sm:gap-6
          py-4
          ${isDragging ? "cursor-grabbing" : "cursor-grab"}
        `}
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
        onMouseEnter={() => !isMobile() && setAutoPlay(false)}
        onMouseLeave={() => {
          !isMobile() && setAutoPlay(true);
          stopDrag();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDrag}
        onMouseLeaveCapture={stopDrag}
      >
        <style>{`div::-webkit-scrollbar{display:none}`}</style>

        {comunidades.map((item, index) => (
          <article
            key={index}
            className="
              flex-shrink-0
              w-[180px]
              sm:w-[240px]
              md:w-[300px]
              lg:w-[360px]
              xl:w-[420px]
            "
          >
            {/* IMAGEN */}
            <div className="overflow-hidden rounded-xl h-[140px] sm:h-[200px] md:h-[260px] lg:h-[320px] xl:h-[380px]">
              <img
                src={item.image}
                alt={item.title}
                draggable={false}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500
                  sm:hover:scale-110
                "
              />
            </div>

            {/* TEXTO */}
            <div className="mt-4 text-center">
              <h3 className="uppercase text-sm sm:text-base lg:text-lg font-medium">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {item.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
