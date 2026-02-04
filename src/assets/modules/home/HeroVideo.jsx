import { useEffect, useState } from "react";
import { useLanguage } from "../../../i18n/languagecontext.jsx";

const HeroVideo = () => {
  const [visible, setVisible] = useState(true);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/prueba.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* CONTENIDO IZQUIERDA */}
      <div className="relative z-10 h-full flex items-center">
        <div className="
          pl-6
          sm:pl-10
          md:pl-20
          lg:pl-32
          2xl:pl-40
          text-left
        ">

          {/* CONSTRUCTORA */}
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className={`
              italic text-white
              text-[clamp(3rem,7vw,6rem)]
              sm:text-[clamp(3.5rem,7vw,6.5rem)]
              md:text-[clamp(4.5rem,8vw,7.5rem)]
              lg:text-[clamp(5.5rem,9vw,9rem)]
              2xl:text-[clamp(6.5rem,8vw,10rem)]

              tracking-[0.15em]
              sm:tracking-[0.2em]
              md:tracking-[0.25em]
              lg:tracking-[0.35em]

              leading-[0.95]
              transition-opacity duration-[2000ms]
              ${visible ? "opacity-100" : "opacity-0"}
            `}
          >
            {t('hero.constructora')}
          </h1>

          {/* AMCO */}
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className={`
              italic text-white
              text-[clamp(3rem,7vw,6rem)]
              sm:text-[clamp(3.5rem,7vw,6.5rem)]
              md:text-[clamp(4.5rem,8vw,7.5rem)]
              lg:text-[clamp(5.5rem,9vw,9rem)]
              2xl:text-[clamp(6.5rem,8vw,10rem)]

              tracking-[0.15em]
              sm:tracking-[0.2em]
              md:tracking-[0.25em]
              lg:tracking-[0.35em]

              leading-[0.95]
              transition-opacity duration-[2000ms]
              ${visible ? "opacity-100" : "opacity-0"}
            `}
          >
            AMCO
          </h1>

        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 animate-bounce text-white">
        <span className="text-xs tracking-widest mb-1">{t('hero.scroll')}</span>
        <div className="w-[2px] h-10 bg-gradient-to-b from-white to-transparent" />
      </div>

    </section>
  );
};

export default HeroVideo;
