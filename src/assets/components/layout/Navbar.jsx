import { useEffect, useState } from "react";
import AMCO from "../../img/AMCO.png";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [language, setLanguage] = useState("EN");
  const [showDropdownDesktop, setShowDropdownDesktop] = useState(false);
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

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

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300
          ${show ? "translate-y-0" : "-translate-y-full"}
          ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}
      >
        <nav className="relative max-w-7xl mx-auto px-6 h-20 flex items-center">

          {/* LOGO */}
          <img
            src={AMCO}
            alt="AMCO"
            className={`absolute left-6 h-12 w-auto ${scrolled ? "" : "brightness-0 invert"}`}
          />

          {/* LINKS DESKTOP */}
          <ul
            className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8
              text-sm font-semibold uppercase tracking-wide
              ${scrolled ? "text-black" : "text-white"}`}
          >
            {["Inicio", "Nosotros", "Proyectos", "Blog", "Contacto"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                {item}
                <span
                  className={`absolute bottom-0 left-0 w-0 group-hover:w-full
                    transition-all duration-300 h-0.5
                    ${scrolled ? "bg-black" : "bg-white"}`}
                />
              </li>
            ))}
          </ul>

          {/* RIGHT ACTIONS */}
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
              onClick={() => setShowDropdownDesktop(prev => !prev)}
              className={`hidden md:flex items-center gap-1 cursor-pointer
                text-sm font-semibold uppercase tracking-wide
                ${scrolled ? "text-black" : "text-white"}`}
            >
              {language}
              <FaChevronDown className="text-[10px] transition-transform duration-300" />
            </div>

            {/* LANGUAGE DROPDOWN DESKTOP */}
            {showDropdownDesktop && (
              <ul className="absolute top-full right-0 mt-2 w-40 bg-white border border-black rounded-xl shadow-md py-2 z-50">
                {["PT", "EN", "ES"].map((lang) => (
                  <li
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setShowDropdownDesktop(false);
                    }}
                    className="mx-2 px-4 py-3 rounded-lg cursor-pointer text-sm font-semibold uppercase hover:bg-gray-100"
                  >
                    {lang}
                  </li>
                ))}
              </ul>
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
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-[70%] max-w-xs bg-white z-50 md:hidden
          transform transition-all duration-500 ease-in-out
          ${showMobileMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <i
            className="ri-close-line text-2xl cursor-pointer"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        {/* LOGO */}
        <div className="px-6">
          <div className="flex justify-center mb-4">
            <img src={AMCO} alt="AMCO" className="h-10 w-auto opacity-90" />
          </div>
          <div className="flex justify-center">
            <div className="h-px w-[75%] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          </div>
        </div>

        {/* LINKS */}
        <ul className="flex flex-col gap-6 px-6 py-10 text-lg font-semibold uppercase">
          {["Inicio", "Nosotros", "Proyectos", "Blog", "Contacto"].map((item) => (
            <li key={item} className="cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Lenguaje DROPDOWN MOBILE */}
        <div className="mt-auto px-6 pb-10">
          <div className="relative w-full">
            {/* Trigger */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setShowDropdownMobile(prev => !prev)}
              onKeyDown={(e) => e.key === "Enter" && setShowDropdownMobile(prev => !prev)}
              className="flex items-center justify-between px-4 py-3 bg-white cursor-pointer select-none transition-all duration-300 border border-black"
            >
              <span className="text-sm font-semibold uppercase text-gray-700">
                Idioma
              </span>
              <FaChevronDown
                className={`text-sm text-gray-500 transition-transform duration-300 ${showDropdownMobile ? "rotate-180" : ""}`}
              />
            </div>

            {/* Dropdown MOBILE */}
            {showDropdownMobile && (
              <div className="absolute left-0 right-0 mt-2 bg-white border border-black shadow-md overflow-hidden z-50">
                {["PT", "EN", "ES"].map((lang) => (
                  <div
                    key={lang}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                      setLanguage(lang);
                      setShowDropdownMobile(false);
                    }}
                    onKeyDown={(e) =>
                      e.key === "Enter" && (() => {
                        setLanguage(lang);
                        setShowDropdownMobile(false);
                      })()
                    }
                    className={`px-4 py-3 text-sm font-semibold uppercase cursor-pointer transition-colors duration-200 ${
                      language === lang
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {lang}
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
