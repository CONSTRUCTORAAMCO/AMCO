import React, { useRef, useState, useEffect } from "react";
import propositoData from "./Proposito.data";
import "./Proposito.css";
import { useLanguage } from "../../../i18n/LanguageContext";

const Propositocarousel = () => {
  const carouselRef = useRef(null);
  const { t } = useLanguage();
  /* -------------------- STATES -------------------- */
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHoverPaused, setIsHoverPaused] = useState(false);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const interactionTimeout = useRef(null);
  const isTouchDevice = useRef(false);
  const scrollAmount = 300;

  /* -------------------- TOUCH DETECTION -------------------- */
  useEffect(() => {
    isTouchDevice.current =
      window.matchMedia("(pointer: coarse)").matches;
  }, []);

  /* -------------------- INTERACTION PAUSE -------------------- */
  const handleInteraction = () => {
    setIsInteractionPaused(true);
    clearTimeout(interactionTimeout.current);
    interactionTimeout.current = setTimeout(() => {
      setIsInteractionPaused(false);
    }, 6000);
  };

  /* -------------------- SCROLL BUTTONS -------------------- */
  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };
  const scrollNext = () => {
    carouselRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };
  const scrollPrev = () => {
    carouselRef.current?.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
  };

  /* -------------------- AUTOPLAY (SOLO PC) -------------------- */
  useEffect(() => {
    if (isTouchDevice.current) return;
    const interval = setInterval(() => {
      if (
        isHoverPaused ||
        isInteractionPaused ||
        !carouselRef.current
      ) {
        return;
      }
      const el = carouselRef.current;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        el.firstElementChild?.scrollIntoView({
          behavior: "auto",
          inline: "center",
        });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [isHoverPaused, isInteractionPaused]);

  /* -------------------- SCROLL LISTENER -------------------- */
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onScroll = () => {
      requestAnimationFrame(updateScrollButtons);
    };
    updateScrollButtons();
    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="header">
          <h2>{t("proposito.title")}</h2>

          <div className="controls">
            <i
              className={`ri-arrow-left-line nav-icon ${
                !canScrollLeft ? "disabled" : ""
              }`}
              onClick={() => {
                if (!canScrollLeft) return;
                handleInteraction();
                scrollPrev();
              }}
            />

            <i
              className={`ri-arrow-right-line nav-icon primary ${
                !canScrollRight ? "disabled" : ""
              }`}
              onClick={() => {
                if (!canScrollRight) return;
                handleInteraction();
                scrollNext();
              }}
            />
          </div>
        </div>

        <div
          className="carousel-wrapper"
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
        >
          <div ref={carouselRef} className="carousel">
            {propositoData.map((item) => (
              <div className="card snap-center" key={item.id}>
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Propositocarousel;
