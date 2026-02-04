import { useParams } from "react-router-dom";
import { proyectos } from "./vistaproyectos.data.js";

const VistaProyecto = () => {
  const { id } = useParams();
  const proyecto = proyectos.find((p) => p.id === Number(id));

  if (!proyecto) {
    return (
      <p className="text-center text-gray-400 mt-10 text-base sm:text-lg font-medium">
        Proyecto no encontrado
      </p>
    );
  }

  return (
<section className="
  relative
  min-h-screen
  flex
  justify-center
  px-3 sm:px-6
  pt-32 sm:pt-40 md:pt-48
  pb-12 sm:pb-20
  overflow-hidden
  bg-black
">
      
      {/* FONDO */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute w-[200%] h-[200%]
          bg-[radial-gradient(circle,white_1.5px,transparent_3px),radial-gradient(circle,yellow_1.5px,transparent_3px)]
          bg-[size:120px_120px]
          animate-[moveParticles_20s_linear_infinite]"
        />
      </div>

      {/* CONTENIDO */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10 sm:gap-10">
        
        {/* IMAGEN */}
        <div className="w-full md:w-1/2 flex justify-cent<er">
          <img
            src={proyecto.content[0].image}
            alt={proyecto.title}
            className="
              w-full
              max-h-[180px] sm:max-h-[280px] md:max-h-[420px]
              object-contain
              rounded-lg sm:rounded-xl
              shadow-xl shadow-yellow-500/10
              transition-transform duration-500
              md:hover:scale-105
            "
          />
        </div>

        {/* TEXTO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          
          <h1 className="
            text-xl
            sm:text-3xl
            lg:text-5xl
            font-extrabold
            text-white
            mb-4 sm:mb-6
            tracking-tight
          ">
            {proyecto.title}
          </h1>

          <p className="
            text-gray-300
            text-sm sm:text-base lg:text-lg
            mb-4 sm:mb-6
            leading-relaxed
          ">
            {proyecto.description}
          </p>

          <p className="
            text-gray-400
            text-xs sm:text-sm lg:text-base
            leading-relaxed
          ">
            {proyecto.content[0].text}
          </p>

        </div>
      </div>
    </section>
  );
};

export default VistaProyecto;
