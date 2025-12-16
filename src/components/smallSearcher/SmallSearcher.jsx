// Importacion de funciones React
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

// Importacion de funciones del proyecto
import { fechTipos, fechOperaciones } from "../../services/strapi";

// Estilos
import "./smallSearcher.css";
// Iconos
import { LuMapPin } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { LiaKeySolid } from "react-icons/lia";
// Componentes
import "flyonui/flyonui.js";

function SmallSearcher() {
  useEffect(() => {
    if (window.FlyonUI) {
      window.FlyonUI.init();
    }
  }, []);

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
  });

  // 📍 Al hacer click en BUSCAR -> redirige a Propiedades con filtros en URL
  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <div className="smallSearcher">
      <div className="searcherContent">
        <div className="title">
          <h3 className="text-3xl text-black">
            Encontrá lo que estas buscando
          </h3>
        </div>
        <form className="formSearch " action="" onSubmit={handleSubmit}>
          <div className="relative  mb-6 mr-9 w-full md:w-auto max-[1160px]:mr-3">
            {" "}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              {" "}
              <LuMapPin className="text-black" />{" "}
            </div>{" "}
            <input
              type="text"
              placeholder="Ubicación"
              value={filters.ubicacion}
              onChange={(e) =>
                setFilters({ ...filters, ubicacion: e.target.value })
              }
              className="bg-white border border-black text-black text-1xl rounded-lg block w-100  ps-12 p-2.5 placeholder-black  focus:ring-1 focus:ring-black max-[1160px]:w-70 max-[950px]:w-50 max-[650px]:w-full"
            />{" "}
          </div>
          {/*SELECT*/}
          <div className="relative  mb-6 mr-9 max-[1160px]:mr-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <BsBuildings className="text-black" />
            </div>
            <select
              className="bg-white border border-black text-black text-1xl rounded-lg  block w-55 ps-12 p-2.5 placeholder-black focus:ring-1 focus:ring-black  max-[950px]:w-30 max-[650px]:w-full"
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
          {/*SELECT*/}
          {/*SELECT*/}
          <div className="relative mb-6 mr-9 max-[1160px]:mr-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <LiaKeySolid className="text-black" />
            </div>
            <select
              className="bg-white border border-black text-black text-1xl rounded-lg  block w-50 ps-12 p-2.5 placeholder-black focus:ring-1 focus:ring-black max-[950px]:w-30 max-[650px]:w-full"
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
          {/*SELECT*/}
          <button
            type="submit"
            className="bg-black text-white rounded-lg max-h-max px-5 py-2 text-[16px] font-medium hover:bg-gray-800 max-[800px]:w-[50%]"
          >
            Buscar
          </button>
        </form>
      </div>
    </div>
  );
}

export default SmallSearcher;
