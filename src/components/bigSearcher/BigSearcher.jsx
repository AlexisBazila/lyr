import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { LiaKeySolid } from "react-icons/lia";
import { MdBedroomParent } from "react-icons/md";
import { PiCurrencyCircleDollar } from "react-icons/pi";
import { FiFilter } from "react-icons/fi";
import "flyonui/flyonui.js";
import { getTipos, getOperaciones } from "../../services/propiedades";
import { fechTipos, fechOperaciones, fechMonedas } from "../../services/strapi";

function BigSearcher() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.FlyonUI) {
      window.FlyonUI.init();
    }
  }, []);

  const [tipos, setTipos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tipos = await fechTipos();
      setTipos(tipos);
    };
    fetchData();
  }, []);

  const [operaciones, setOperaciones] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const operaciones = await fechOperaciones();
      console.log(operaciones);
      setOperaciones(operaciones);
    };
    fetchData();
  }, []);

  const [monedas, setMonedas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const monedas = await fechMonedas();
      setMonedas(monedas);
    };
    fetchData();
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
              {tipos.map((t) => (
                <option key={t.id} value={t.tipo}>
                  {t.tipo}
                </option>
              ))}
            </select>
          </div>

          {/* Operación */}
          <div className="relative col-span-1">
            <LiaKeySolid className="absolute left-3 top-2.5 text-xl text-black" />
            <select className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black">
              <option>Operación</option>
              {operaciones.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.operacion}
                </option>
              ))}
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
              {monedas.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.simbolo}
                </option>
              ))}
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
