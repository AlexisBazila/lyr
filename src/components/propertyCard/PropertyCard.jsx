import React from "react";
import "./propertyCard.css";
import SmallButton from "../smallButton/SmallButton";
import { Link } from "react-router-dom";
import image from "../../assets/images/noimage.png";
import sellExample from "../../assets/images/sellExample.jpg";

import { GoDotFill } from "react-icons/go";
import { IoPauseCircle, IoEyeOffOutline } from "react-icons/io5";
import { LuMapPinHouse } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

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
}) {
  // Si existe miniatura, arma la URL completa
  const imageUrl = miniatura?.url
    ? `${import.meta.env.VITE_STRAPI_URL}${miniatura.url}`
    : "/fallback.jpg"; // opcional

  const estadosConfig = {
    Activo: { color: "#75f94c", icon: <GoDotFill /> },
    Pausado: { color: "red", icon: <IoPauseCircle /> },
    Oculto: { color: "orange", icon: <IoEyeOffOutline /> },
  };
  const config = estadosConfig[estado] || estadosConfig["Oculto"];
  return (
    <div className="w-full max-w-[370px] mx-auto bg-white border border-gray-200 rounded-lg shadow-s max-h-[600px]">
      {/* IMAGE */}
      <Link to={`/info-propiedad/${id}`}>
        <img
          className="rounded-t-lg w-full max-h-3/6 object-cover"
          src={imageUrl}
          alt={titulo}
        />
      </Link>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <div className="flex">
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
          {/* SUP CUBIERTA */}
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

          {/* AMBIENTES */}
          <div className="flex">
            <i className="text-[40px] text-red-600 max-[400px]:text-3xl">
              <IoIosBed />
            </i>
            <div className="leading-tight">
              <p className="font-bold max-[400px]:text-sm">{ambientes}</p>
              <p className="text-gray-600 max-[400px]:text-sm">Ambientes</p>
            </div>
          </div>

          {/* BAÑOS */}
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
        <div className="flex items-center">
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
