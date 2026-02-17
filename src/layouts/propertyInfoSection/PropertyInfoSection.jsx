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
  FaWhatsapp,
} from "react-icons/fa";
import { TbTemperatureSun, TbTemperatureSnow } from "react-icons/tb";
import { createMensaje } from "../../services/strapi";
import { CONTACT_CONFIG } from "../../config/contact";

function PropertyInfoSection({ propiedad }) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: "",
    referencia: "",
    referencia_otro: "",
  });

  const [status, setStatus] = useState("idle");
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
        origen: "propiedad",
        propiedad: propiedad.documentId,
      });

      const referenciaFinal =
        form.referencia === "Otro"
          ? form.referencia_otro || "Otro"
          : form.referencia || "No especificado";

      const text = `
Nueva consulta sobre propiedad:

Propiedad: ${propiedad.titulo}
Ubicación: ${propiedad.direccion}

Nombre: ${form.nombre}
Email: ${form.email || "No especificado"}
Teléfono: ${form.telefono || "No especificado"}
Referencia: ${referenciaFinal}

Mensaje:
${form.mensaje || "Solicito más información y disponibilidad."}
      `;

      const url = `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(
        text,
      )}`;

      setWhatsappURL(url);
      setStatus("success");

      setForm({
        nombre: "",
        telefono: "",
        email: "",
        mensaje: "",
        referencia: "",
        referencia_otro: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="grid grid-cols-[60%_40%] justify-center pb-[2%] min-h-[60vh] max-[900px]:grid-cols-1">
      {/* 🏠 Información principal */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_6px_rgba(0,0,0,0.1)] p-6 flex-1 mr-[2%] max-[900px]:mr-0 max-[900px]:mb-[2%]">
        <h2 className="text-4xl font-bold mb-6">
          |{propiedad.precio} {propiedad.moneda.simbolo}
        </h2>

        <div className="grid grid-cols-2 gap-y-4 max-[560px]:grid-cols-1">
          <Feature icon={<FaHome />} value={propiedad.tipo.tipo} label="Tipo" />
          <Feature
            icon={<FaClock />}
            value={`${propiedad.antiguedad} Años`}
            label="Antigüedad"
          />
          <Feature
            icon={<FaBed />}
            value={`${propiedad.ambientes} habitaciones`}
            label="Ambientes"
          />
          <Feature
            icon={<FaCar />}
            value={propiedad.garage ? "Sí" : "No"}
            label="Garage"
          />
          <Feature icon={<FaBath />} value={propiedad.banios} label="Baños" />
          <Feature
            icon={<FaBolt />}
            value={propiedad.luz ? "Sí" : "No"}
            label="Luz"
          />
          <Feature
            icon={<FaRulerCombined />}
            value={`${propiedad.supcubierta} m²`}
            label="Cubiertos"
          />
          <Feature
            icon={<FaTint />}
            value={propiedad.suministro_agua}
            label="Agua"
          />
          <Feature
            icon={<FaRulerCombined />}
            value={`${propiedad.suptotal} m²`}
            label="Terreno"
          />
          <Feature
            icon={<FaToilet />}
            value={propiedad.cloacas ? "Sí" : "No"}
            label="Cloacas"
          />
          <Feature icon={<FaHome />} value={propiedad.pisos} label="Pisos" />
          <Feature
            icon={<FaWifi />}
            value={propiedad.internet ? "Sí" : "No"}
            label="Internet"
          />
          <Feature
            icon={<TbTemperatureSun />}
            value={propiedad.calefaccion ? "Sí" : "No"}
            label="Calefacción"
          />
          <Feature
            icon={<TbTemperatureSnow />}
            value={propiedad.aire_acondicionado ? "Sí" : "No"}
            label="Aire Acondicionado"
          />
        </div>
      </div>

      {/* 📩 Formulario */}
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_6px_rgba(0,0,0,0.1)] p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-6">
            Más acerca de esta propiedad
          </h3>

          <div ref={messageRef} className="mb-4">
            {status === "success" && (
              <div className="text-green-700 text-sm space-y-3">
                <p>
                  ✔️ Mensaje enviado correctamente. Si lo deseas, puedes
                  continuar la conversación por WhatsApp.
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
                ❌ Error al enviar el mensaje.
              </p>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-2 gap-3 max-[1160px]:grid-cols-1"
          >
            <div>
              <label className="block text-xl text-gray-600 mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
              />
            </div>

            <div>
              <label className="block text-xl text-gray-600 mb-1">
                Teléfono
              </label>
              <input
                type="text"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
              />
            </div>

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
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
              />
            </div>

            {/* REFERENCIA */}
            <div className="col-span-2 max-[1160px]:col-span-1">
              <label className="block text-xl text-gray-600 mb-1">
                ¿Cómo nos conociste?
              </label>
              <select
                name="referencia"
                value={form.referencia}
                onChange={handleChange}
                required
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
              >
                <option value="">Seleccione una opción</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
                <option value="Google">Google</option>
                <option value="Radio">Radio</option>
                <option value="Cartel">Cartel</option>
                <option value="Referido">Referido</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* REFERENCIA OTRO */}
            {form.referencia === "Otro" && (
              <div className="col-span-2 max-[1160px]:col-span-1">
                <label className="block text-xl text-gray-600 mb-1">
                  ¿Dónde nos conociste?
                </label>
                <input
                  type="text"
                  name="referencia_otro"
                  value={form.referencia_otro}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 bg-transparent focus:ring-0 focus:ring-offset-0"
                />
              </div>
            )}

            <div className="col-span-2 max-[1160px]:col-span-1">
              <label className="block text-xl text-gray-600">Mensaje</label>
              <textarea
                rows="3"
                name="mensaje"
                value={form.mensaje}
                onChange={handleChange}
                className="w-full border-0 border-b-2 border-gray-400 focus:border-black outline-none py-1 focus:ring-0 focus:ring-offset-0"
              />
            </div>

            <div className="col-span-2 max-[1160px]:col-span-1 mt-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className={`bg-black text-white font-semibold px-6 py-2 transition ${
                  status === "loading"
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-800"
                }`}
              >
                {status === "loading" ? "Enviando..." : "Enviar"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="text-red-600 text-4xl">{icon}</div>
      <div>
        <p className="font-semibold text-xl">{value}</p>
        <p className="text-sm text-gray-500">{label}</p>
      </div>
    </div>
  );
}

export default PropertyInfoSection;
