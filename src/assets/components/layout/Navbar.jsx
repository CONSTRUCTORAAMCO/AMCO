import { useEffect, useState, useRef } from "react"; // <- agregué useRef
import AMCO from "../../img/AMCO.png";
import { FaChevronDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState("EN");
  const [showDropdownDesktop, setShowDropdownDesktop] = useState(false);
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  // Refs para detectar clicks fuera del dropdown desktop
  const dropdownDesktopRef = useRef(null);
  const dropdownDesktopTriggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setShow(!(currentScrollY > lastScrollY && currentScrollY > 100));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  //Cerrar dropdown desktop al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownDesktopRef.current &&
        !dropdownDesktopRef.current.contains(event.target) &&
        dropdownDesktopTriggerRef.current &&
        !dropdownDesktopTriggerRef.current.contains(event.target)
      ) {
        setShowDropdownDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* NAVBAR */}
        <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${show ? "translate-y-0" : "-translate-y-full"} ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
         <nav className="relative w-full h-20 flex items-center">
           {/* LOGO IMG */}
           <img src={AMCO} alt="AMCO" className={`absolute left-6 h-18 w-auto ${scrolled ? "" : "brightness-0 invert"}`} />
           {/* LINKS DESKTOP */}
           <ul className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-sm font-semibold uppercase tracking-wide ${scrolled ? "text-black" : "text-white"}`}>
             {["Inicio", "Nosotros", "Proyectos", "Blog", "Contacto"].map((item) => (
               <li key={item} className="relative group cursor-pointer">
                 {item}
                 <span className={`absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 h-0.5 ${scrolled ? "bg-black" : "bg-white"}`} />
               </li>
             ))}
           </ul>

          <div className="absolute right-6 flex items-center gap-4">

            {/* SEARCH INLINE */}
            <div className="relative flex items-center gap-2">
              <i
                onClick={() => setShowSearch(prev => !prev)}
                className={`ri-search-line cursor-pointer text-lg ${scrolled ? "text-black" : "text-white"}`}
              />
              <input
                type="text"
                placeholder="Buscar..."
                className={`transition-all duration-300
                  bg-transparent border-b outline-none text-sm
                  ${scrolled ? "text-black border-black" : "text-white border-white"}
                  ${showSearch ? "w-36 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
              />
            </div>

            {/* LANGUAGE DESKTOP */}
            <div
              ref={dropdownDesktopTriggerRef} // 🟢 agregué ref al trigger
              onClick={() => setShowDropdownDesktop(prev => !prev)}
              className={`hidden md:flex items-center gap-1 cursor-pointer
                text-sm font-semibold uppercase tracking-wide
                ${scrolled ? "text-black" : "text-white"}`}
            >
              {language}
              <FaChevronDown className="text-[10px] transition-transform duration-300" />
            </div>

            {/* DROPDOWN DESKTOP */}
            {showDropdownDesktop && (
              <div
                ref={dropdownDesktopRef} // 🟢 agregué ref al dropdown
                className="
                  absolute right-0 top-full mt-2
                  bg-white/95 backdrop-blur-xl
                  shadow-xl rounded-2xl
                  p-4 flex flex-col space-y-3
                  z-50
                  w-52
                  animate-[fadeIn_0.25s_ease-out]
                "
              >
                {[
                  { name: "Portugues", code: "PT" },
                  { name: "Español", code: "ES" },
                  { name: "Ingles", code: "GB" },
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      setLanguage(item.name);
                      setShowDropdownDesktop(false);
                    }}
                    className={`
                      cursor-pointer font-bold text-sm
                      py-3 min-h-[42px]
                      rounded-xl
                      w-full
                      flex items-center
                      text-left
                      px-6 gap-4
                      transition-all duration-300
                      ${language === item.name
                        ? "bg-gray-100 text-black shadow-sm scale-[1.03]"
                        : "text-gray-600 hover:bg-gray-50 hover:scale-105 hover:shadow-lg hover:translate-x-1"
                      }
                    `}
                  >
                    <ReactCountryFlag
                      svg
                      countryCode={item.code}
                      style={{
                        width: "1.5em",
                        height: "1.5em",
                      }}
                    />
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* MOBILE BUTTON */}
            <div
              onClick={() => setShowMobileMenu(true)}
              className={`md:hidden text-2xl cursor-pointer ${scrolled ? "text-black" : "text-white"}`}
            >
              <i className="ri-menu-line"></i>
            </div>

          </div>
        </nav>
      </header>

      {/* OVERLAY */}
      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}


    {/* MOBILE DRAWER */}
    <div
      className={`
        fixed top-0 left-0 h-full w-[75%] max-w-sm 
        bg-white/95 backdrop-blur-xl 
        z-50 md:hidden
        transform transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)]
        shadow-2xl
        ${showMobileMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
      `}
    >
     {/* CLOSE BUTTON */}
     <div className="flex justify-end p-6">
       <i
         className="ri-close-line text-2xl cursor-pointer text-gray-600 hover:text-black transition-transform duration-300 hover:rotate-90"
         onClick={() => setShowMobileMenu(false)}
       />
     </div>

  {/* LOGO */}
  <div className="px-6">
    <div className="flex justify-center mb-6">
      <img
        src={AMCO}
        alt="AMCO"
        className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity"
      />
    </div>

    <div className="flex justify-center">
      <div className="h-px w-[70%] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
    </div>
  </div>

  {/* LINKS */}
  <ul className="flex flex-col gap-8 px-8 py-12 text-lg font-semibold uppercase tracking-wide">
    {["Inicio", "Nosotros", "Proyectos", "Blog", "Contacto"].map((item) => (
      <li
        key={item}
        className="
          relative cursor-pointer group
          text-gray-700
          transition-all duration-300
          hover:text-black hover:pl-4
        "
      >
        {/* Left indicator */}
        <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] bg-black rounded-full transition-all duration-300 group-hover:h-6" />
        {/* Text */}
        <span className="relative">
          {item}
          {/* Underline */}
          <span
            className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"/>
        </span>
      </li>
    ))}
  </ul>


        {/* Lenguaje DROPDOWN MOBILE */}
        <div className="mt-auto px-6 pb-10">
          <div className="relative w-full h-12">
            {/* Fake select */}
            <div
              onClick={() => setShowDropdownMobile(prev => !prev)}
              className="w-full h-full px-5 flex items-center justify-between
                 font-semibold text-sm cursor-pointer
                 bg-white shadow rounded-lg"
            >
              <span>{language}</span>

              <FaChevronDown
                className={`transition-transform duration-300 text-xs
          ${showDropdownMobile ? "rotate-0" : "rotate-180"}`}
              />
            </div>

          {/* Dropdown */}
          {showDropdownMobile && (
            <div className="absolute left-0 right-0 mt-2 bg-white shadow-xl rounded-2xl p-4 flex flex-col space-y-3 z-50 animate-[fadeIn_0.3s_ease-out]">
              {[
                { name: "Portugues", code: "PT" },
                { name: "Español", code: "ES" },
                { name: "Ingles", code: "GB" },
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    setLanguage(item.name);
                    setShowDropdownMobile(false);
                  }}
                  className={`
                    cursor-pointer font-bold text-sm
                    py-3 min-h-[44px]
                    rounded-xl transition-all duration-300
                    w-60 mx-auto
                    flex items-center gap-3
                    text-left px-5
                  
                    ${language === item.name
                      ? "bg-gray-100 text-black shadow-sm scale-[1.03]"
                      : "text-gray-600"}
                  `}
                >
                  {/* Bandera */}
                  <ReactCountryFlag
                    svg
                    countryCode={item.code}
                    style={{
                      width: "1.4em",
                      height: "1.4em",
                    }}
                  />

                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
          </div>
        </div>

      </div>
    </>
  );
};

export default Navbar;
