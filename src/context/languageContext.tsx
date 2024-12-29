"use client";
import type { LanguageContextType } from "@/types/contextTypes";
import React, { createContext, useState } from "react";

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<string>("en");

  const setLanguageAndLocalStorage = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    return lang;
  };

  const verifyLanguageFromLocalStorage = () => {
    const storedLanguage = localStorage.getItem("language");

    if (storedLanguage) {
      setLanguage(storedLanguage);
      return storedLanguage;
    } else {
      setLanguageAndLocalStorage("es");
    }

    return "es";
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        setLanguageAndLocalStorage,
        verifyLanguageFromLocalStorage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const languageContext = React.useContext(LanguageContext);
  if (!languageContext) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return languageContext;
};
