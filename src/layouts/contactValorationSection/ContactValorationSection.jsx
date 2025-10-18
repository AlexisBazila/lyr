import React from "react";
import { FaMapMarkedAlt, FaChevronDown } from "react-icons/fa";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ContactValorationSection() {
  return (
    <section className="grid grid-cols-[60%_40%] justify-center items-start px-[10%] py-16 gap-10 max-[1160px]:grid-cols-1">
      {/* Lado izquierdo */}
      <div className="flex flex-col justify-center">
        <div>
          <TitleAndSubtitle
            title="Pre-Tasación"
            subtitle={"Solicitá tu tasación online"}
          />
          <LeftAlignedParagraph
            paragraphs={[
              " Completá el formulario y en breve un asesor se pondrá en contacto contigo.",
            ]}
          />
        </div>

        <div className="mt-10 w-full h-[350px] bg-gray-100 rounded-md flex items-center justify-center">
          <img href="" className="w-[70%] h-[60%] rounded-sm" />
        </div>
      </div>

      {/* Formulario */}
      <form className=" grid grid-cols-2 gap-x-8 gap-y-5 max-[500px]:grid-cols-1">
        {/* Nombre */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm text-gray-600">Teléfono</label>
          <input
            type="text"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
          />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-sm text-gray-600">Celular</label>
          <input
            type="text"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
          />
        </div>

        {/* Dirección */}
        <div className="col-span-2 relative max-[500px]:col-span-1">
          <label className="block text-sm text-gray-600">
            Dirección de la propiedad a tasar
          </label>
          <input
            type="text"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 pr-8"
          />
          <FaMapMarkedAlt className="absolute right-3 bottom-2 text-red-500 w-5 h-5" />
        </div>

        {/* Tipo de propiedad */}
        <div className="relative">
          <label className="block text-sm text-gray-600">
            Tipo de propiedad
          </label>
          <select className="appearance-none border-0 w-full border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent">
            <option>Casa</option>
            <option>Departamento</option>
            <option>Terreno</option>
          </select>
        </div>

        {/* Ambientes */}
        <div className="relative">
          <label className="block text-sm text-gray-600">Ambientes</label>
          <select className="appearance-none border-0 w-full border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </select>
        </div>

        {/* Antigüedad */}
        <div>
          <label className="block text-sm text-gray-600">Antigüedad</label>
          <input
            type="text"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
          />
        </div>

        {/* Superficie cubierta */}
        <div className="relative">
          <label className="block text-sm text-gray-600">
            Superficie cubierta
          </label>
          <input
            type="number"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 pr-6"
          />
          <span className="absolute right-3 bottom-2 text-red-500 text-sm">
            m²
          </span>
        </div>

        {/* Superficie total */}
        <div className="relative">
          <label className="block text-sm text-gray-600">
            Superficie total
          </label>
          <input
            type="number"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 pr-6"
          />
          <span className="absolute right-3 bottom-2 text-red-500 text-sm">
            m²
          </span>
        </div>

        {/* Descripción */}
        <div className="col-span-2 max-[500px]:col-span-1">
          <label className="block text-sm text-gray-600">Descripción</label>
          <textarea
            rows="3"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
          ></textarea>
        </div>

        {/* Botón */}
        <div className="col-span-2 mt-4 max-[500px]:col-span-1">
          <button
            type="submit"
            className="bg-black text-white font-semibold py-2 px-8 rounded-sm hover:bg-red-600 transition"
          >
            Solicitar tasación
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactValorationSection;
