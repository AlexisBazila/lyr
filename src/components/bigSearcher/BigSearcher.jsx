import React, { useEffect } from "react";
import { LuMapPin } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { LiaKeySolid } from "react-icons/lia";
import { MdBedroomParent } from "react-icons/md";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import "flyonui/flyonui.js";

function BigSearcher() {
  useEffect(() => {
    if (window.FlyonUI) {
      window.FlyonUI.init();
    }
  }, []);
  return (
    <div className="flex justify-center">
      <div className="bg-white p-8 rounded-b-lg shadow-[0px_4px_4px_#00000080] max-[800px]:w-full">
        <h3 className="text-2xl md:text-3xl text-black font-light mb-6">
          Encontrá lo que estás buscando
        </h3>

        <form
          action=""
          className="grid grid-cols-6   gap-3 items-center max-[800px]:grid-cols-1"
        >
          {/* <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center"></div> */}
          {/* Ubicación */}
          <div className="relative col-span-2 max-[550px]:col-span-1">
            <LuMapPin className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="text"
              placeholder="Ubicación"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 placeholder-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Tipo de propiedad */}
          <div className="relative col-span-2 max-[550px]:col-span-1">
            <BsBuildings className="absolute left-3 top-2.5 text-xl text-black" />
            <select className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black">
              <option>Tipo de propiedad</option>
              <option>Casa</option>
              <option>Departamento</option>
              <option>Lote</option>
              <option>Oficina</option>
              <option>Local comercial</option>
            </select>
          </div>

          {/* Operación */}
          <div className="relative col-span-1">
            <LiaKeySolid className="absolute left-3 top-2.5 text-xl text-black" />
            <select className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black">
              <option>Operación</option>
              <option>Venta</option>
              <option>Alquiler</option>
            </select>
          </div>

          {/* Ambientes */}
          <div className="relative col-span-1">
            <MdBedroomParent className="absolute left-3 top-2.5 text-xl text-black" />
            <select className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black">
              <option>Ambientes</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>

          {/* Moneda */}
          <div className="relative">
            <PiCurrencyCircleDollar className="absolute left-3 top-2.5 text-xl text-black" />
            <select className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black">
              <option>Moneda</option>
              <option>ARS</option>
              <option>USD</option>
            </select>
          </div>

          {/* Precio mínimo */}
          <div className="relative">
            <input
              type="text"
              placeholder="Min."
              className="w-full border border-black rounded-lg pl-3 pr-8 py-2 placeholder-black focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-3 top-2.5 text-black font-bold">
              $
            </span>
          </div>

          {/* Precio máximo */}
          <div className="relative">
            <input
              type="text"
              placeholder="Max."
              className="w-full border border-black rounded-lg pl-3 pr-8 py-2 placeholder-black focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-3 top-2.5 text-black font-bold">
              $
            </span>
          </div>

          {/* Otros + botón Buscar */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-1 border border-black rounded-lg px-3 py-2 text-black hover:bg-gray-100 max-[800px]:w-[50%]"
            >
              <FiFilter /> Otros
            </button>

            <button
              type="submit"
              className="bg-black text-white rounded-lg px-6 py-2 font-medium hover:bg-gray-800 max-[800px]:w-[50%]"
            >
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BigSearcher;
