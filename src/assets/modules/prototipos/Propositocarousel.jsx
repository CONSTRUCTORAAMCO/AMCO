import React, { useRef, useState, useEffect } from "react";
import propositoData from "./Proposito.data";
import "./Proposito.css";
import { useLanguage } from "../../../i18n/LanguageContext";

const Propositocarousel = () => {
  const carouselRef = useRef(null);

  const { t } = useLanguage();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const scrollAmount = 300;

  // Drag refs
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);

  /* -------------------- SCROLL BUTTONS -------------------- */
  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  const scrollNext = () => {
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const scrollPrev = () => {
    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  /* -------------------- DRAG (PC + MOBILE) -------------------- */
  const handlePointerDown = (e) => {
    isDragging.current = true;
    carouselRef.current.classList.add("dragging");

    startX.current = e.pageX ?? e.touches[0].pageX;
    scrollStart.current = carouselRef.current.scrollLeft;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const x = e.pageX ?? e.touches[0].pageX;
    const walk = (x - startX.current) * 1.4;
    carouselRef.current.scrollLeft = scrollStart.current - walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    carouselRef.current.classList.remove("dragging");
  };

  /* -------------------- AUTO SCROLL -------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused || !carouselRef.current) return;

      const el = carouselRef.current;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  /* -------------------- LISTENERS -------------------- */
  useEffect(() => {
    const el = carouselRef.current;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <section className="section">
      <div className="container">

        <div className="header">
          <h2>{t('proposito.title')}</h2>

          <div className="controls">
            <i
              className={`ri-arrow-left-line nav-icon ${
                !canScrollLeft ? "disabled" : ""
              }`}
              onClick={canScrollLeft ? scrollPrev : undefined}
            />

            <i
              className={`ri-arrow-right-line nav-icon primary ${
                !canScrollRight ? "disabled" : ""
              }`}
              onClick={canScrollRight ? scrollNext : undefined}
            />
          </div>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={carouselRef}
            className="carousel snap-x snap-mandatory"
            onTouchStart={handlePointerDown}
            onTouchMove={handlePointerMove}
            onTouchEnd={handlePointerUp}

                        
          >
            {propositoData.map((item) => (
              <div className="card snap-center" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Propositocarousel;
