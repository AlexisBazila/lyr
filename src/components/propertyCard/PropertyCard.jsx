import React from "react";
import "./propertyCard.css";
import SmallButton from "../smallButton/SmallButton";
import image from "../../assets/images/noimage.png";
import sellExample from "../../assets/images/sellExample.jpg";

import { GoDotFill } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

function PropertyCard({
  titulo,
  precio,
  direccion,
  ambientes,
  banios,
  supcubierta,
}) {
  return (
    <div className="w-full max-w-[370px] mx-auto bg-white border border-gray-200 rounded-lg shadow-s">
      {/* IMAGE */}
      <a href="#">
        <img
          className="rounded-t-lg w-full max-h-3/6 object-cover"
          src={sellExample || image}
          alt={titulo}
        />
      </a>

      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <div className="flex">
          <i className="text-[#75f94c] text-3xl">
            <GoDotFill />
          </i>
          <h4 className="mb-0 text-xl tracking-tight text-black">Propiedad</h4>
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
            to="/info-propiedad"
          />

          <h5 className="text-3xl font-bold border-black border-l-2 pl-2 max-[400px]:text-2xl max-[300px]:text-xl">
            {precio?.toLocaleString("es-AR")} AR$
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
