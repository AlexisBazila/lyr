import React from "react";

import { GoDotFill } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";
import { RxBorderSolid } from "react-icons/rx";

function PropertyTitleAndSubtitle({ title, subtitle, tipo, operacion }) {
  return (
    <div className="m-[5px] text-black">
      {/* Breadcrumb o ruta */}
      <div>
        <p className="text-sm text-gray-600 mb-3">
          Propiedades &gt; {tipo} &gt; {operacion} &gt; <strong>{title}</strong>
        </p>
      </div>

      {/* Título + tipo de operación */}
      <div className="flex flex-wrap items-center text-[36px] uppercase max-[1500px]:text-[26px] max-[500px]:text-lg">
        <div className="h-[1px] w-[35px] bg-black mr-[7px]" />
        <h2 className="truncate whitespace-nowrap overflow-hidden text-ellipsis max-w-[65%]">
          {title}
        </h2>
        <div className="flex items-center ml-[1%]">
          <i className="text-[#75f94c] text-3xl">
            <GoDotFill />
          </i>
          <p className="text-xl font-[600] ml-1">{operacion}</p>
        </div>
      </div>

      {/* Dirección */}
      <div className="grid grid-cols-[auto_1fr] gap-3 text-[40px] max-[1500px]:text-[30px]">
        <i className="text-lg text-[#EC1F24] mt-[5px]">
          <LuMapPinHouse />
        </i>
        <h3 className="leading-tight max-[500px]:text-lg">{subtitle}</h3>
      </div>
    </div>
  );
}

export default PropertyTitleAndSubtitle;
