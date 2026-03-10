import React from "react";
import logo from "../assets/images/LyRlogoTest.png";

const Proximamente = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white px-6">
      <div className="text-center flex flex-col items-center max-w-xl">
        {/* Logo */}
        <div className="mb-10 flex justify-center">
          <div className="p-6 rounded-full bg-white/100 border border-white/10 backdrop-blur-md">
            <img src={logo} alt="L&R" className="w-16 " />
          </div>
        </div>

        {/* Titulo */}
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide mb-4">
          Sitio en construcción
        </h1>

        {/* Texto */}
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Estamos trabajando para brindarte la mejor experiencia para encontrar
          tu próximo hogar.
          <br />
          Muy pronto nuestro sitio estará disponible.
        </p>

        {/* Loader */}
        <div className="w-10 h-10 border-4 border-white border-t-[#EC1F24] rounded-full animate-spin mb-8"></div>

        {/* Línea decorativa */}
        <div className="w-20 h-[2px] bg-[#EC1F24] mb-6"></div>

        {/* Contacto */}
        <a
          href="https://wa.me/5493755235694"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-400 hover:text-[#EC1F24] transition-colors duration-300"
        >
          Contactanos por WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Proximamente;
