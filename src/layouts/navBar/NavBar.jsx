import React from "react";
import "./navBar.css";
import logo from "../../assets/images/LyRlogoTest.png";

function navBar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        <div className="mt-4">
          <a href="#">
            <img src={logo} alt="Logo" className="h-16" />
          </a>
        </div>

        <div className="flex items-center justify-center h-20 text-xl">
          <ul className="flex space-x-10 text-white font-bold uppercase">
            <li>
              <a
                href="#inicio"
                className="hover:text-[#EC1F24] transition-colors duration-300"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="hover:text-[#EC1F24] transition-colors duration-300"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#propiedades"
                className="hover:text-[#EC1F24] transition-colors duration-300"
              >
                Propiedades
              </a>
            </li>
            <li>
              <a
                href="#tasaciones"
                className="hover:text-[#EC1F24] transition-colors duration-300"
              >
                Tasaciones
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-[#EC1F24] transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default navBar;
