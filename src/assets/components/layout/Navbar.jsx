import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import AMCO from "../../img/AMCO.png";
import { FaChevronDown } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { useLanguage } from "../../../i18n/languagecontext";
import { searchIndex } from "../../modules/buscador/buscador";
import { normalizeText } from "../../modules/buscador/busquedautil";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, setLanguage, t } = useLanguage();
  const [showDropdownDesktop, setShowDropdownDesktop] = useState(false);
  const [showDropdownMobile, setShowDropdownMobile] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const searchRef = useRef(null);
  const searchTriggerRef = useRef(null);
  const inputRef = useRef(null);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
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

  useEffect(() => {
    const handleClickOutsideSearch = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        searchTriggerRef.current &&
        !searchTriggerRef.current.contains(event.target)
      ) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideSearch);
    return () =>
      document.removeEventListener("mousedown", handleClickOutsideSearch);
  }, []);

  const navLinks = [
    { key: 'nav.home', path: '/' },
    { key: 'nav.about', path: '/nosotros' },
    { key: 'nav.projects', path: '/proyectos' },
    { key: 'nav.entrecalles', path: '/entrecalles' },
    { key: 'nav.contact', path: '/contacto' }
  ];

  const isScrolledStyle = scrolled || location.pathname !== "/";

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${show ? "translate-y-0" : "-translate-y-full"} ${isScrolledStyle ? "bg-white shadow-md" : "bg-transparent"}`}>
         <nav className="relative w-full h-20 flex items-center">
           <img src={AMCO} alt="AMCO" className={`absolute left-6 h-18 w-auto ${isScrolledStyle ? "" : "brightness-0 invert"}`} />
           <ul className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-sm font-semibold uppercase tracking-wide ${isScrolledStyle ? "text-black" : "text-white"}`}>
             {navLinks.map((link) => (
               <li 
                 key={link.key} 
                 className="relative group cursor-pointer"
                 onClick={() => navigate(link.path)}
               >
                 {t(link.key)}
                 <span className={`absolute bottom-0 left-0 w-0 group-hover:w-full transition-all duration-300 h-0.5 ${isScrolledStyle ? "bg-black" : "bg-white"}`} />
               </li>
             ))}
           </ul>

          <div className="absolute right-6 flex items-center gap-4">

            <div
              ref={searchRef}
              className="relative flex items-center gap-2"
            >
              <i
                ref={searchTriggerRef}
                onClick={() => {
                  setShowSearch((prev) => !prev);
                  if (!showSearch) {
                    setTimeout(() => inputRef.current && inputRef.current.focus(), 120);
                  }
                }}
                className={`ri-search-line cursor-pointer text-lg ${isScrolledStyle ? "text-black" : "text-white"}`}
              />

              <input
                ref={inputRef}
                type="text"
                placeholder={t('nav.search')}
                value={searchValue}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchValue(val);
                  if (!val.trim()) {
                    setSearchResults([]);
                    return;
                  }
                  const q = normalizeText(val);
                  const results = searchIndex.filter((item) =>
                    normalizeText(item.title).includes(q) ||
                    item.keywords.some((k) => normalizeText(k).includes(q))
                  );
                  setSearchResults(results.slice(0, 6));
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    if (searchResults && searchResults.length > 0) {
                      navigate(searchResults[0].path);
                      setShowSearch(false);
                      setSearchValue("");
                      setSearchResults([]);
                    }
                  }
                }}
                className={`transition-all duration-300
                  bg-transparent border-b outline-none text-sm
                  ${isScrolledStyle ? "text-black border-black" : "text-white border-white"}
                  ${showSearch ? "w-36 opacity-100" : "w-0 opacity-0 pointer-events-none"}`}
              />
            </div>

            {showSearch && searchResults.length > 0 && (
              <div className="absolute top-full mt-3 w-64 bg-white rounded-xl shadow-xl z-50">
                  {searchResults.length > 0 ? (
                    searchResults.map((item) => (
      <div
        key={item.path}
        onClick={() => {
          navigate(item.path);
          setShowSearch(false);
          setSearchValue("");
        }}
        className="px-4 py-3 cursor-pointer hover:bg-gray-100"
      >
        {item.title}
      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">{t('nav.search_no_results') || 'Sin resultados'}</div>
                  )}
  </div>
            )}

            <div
              ref={dropdownDesktopTriggerRef}
              onClick={() => setShowDropdownDesktop(prev => !prev)}
              className={`hidden md:flex items-center gap-1 cursor-pointer
                text-sm font-semibold uppercase tracking-wide
                ${isScrolledStyle ? "text-black" : "text-white"}`}
            >
              {language}
              <FaChevronDown className="text-[10px] transition-transform duration-300" />
            </div>

            {showDropdownDesktop && (
              <div
                ref={dropdownDesktopRef}
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
                  { name: "Español", code: "ES", value: "ES" },
                  { name: "Ingles", code: "GB", value: "EN" },
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      setLanguage(item.value);
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
                      transition-colors duration-300
                      ${language === item.value
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"
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

            <div
              onClick={() => setShowMobileMenu(true)}
              className={`md:hidden text-2xl cursor-pointer ${isScrolledStyle ? "text-black" : "text-white"}`}
            >
              <i className="ri-menu-line"></i>
            </div>

          </div>
        </nav>
      </header>

      {showMobileMenu && (
        <div
          onClick={() => setShowMobileMenu(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
        />
      )}

      <div className={` fixed top-0 left-0 h-full w-[75%] max-w-sm  bg-white/95 backdrop-blur-xl  z-50 md:hidden transform transition-all duration-500 ease-[cubic-bezier(.4,0,.2,1)] shadow-2xl ${showMobileMenu ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>

        <div className="flex justify-end p-6">
          <i
            className="ri-close-line text-2xl cursor-pointer text-gray-600 hover:text-black transition-transform duration-300 hover:rotate-90"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

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

        <ul className="flex flex-col gap-8 px-8 py-12 text-lg font-semibold uppercase tracking-wide">
          {navLinks.map((link) => (
            <li
              key={link.key}
              className="
                relative cursor-pointer group
                text-gray-700
                transition-all duration-300
                hover:text-black hover:pl-4
              "
              onClick={() => {
                navigate(link.path);
                setShowMobileMenu(false);
              }}
            >
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] bg-black rounded-full transition-all duration-300 group-hover:h-6" />
              <span className="relative">
                {t(link.key)}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"/>
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto px-6 pb-10">
          <div className="relative w-full h-12">
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

            {showDropdownMobile && (
              <div className="absolute left-0 right-0 mt-2 bg-white shadow-xl rounded-2xl p-4 flex flex-col space-y-3 z-50 animate-[fadeIn_0.3s_ease-out]">
                {[
                  { name: "Español", code: "ES", value: "ES" },
                  { name: "Ingles", code: "GB", value: "EN" },
                ].map((item) => (
                  <div
                    key={item.name}
                    onClick={() => {
                      setLanguage(item.value);
                      setShowDropdownMobile(false);
                    }}
                    className={`
                      cursor-pointer font-bold text-sm
                      py-3 min-h-[44px]
                      rounded-xl transition-all duration-300
                      w-60 mx-auto
                      flex items-center gap-3
                      text-left px-5
                      ${language === item.value
                        ? "bg-gray-100 text-black"
                        : "text-gray-600 hover:text-black hover:bg-gray-50"}
                    }
                    `}
                  >
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
