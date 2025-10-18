import React from "react";

import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ContactSection() {
  return (
    <section className="grid grid-cols-[1.2fr_1fr] gap-10 px-[10%] pt-5 pb-16  max-[1160px]:grid-cols-1 max-[1160px]:px-[5%]">
      {/* --- FORMULARIO --- */}
      <div>
        <TitleAndSubtitle
          title={"Contáctanos"}
          subtitle={"Envíanos un mensaje"}
        />
        <LeftAlignedParagraph
          paragraphs={[
            "Completá el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad. Estamos para ayudarte a resolver tus dudas o coordinar una visita.",
          ]}
        />

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                className="w-full border-0 border-b-2  focus:ring-0  border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Dirección de email</label>
              <input
                type="email"
                className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <div>
              <label className="block text-sm mb-1">Interesado en:</label>
              <select className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none pb-1 bg-transparent">
                <option value="">Seleccione una opción</option>
                <option value="venta">Compra o venta</option>
                <option value="tasacion">Tasación</option>
                <option value="alquiler">Alquiler</option>
              </select>
            </div>
            <div>
              <label className="block text-sm mb-1">Teléfono</label>
              <input
                type="tel"
                className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Mensaje:</label>
            <textarea
              rows="3"
              className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none resize-none pb-1"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-8 py-2 mt-2 rounded-sm hover:bg-gray-800 transition"
          >
            Enviar
          </button>
        </form>
      </div>

      {/* --- DATOS DE CONTACTO --- */}
      <div className="border-l border-gray-300 pl-10 max-[1160px]:border-none max-[1160px]:pl-0">
        <div className="space-y-10">
          <div>
            <h3 className="font-bold text-lg mb-1">Llámenos</h3>
            <p className="text-gray-500">
              Si necesitás asesoramiento o querés consultar por una propiedad,
              comunicate con nosotros y te atenderemos personalmente.
            </p>
            <div className="flex items-center mt-2 text-red-500 font-medium">
              <FaPhone className="w-4 h-4 mr-2" />
              +54 3755 000000
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-1">Visítenos</h3>
            <p className="text-gray-500">
              Acercate a nuestras oficinas para recibir atención personalizada y
              conocer nuestras últimas propiedades disponibles.
            </p>
            <div className="flex items-center mt-2 text-red-500 font-medium">
              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
              Av. Misiones Nº0000
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-1">Contáctenos por Whatsapp</h3>
            <p className="text-gray-500">
              También podés escribirnos por WhatsApp para recibir respuestas
              rápidas o coordinar una cita con uno de nuestros asesores.
            </p>
            <div className="flex items-center mt-2 text-red-500 font-medium">
              <FaWhatsapp className="w-4 h-4 mr-2" />
              +54 3755 900000
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
