import { Link } from "react-router-dom";
import { BsList, BsXLg } from "react-icons/bs";

import { useEffect, useState, useCallback } from "react";

import styleExt from "./NavBar.module.css";
import CheckMobile from "../Tools/CheckMobile.js";
import LinkButton from "../Item-Layout/LinkButton";

export default function NavBar() {
  const checkMobile = useCallback(CheckMobile, []);
  const isMobile = checkMobile();

  const sizeBtn = 36;
  const colorBtn = "#b98639";
  
  const [iconMenu, setIconMenu] = useState(<BsList color={colorBtn} size={sizeBtn} />);
  const [menuUp, setMenuUp] = useState(false);
  const [menuDown, setMenuDown] = useState(null);
  const [MenuOpen, setMenuOpen] = useState(false);
  const [linkAtivo, setLinkAtivo] = useState("Home");


  function openMenu(linkclick) {
    // Inverte o valor de MenuOpen
    setMenuOpen((prevState) => !prevState);

    setMenuUp(!menuUp);

    if (menuDown !== null) {
      // Inverte o valor de menuDown
      setMenuDown((prevState) => !prevState);
    } else {
      setMenuDown(false);
    }
    

    setLinkAtivo(linkclick);
  }
  // Sempre que isMobile mudar, reajusta o estado
  useEffect(() => {
    if (!isMobile) {
      setMenuOpen(false);
      setMenuUp(null);
      setMenuDown(null);
    }
  }, [isMobile]);

  useEffect(() => {
    if (!MenuOpen) {
      setTimeout(() => {
        setIconMenu(<BsList color={colorBtn} size={sizeBtn} />);
      }, 1000);
    } else {
      setIconMenu(<BsXLg color={colorBtn} size={sizeBtn} />);
    }
  }, [MenuOpen]);

  useEffect(() => {
    // Criando o MutationObserver
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "childList" &&
          mutation.target === document.querySelector("title")
        ) {
          setLinkAtivo(mutation.target.textContent.split(" ")[2]);
        }
       
      }
    });

    // Observando mudanças no nó do título
    observer.observe(document.querySelector("title"), {
      subtree: true,
      characterData: true,
      childList: true,
    });

    // Função de limpeza para desconectar o MutationObserver ao desmontar o componente
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main className={styleExt.main}>
      <nav>
        <LinkButton
          to="/"
          text={"C&Lio"}
          extStyle={true}
          className={styleExt.logo}
        />
        {isMobile && (
          <button
            title="botão menu"
            className={`${styleExt.MenuBtn}
          ${menuUp ? styleExt.btnOpen : ""} 
          ${menuUp ? "" : styleExt.btnClose}`}
            onClick={() => openMenu(linkAtivo)}
          >
            {iconMenu}
          </button>
        )}

        <ul
          className={`
               ${styleExt.menuMobile}
               ${menuUp ? styleExt.openMenu : null}
               ${!menuDown ? null : styleExt.closeMenu}
           `}
        >
          <Link
            onClick={openMenu}
            style={linkAtivo === "Home" ? {borderBottom: "1px solid #b98639" } : {}}
            to="/"
          >
            Home
          </Link>
          
          <Link
            onClick={openMenu}
            style={linkAtivo === "Projetos" ? { borderBottom: "1px solid  #b98639" } : {}}
            to="/Projetos"
          >
            Projetos
          </Link>
          
        </ul>
      </nav>
    </main>
  );
}
