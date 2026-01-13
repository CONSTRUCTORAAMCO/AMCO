import { useEffect, useState } from "react";

const HeroVideo = () => {
  const fullText = "Constructora AMCO";
  const subtitleText = "Más de 50 años desarrollando obras.";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [subIndex, setSubIndex] = useState(0);

  const finishedTyping = index === fullText.length;

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  useEffect(() => {
    if (!finishedTyping) return;
    if (subIndex < subtitleText.length) {
      const timeout = setTimeout(() => {
        setSubText((prev) => prev + subtitleText[subIndex]);
        setSubIndex(subIndex + 1);
      }, 55);
      return () => clearTimeout(timeout);
    }
  }, [finishedTyping, subIndex, subtitleText]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">


      {/* Video */}
      <video autoPlay muted loop playsInline className=" absolute inset-0 w-full h-full object-cover will-change-transform transform-gpu brightness-100">
        <source src="/video/prueba.mp4" type="video/mp4" />
      </video>

      {/* Overlay cinematográfico */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">

        {/* TÍTULO */}
        <h1 className="font-extrabold leading-[0.95] tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white drop-shadow-[0_12px_35px_rgba(0,0,0,0.9)] text-[clamp(3.2rem,9vw,7.5rem)] mb-3">
        {text}
          <span className="animate-pulse text-white ml-1">|</span>
        </h1>

        {/* SUBTÍTULO */}
        {finishedTyping && (
          <span className="font-playfair italic tracking-widest text-[clamp(1.7rem,4.5vw,3.9rem)] text-yellow-400 scale-x-110 opacity-95 mt-2 animate-[fadeUp_1s_ease-out_forwards] [text-shadow: 1px_1px_0_#000,  2px_2px_0_#000, 3px_3px_0_#000,  6px_6px_14px_rgba(0,0,0,0.9)]">
            {subText}
            {subIndex < subtitleText.length && (
              <span className="animate-pulse text-black ml-1">|</span>
            )}
          </span>
        )}

        {/* Línea elegante */}
        <div className="w-28 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-6 opacity-90" />

        {/* Manifiesto */}
        <p className="mt-6 max-w-xl uppercase tracking-[0.28em] text-[clamp(1.1rem,3.5vw,1.6rem)] opacity-80">
          Llegó el futuro y lo estamos construyendo
        </p>
        {/* Indicador scroll */}
        <div className="absolute bottom-6 flex flex-col items-center opacity-70 animate-bounce">
          <span className="text-xs tracking-widest mb-1">SCROLL</span>
          <div className="w-[2px] h-10 bg-gradient-to-b from-white to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default HeroVideo;
