import React, { useState, useRef, useEffect } from "react";
import {
  FaBath,
  FaBed,
  FaHome,
  FaRulerCombined,
  FaWifi,
  FaCar,
  FaBolt,
  FaTint,
  FaToilet,
  FaClock,
  FaWater,
  FaWhatsapp,
} from "react-icons/fa";
import { createMensaje } from "../../services/strapi";

function PropertyInfoSection({ propiedad }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("idle");
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
        origen: "propiedad",
        propiedad: propiedad.documentId,
      });

      setStatus("success");
      setForm({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hola
Me llamo ${form.nombre || "—"} y estoy interesado/a en la propiedad *${
      propiedad.titulo
    }* ubicada en ${propiedad.direccion}.

Email: ${form.email || "—"}
Teléfono: ${form.telefono || "—"}

Mensaje:
${form.mensaje || "Quisiera recibir más información y disponibilidad."}

¡Quedo atento/a, muchas gracias!`
  );

  return (
    <section className="grid grid-cols-[60%_40%] justify-center pb-[2%] min-h-[60vh] max-[900px]:grid-cols-1">
      {/* 🏠 Información principal */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_6px_rgba(0,0,0,0.1)]  p-6 flex-1 mr-[2%] max-[900px]:mr-0 max-[900px]:mb-[2%]">
        <h2 className="text-4xl font-bold mb-6">
          |{propiedad.precio} {propiedad.moneda.simbolo}
        </h2>

        <div className="grid grid-cols-2 gap-y-4 max-[560px]:grid-cols-1">
          <div className="flex items-center gap-3">
            <FaHome className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">{propiedad.tipo.tipo}</p>
              <p className="text-sm text-gray-500">Tipo</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaClock className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.antiguedad} Años
              </p>
              <p className="text-sm text-gray-500">Antigüedad</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaBed className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.ambientes} habitaciones
              </p>
              <p className="text-sm text-gray-500">Ambientes</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaCar className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.garage ? "Sí" : "No"}
              </p>
              <p className="text-sm text-gray-500">Garage</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaBath className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">{propiedad.banios}</p>
              <p className="text-sm text-gray-500">Baños</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaBolt className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.luz ? "Sí" : "No"}
              </p>
              <p className="text-sm text-gray-500">Luz</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaRulerCombined className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.supcubierta} m²
              </p>
              <p className="text-sm text-gray-500">Cubiertos</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaTint className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.agua ? "Sí" : "No"}
              </p>
              <p className="text-sm text-gray-500">Agua</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaRulerCombined className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">{propiedad.suptotal} m²</p>
              <p className="text-sm text-gray-500">Terreno</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaToilet className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.cloacas ? "Sí" : "No"}
              </p>
              <p className="text-sm text-gray-500">Cloacas</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaHome className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">{propiedad.pisos}</p>
              <p className="text-sm text-gray-500">Pisos</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <FaWifi className="text-red-600 text-4xl" />
            <div>
              <p className="font-semibold text-xl">
                {propiedad.internet ? "Sí" : "No"}
              </p>
              <p className="text-sm text-gray-500">Internet</p>
            </div>
          </div>
        </div>
      </div>

      {/* 📩 Formulario */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_6px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-6">
            Más acerca de esta propiedad
          </h3>

          {/* Mensajes */}
          <div ref={messageRef} className="mb-4">
            {status === "success" && (
              <p className="text-green-600 text-sm">
                ✔️ Mensaje enviado correctamente.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                ❌ Error al enviar el mensaje.
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-3 max-[1160px]:grid-cols-1"
          >
            {/* Nombre */}
            <div>
              <label className="block text-xl text-gray-600 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-xl text-gray-600 mb-1">
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
              />
            </div>

            {/* Email */}
            <div className="col-span-2 max-[1160px]:col-span-1">
              <label className="block text-xl text-gray-600 mb-1">
                Dirección de e-mail
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent"
              />
            </div>

            {/* Mensaje */}
            <div className="col-span-2 max-[1160px]:col-span-1">
              <label className="block text-xl text-gray-600">Mensaje</label>
              <textarea
                rows="3"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1"
              />
            </div>

            {/* Botones */}
            <div className="col-span-2 flex items-center gap-3 mt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`bg-black text-white font-semibold px-6 py-2 transition cursor-pointer ${
                  status === "loading"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-800"
                }`}
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </button>

              <a
                href={`https://wa.me/5493755447658?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white p-3 rounded-full"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PropertyInfoSection;
