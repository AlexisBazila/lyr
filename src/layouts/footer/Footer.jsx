import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../../assets/images/LyRlogoTest.png";
import abLogo from "../../assets/images/ABSistems.png";

function Footer() {
  return (
    <footer className="border-t border-gray-300 text-black">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1 */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="L&R Logo" className="h-14" />
            <h2 className="text-2xl font-light">
              <span className="font-semibold">Servicios</span> <br />{" "}
              Inmobiliarios
            </h2>
          </div>
          <p className="text-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="text-[#EC1F24] hover:opacity-75 text-4xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#EC1F24] hover:opacity-75 text-4xl">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="font-semibold mb-4">Mapa del sitio</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="#" className="hover:text-[#EC1F24]">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EC1F24]">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EC1F24]">
                Propiedades
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EC1F24]">
                Tasaciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#EC1F24]">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div>
          <h3 className="font-semibold mb-4">Contactanos</h3>
          <ul className="space-y-3 ">
            <li className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-[#EC1F24]" />
              <span>Av. Misiones 887, N3360 Oberá, Misiones</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaWhatsapp className="text-[#EC1F24]" />
              <span>+54 9 3755 23-5694</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-[#EC1F24]" />
              <span>mail@lyrinmobiliaria.com.ar</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="border-t border-gray-300 mt-6 py-4 text-center text-xl">
        Copyright © 2025 | Powered by{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <img
            src={abLogo}
            alt="AB Sistems"
            className="h-6 ml-1 inline-block"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
