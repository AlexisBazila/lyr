import React from "react";

import { GoDotFill } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";
import { RxBorderSolid } from "react-icons/rx";

function PropertyTitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="m-[5px] text-black">
      <div>
        {/* La ruta debe ser intercambiada por la ruta real de la propiedad en la base de datos */}
        <p>
          Propiedades &gt; Departamentos &gt; Alquiler &gt;{" "}
          <strong>{title}</strong>
        </p>
      </div>
      <div className="flex items-center text-[36px] uppercase max-[1500px]:text-[26px] ">
        <div className="h-[1px] w-[35px] bg-black mr-[7px] "></div>
        {/* El titulo debe ser cambiado por el nombre de la pripiedad */}
        <h2>{title}</h2>
        <div className="flex items-center ml-[1%]">
          <i className="text-[#75f94c] text-3xl">
            <GoDotFill />
          </i>
          {/* Esto debe ser reemplazado por el tipo de transaccion (Alquiler, Venta) */}
          <p className="text-xl font-[600]">Alquiler</p>
        </div>
      </div>
      <div className="flex items-center text-[40px] max-[1500px]:text-[30px] ">
        {/* El subtitulo debe ser Reemplazado por la direccion de la propiedad */}
        <i className="mr-3 text-lg text-[#EC1F24]">
          <LuMapPinHouse />
        </i>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default PropertyTitleAndSubtitle;
