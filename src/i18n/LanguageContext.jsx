import { createContext, useContext, useState } from "react";
import { translations } from "./translations.js";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ES");

  // Función para obtener la traducción anidada (ej: t('nav.home'))
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) value = value[k];
      else return key; // Retorna la clave si no encuentra traducción
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe ser usado dentro de un LanguageProvider");
  }
  return context;
};
