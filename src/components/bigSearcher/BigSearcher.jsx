import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";
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

  const [searchParams, setSearchParams] = useSearchParams();
  // función genérica para actualizar filtros
  function updateFilter(key, value) {
    const newParams = new URLSearchParams(searchParams);

    if (!value) newParams.delete(key); // si está vacío -> lo borro
    else newParams.set(key, value); // sino -> lo guardo

    setSearchParams(newParams); // actualiza URL → ReactQuery refetch
  }

  // Estado para filtros del formulario
  const [filters, setFilters] = useState({
    ubicacion: searchParams.get("ubicacion") || null,
    tipo: searchParams.get("tipo") || null,
    operacion: searchParams.get("operacion") || null,
    ambientes: searchParams.get("ambientes") || null,
    moneda: searchParams.get("moneda") || null,
    min: searchParams.get("min") || null,
    max: searchParams.get("max") || null,
  });

  // 📍 Al hacer click en BUSCAR -> redirige a Propiedades con filtros en URL
  const handleSubmit = (e) => {
    e.preventDefault();

    // build query only with non-empty values
    const qs = new URLSearchParams();
    Object.entries(filters).forEach(([k, v]) => {
      if (v !== "" && v !== null && v !== undefined) qs.set(k, v);
    });

    const queryString = qs.toString();
    navigate(`/propiedades${queryString ? `?${queryString}` : ""}`);
  };

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
          onSubmit={handleSubmit}
          className="grid grid-cols-6   gap-3 items-center max-[800px]:grid-cols-1"
        >
          {/* <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-8 gap-3 items-center"></div> */}
          {/* Ubicación */}
          <div className="relative col-span-2 max-[550px]:col-span-1">
            <LuMapPin className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="text"
              placeholder="Ubicación"
              value={filters.ubicacion}
              onChange={(e) =>
                setFilters({ ...filters, ubicacion: e.target.value })
              }
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 placeholder-black focus:ring-1 focus:ring-black"
            />
          </div>

          {/* Tipo de propiedad */}
          <div className="relative col-span-2 max-[550px]:col-span-1">
            <BsBuildings className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black"
              value={filters.tipo}
              onChange={(e) => setFilters({ ...filters, tipo: e.target.value })}
            >
              <option value="">Tipo de propiedad</option>
              {tipos.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.tipo}
                </option>
              ))}
            </select>
          </div>

          {/* Operación */}
          <div className="relative col-span-1">
            <LiaKeySolid className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black"
              value={filters.operacion}
              onChange={(e) =>
                setFilters({ ...filters, operacion: e.target.value })
              }
            >
              <option value="">Operación</option>
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
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black"
              value={filters.ambientes}
              onChange={(e) =>
                setFilters({ ...filters, ambientes: e.target.value })
              }
            >
              <option value="">Ambientes</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3+</option>
            </select>
          </div>

          {/* Moneda */}
          <div className="relative">
            <PiCurrencyCircleDollar className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black"
              value={filters.moneda}
              onChange={(e) =>
                setFilters({ ...filters, moneda: e.target.value })
              }
            >
              <option value="">Moneda</option>
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
              type="number"
              placeholder="Min."
              value={filters.min}
              onChange={(e) => setFilters({ ...filters, min: e.target.value })}
              className="w-full border border-black rounded-lg pl-3 pr-8 py-2 placeholder-black focus:ring-1 focus:ring-black"
            />
            <span className="absolute right-3 top-2.5 text-black font-bold">
              $
            </span>
          </div>

          {/* Precio máximo */}
          <div className="relative">
            <input
              type="number"
              placeholder="Max."
              value={filters.max}
              onChange={(e) => setFilters({ ...filters, max: e.target.value })}
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
