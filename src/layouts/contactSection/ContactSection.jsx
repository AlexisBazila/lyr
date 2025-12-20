import React, { useRef, useState } from "react";
import { createMensaje } from "../../services/strapi";

import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";

function ContactSection() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    interes: "",
    mensaje: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: "",
  });

  const messageRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await createMensaje({
        ...form,
        origen: "contacto",
      });

      setStatus({
        loading: false,
        success: true,
        error: false,
        message:
          "Mensaje enviado correctamente. Nos pondremos en contacto a la brevedad.",
      });

      setForm({
        nombre: "",
        email: "",
        telefono: "",
        interes: "",
        mensaje: "",
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: "Ocurrió un error al enviar el mensaje. Intente nuevamente.",
      });
    }

    // Scroll al mensaje
    setTimeout(() => {
      messageRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  return (
    <section className="grid grid-cols-[1.2fr_1fr] gap-10 px-[10%] pt-5 pb-16 max-[1160px]:grid-cols-1 max-[1160px]:px-[5%]">
      {/* --- FORMULARIO --- */}
      <div>
        <TitleAndSubtitle
          title={"Contáctanos"}
          subtitle={"Envíanos un mensaje"}
        />
        <LeftAlignedParagraph
          paragraphs={[
            "Completá el formulario y nuestro equipo se pondrá en contacto contigo a la brevedad.",
          ]}
        />

        {/* MENSAJE ESTADO */}
        {(status.success || status.error) && (
          <div
            ref={messageRef}
            className={`mb-6 p-4 rounded-sm text-sm ${
              status.success
                ? "bg-green-100 text-green-800 border border-green-300"
                : "bg-red-100 text-red-800 border border-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <div>
              <label className="block text-sm mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Dirección de email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 max-[640px]:grid-cols-1">
            <div>
              <label className="block text-sm mb-1">Interesado en:</label>
              <select
                name="interes"
                value={form.interes}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none pb-1 bg-transparent"
              >
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
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none pb-1"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Mensaje:</label>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none resize-none pb-1"
            />
          </div>

          <button
            type="submit"
            disabled={status.loading}
            className={`px-8 py-2 mt-2 rounded-sm transition ${
              status.loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-800"
            }`}
          >
            {status.loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>

      {/* --- DATOS DE CONTACTO --- */}
      <div className="border-l border-gray-300 pl-10 max-[1160px]:border-none max-[1160px]:pl-0">
        <div className="space-y-10">
          <div>
            <h3 className="font-bold text-lg mb-1">Llámenos</h3>
            <p className="text-gray-500">
              Comunicate con nosotros y te atenderemos personalmente.
            </p>
            <div className="flex items-center mt-2 text-red-500 font-medium">
              <FaPhone className="w-4 h-4 mr-2" />
              +54 3755 000000
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-1">Visítenos</h3>
            <div className="flex items-center mt-2 text-red-500 font-medium">
              <FaMapMarkerAlt className="w-4 h-4 mr-2" />
              Av. Misiones Nº0000
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-1">Whatsapp</h3>
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
