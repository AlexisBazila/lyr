import React, { useState, useRef, useEffect } from "react";
import { createMensaje } from "../../services/strapi";

import { FaMapMarkedAlt } from "react-icons/fa";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
import pretasacion from "../../assets/images/pretasacion.png";

function ContactValorationSection() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
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
    <section className="grid grid-cols-[60%_40%] justify-center items-start px-[10%] py-16  max-[1160px]:grid-cols-1">
      {/* Lado izquierdo */}
      <div className="flex flex-col justify-center mr-10 max-[1160px]:mr-0 max-[1160px]:mb-10">
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

        <div className="mt-10 w-full rounded-md flex items-center justify-center max-[1160px]:mt-0">
          <img
            src={pretasacion}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Formulario */}
      <form
        className=" grid grid-cols-2 gap-x-8 gap-y-5 max-[500px]:grid-cols-1"
        onSubmit={handleSubmit}
      >
        {/* Mensajes */}
        <div ref={messageRef} className="col-span-2">
          {status === "success" && (
            <p className="text-green-600 text-sm">
              ✔️ Solicitud enviada correctamente. Nos contactaremos pronto.
            </p>
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
            className="w-full border-0 border-b-2  focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
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
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
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
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
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
            name="direccion"
            value={form.direccion}
            onChange={handleChange}
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 pr-8"
          />
          <FaMapMarkedAlt className="absolute right-3 bottom-2 text-red-500 w-5 h-5" />
        </div>

        {/* Tipo de propiedad */}
        <div className="relative">
          <label className="block text-sm text-gray-600">
            Tipo de propiedad
          </label>
          <select
            className="appearance-none border-0 w-full border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
          >
            <option value="Casa">Casa</option>
            <option value="Departamento">Departamento</option>
            <option value="Terreno">Terreno</option>
          </select>
        </div>

        {/* Ambientes */}
        <div className="relative">
          <label className="block text-sm text-gray-600">Ambientes</label>
          <select
            className="appearance-none border-0 w-full border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
            name="ambientes"
            value={form.ambientes}
            onChange={handleChange}
          >
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
            name="antiguedad"
            value={form.antiguedad}
            onChange={handleChange}
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
            name="supcubierta"
            value={form.supecubierta}
            onChange={handleChange}
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
            name="suptotal"
            value={form.suptotal}
            onChange={handleChange}
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
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            rows="3"
            className="w-full border-0 border-b-2 focus:ring-0 border-gray-400 focus:border-black outline-none py-1"
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
