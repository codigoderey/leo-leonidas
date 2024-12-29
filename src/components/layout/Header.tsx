"use client";

import { useState } from "react";
import { Birthstone } from "next/font/google";
import Link from "next/link";
import { Cog, XClose } from "@/components/svg/Icons";
import { useLanguageContext } from "@/context/languageContext";

const birthstone = Birthstone({
  variable: "--font-birthstone",
  weight: "400",
});


const MainHeader = () => {

  const languageContext = useLanguageContext();
  
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
    console.log("showSideBar", showSideBar);
  };
  
  return (
    <header className="relative">
      <nav>
        <div className="flex justify-between items-center px-4 pb-4 pt-8">
          <Link
            href="/"
            className={`${birthstone.className} text-5xl md:text-6xl font-bold text-blue-200 hover:text-blue-300 transition-all`}
          >
            Leonidas
          </Link>
          <Cog onClick={() => setShowSideBar(true)} />
        </div>
      </nav>
      {showSideBar && (
        <>
          <aside className="absolute right-0 top-0 w-10/12 md:w-3/6 bg-blue-950 h-screen z-30 transition-all ease-in-out p-4">
            
            <XClose onClick={() => setShowSideBar(false)} />
            
            <nav className="relative py-8">
              <ul>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
                  >
                    {languageContext?.language === "en" ? "Home" : "Inicio"}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
                  >
                    {languageContext?.language === "en" ? "Get a quote" : "Obtener cotización"}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
                  >
                    {languageContext?.language === "en" ? "About" : "Sobre Nosotros"}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-2xl md:text-3xl font-bold text-blue-100 hover:text-blue-200 transition-all"
                  >
                    {languageContext?.language === "en" ? "Contact" : "Contacto"}
                  </Link>
                </li>
              </ul>
            </nav>
          </aside>
          <div onClick={() => setShowSideBar(false)} className="absolute right-0 top-0 w-screen bg-black/50 h-screen z-20 transition-all ease-in-out"/>
        </>
      )}
    </header>
  );
};

export default MainHeader;
