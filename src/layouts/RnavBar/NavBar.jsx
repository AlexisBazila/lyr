import React, { useState } from "react";
import logo from "../../assets/images/LyRlogoTest.png";
import { IoMenu } from "react-icons/io5";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        {/* Logo centrado con botón hamburguesa absoluto */}
        <div className="mt-4 relative flex items-center justify-center w-full md:justify-center">
          <a href="#">
            <img src={logo} alt="Logo" className="h-16" />
          </a>

          {/* Botón Hamburguesa (solo mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden absolute right-0 p-2 w-10 h-10 flex items-center justify-center text-gray-200 rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            <i
              className="text-5xl"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <IoMenu />
            </i>
          </button>
        </div>

        {/* Menú Desktop */}
        <div className="hidden md:flex items-center justify-center h-20 text-xl">
          <ul className="flex space-x-10 text-white font-bold uppercase">
            <li>
              <a href="#inicio" className="hover:text-[#EC1F24] transition">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:text-[#EC1F24] transition">
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#propiedades"
                className="hover:text-[#EC1F24] transition"
              >
                Propiedades
              </a>
            </li>
            <li>
              <a href="#tasaciones" className="hover:text-[#EC1F24] transition">
                Tasaciones
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:text-[#EC1F24] transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú Mobile fullscreen */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center space-y-8 text-black text-2xl uppercase z-40">
          <a
            href="#"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#EC1F24]"
          >
            <img src={logo} alt="Logo" className="h-16" />
          </a>
          <a
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#EC1F24]"
          >
            Nosotros
          </a>
          <a
            href="#propiedades"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#EC1F24]"
          >
            Propiedades
          </a>
          <a
            href="#tasaciones"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#EC1F24]"
          >
            Tasaciones
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="hover:text-[#EC1F24]"
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
