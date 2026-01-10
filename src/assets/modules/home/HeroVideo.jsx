const HeroVideo = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/prueba.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Contenido encima del video */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Creamos experiencias digitales
        </h1>

        <p className="max-w-2xl text-lg md:text-xl mb-8">
          Innovación, tecnología y diseño para empresas modernas
        </p>

        <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition rounded-md text-sm font-semibold uppercase tracking-wide">
          Conócenos
        </button>
      </div>

    </section>
  );
};

export default HeroVideo;
