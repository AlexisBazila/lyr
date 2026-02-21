import React from "react";
import "./propertyCard.css";
import SmallButton from "../smallButton/SmallButton";
import { Link } from "react-router-dom";

import { GoDotFill } from "react-icons/go";
import { IoPauseCircle, IoEyeOffOutline } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";
import { FaStar } from "react-icons/fa";

function PropertyCard({
  id,
  titulo,
  precio,
  direccion,
  ambientes,
  banios,
  supcubierta,
  tipo,
  transaccion,
  moneda,
  estado,
  miniatura,
  destacado,
}) {
  const imageUrl = miniatura?.url
    ? `${import.meta.env.VITE_STRAPI_URL}${miniatura.url}`
    : "/fallback.jpg";

  const estadosConfig = {
    Activo: { color: "#75f94c", icon: <GoDotFill /> },
    Pausado: { color: "red", icon: <IoPauseCircle /> },
    Oculto: { color: "orange", icon: <IoEyeOffOutline /> },
  };

  const config = estadosConfig[estado] || estadosConfig["Oculto"];
  return (
    <div className="relative w-full max-w-[370px] mx-auto bg-white border border-gray-200 rounded-lg shadow-s flex flex-col overflow-hidden">
      {/* BADGE DESTACADO */}
      {destacado && (
        <div className="absolute top-3 right-3 z-20 bg-black text-white px-3 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-md">
          <FaStar className="text-yellow-400" />
          Destacada
        </div>
      )}

      {/* IMAGE */}
      <Link to={`/info-propiedad/${id}`} className="relative">
        <img
          className="rounded-t-lg w-full h-[220px] object-cover"
          src={imageUrl}
          alt={titulo}
        />
      </Link>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-1">
        {/* TITLE */}
        <div className="flex items-center gap-2">
          <i className="text-3xl" style={{ color: config.color }}>
            {config.icon}
          </i>
          <h4 className="mb-0 text-xl tracking-tight text-black">
            {tipo} - {transaccion}
          </h4>
        </div>

        <h5 className="mb-2 text-xl font-bold tracking-tight text-black">
          {titulo}
        </h5>

        {/* FEATURES */}
        <div className="mb-6 mt-6 flex flex-col min-[300px]:flex-row justify-between">
          <div className="flex">
            <i className="text-[40px] text-red-600 max-[400px]:text-3xl">
              <TbRulerMeasure2 />
            </i>
            <div className="leading-tight">
              <p className="font-bold max-[400px]:text-sm">
                {supcubierta} m<sup>2</sup>
              </p>
              <p className="text-gray-600 max-[400px]:text-sm">Cubiertos</p>
            </div>
          </div>

          <div className="flex">
            <i className="text-[40px] text-red-600 max-[400px]:text-3xl">
              <IoIosBed />
            </i>
            <div className="leading-tight">
              <p className="font-bold max-[400px]:text-sm">{ambientes}</p>
              <p className="text-gray-600 max-[400px]:text-sm">Ambientes</p>
            </div>
          </div>

          <div className="flex">
            <i className="text-[40px] text-red-600 max-[400px]:text-3xl">
              <GiBathtub />
            </i>
            <div className="leading-tight">
              <p className="font-bold max-[400px]:text-sm">{banios}</p>
              <p className="text-gray-600 max-[400px]:text-sm">Baños</p>
            </div>
          </div>
        </div>

        {/* LOCATION */}
        <div className="flex items-center mb-3">
          <i className="mr-3 text-lg">
            <LuMapPinHouse />
          </i>
          <p>{direccion}</p>
        </div>

        {/* PRICE & BUTTON */}
        <div className="flex items-center mt-auto">
          <SmallButton
            caption="Ver"
            className="mr-6 px-8 py-3 font-bold"
            to={`/info-propiedad/${id}`}
          />

          <h5 className="text-3xl font-bold border-black border-l-2 pl-2 max-[400px]:text-2xl max-[300px]:text-xl">
            {precio?.toLocaleString("es-AR")} {moneda}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
