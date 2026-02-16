import React, { useState, useRef, useEffect } from "react";
import { createMensaje } from "../../services/strapi";
import { CONTACT_CONFIG } from "../../config/contact";

import { FaMapMarkedAlt, FaWhatsapp } from "react-icons/fa";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import pretasacion from "../../assets/images/pretasacion.png";

function ContactValorationSection() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    celular: "",
    email: "",
    direccion: "",
    tipo: "",
    ambientes: "",
    antiguedad: "",
    supcubierta: "",
    suptotal: "",
    descripcion: "",
  });

  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [whatsappURL, setWhatsappURL] = useState(null);

  const messageRef = useRef(null);

  useEffect(() => {
    if (status === "success" || status === "error") {
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await createMensaje({
        ...form,
        origen: "tasacion",
      });

      const text = `
Nueva solicitud de pre-tasación:

Nombre: ${form.nombre}
Teléfono: ${form.telefono || "No especificado"}
Celular: ${form.celular || "No especificado"}
Email: ${form.email || "No especificado"}

Dirección: ${form.direccion}
Tipo: ${form.tipo}
Ambientes: ${form.ambientes}
Antigüedad: ${form.antiguedad || "No especificado"}

Superficie cubierta: ${form.supcubierta || "No especificado"} m²
Superficie total: ${form.suptotal || "No especificado"} m²

Descripción:
${form.descripcion || "Sin descripción"}
      `;

      const url = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        text,
      )}`;

      setWhatsappURL(url);
      setStatus("success");

      setForm({
        nombre: "",
        telefono: "",
        celular: "",
        email: "",
        direccion: "",
        tipo: "",
        ambientes: "",
        antiguedad: "",
        supcubierta: "",
        suptotal: "",
        descripcion: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="grid grid-cols-[60%_40%] justify-center items-start px-[10%] py-16 max-[1160px]:grid-cols-1">
      {/* Lado izquierdo */}
      <div className="flex flex-col justify-center mr-10 max-[1160px]:mr-0 max-[1160px]:mb-10">
        <div>
          <TitleAndSubtitle
            title="Pre-Tasación"
            subtitle="Solicitá tu tasación online"
          />
          <LeftAlignedParagraph
            paragraphs={[
              "Completá el formulario y en breve un asesor se pondrá en contacto contigo.",
            ]}
          />
        </div>

        <div className="mt-10 w-full rounded-md flex items-center justify-center max-[1160px]:mt-0">
          <img
            src={pretasacion}
            alt="Pre tasación"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Formulario */}
      <form
        className="grid grid-cols-2 gap-x-8 gap-y-5 max-[500px]:grid-cols-1"
        onSubmit={handleSubmit}
      >
        {/* Mensajes */}
        <div ref={messageRef} className="col-span-2">
          {status === "success" && (
            <div className="text-green-700 text-sm space-y-3">
              <p>
                ✔️ Mensaje enviado correctamente. Si lo deseas, puedes continuar
                la conversación por WhatsApp.
              </p>

              {whatsappURL && (
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
                >
                  <FaWhatsapp className="mr-2" />
                  Continuar por WhatsApp
                </a>
              )}
            </div>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              ❌ Ocurrió un error al enviar la solicitud.
            </p>
          )}
        </div>

        {/* Nombre */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label className="block text-sm text-gray-600">Teléfono</label>
          <input
            type="text"
            name="telefono"
            value={form.telefono}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Celular */}
        <div>
          <label className="block text-sm text-gray-600">Celular</label>
          <input
            type="text"
            name="celular"
            value={form.celular}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Dirección */}
        <div className="col-span-2 relative max-[500px]:col-span-1">
          <label className="block text-sm text-gray-600">
            Dirección de la propiedad a tasar
          </label>
          <input
            type="text"
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 pr-8 bg-transparent"
          />
          <FaMapMarkedAlt className="absolute right-3 bottom-2 text-red-500 w-5 h-5" />
        </div>

        {/* Tipo */}
        <div>
          <label className="block text-sm text-gray-600">
            Tipo de propiedad
          </label>
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="appearance-none border-0 w-full border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          >
            <option value="">Seleccione</option>
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>

        {/* Ambientes */}
        <div>
          <label className="block text-sm text-gray-600">Ambientes</label>
          <select
            name="ambientes"
            value={form.ambientes}
            onChange={handleChange}
            className="appearance-none border-0 w-full border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          >
            <option value="">Seleccione</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3+">3+</option>
          </select>
        </div>

        {/* Antigüedad */}
        <div>
          <label className="block text-sm text-gray-600">Antigüedad</label>
          <input
            type="text"
            name="antiguedad"
            value={form.antiguedad}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          />
        </div>

        {/* Superficie cubierta */}
        <div className="relative">
          <label className="block text-sm text-gray-600">
            Superficie cubierta
          </label>
          <input
            type="number"
            name="supcubierta"
            value={form.supcubierta}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 pr-6 bg-transparent"
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
            name="suptotal"
            value={form.suptotal}
            onChange={handleChange}
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 pr-6 bg-transparent"
          />
          <span className="absolute right-3 bottom-2 text-red-500 text-sm">
            m²
          </span>
        </div>

        {/* Descripción */}
        <div className="col-span-2 max-[500px]:col-span-1">
          <label className="block text-sm text-gray-600">Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows="3"
            className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
          ></textarea>
        </div>

        {/* Botón */}
        <div className="col-span-2 mt-4 max-[500px]:col-span-1">
          <button
            type="submit"
            disabled={status === "loading"}
            className={`bg-black text-white px-8 py-2 rounded-sm transition ${
              status === "loading"
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-800"
            }`}
          >
            {status === "loading" ? "Enviando..." : "Solicitar tasación"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactValorationSection;
