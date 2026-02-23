import React from "react";
import { createPortal } from "react-dom";
import { BsBuildings } from "react-icons/bs";

import {
  FaBath,
  FaRulerCombined,
  FaClock,
  FaCar,
  FaBolt,
  FaTint,
  FaToilet,
  FaWifi,
  FaStar,
} from "react-icons/fa";

import { TbTemperatureSnow, TbTemperatureSun } from "react-icons/tb";

function AdvancedFiltersModal({ filters, setFilters, onClose }) {
  return createPortal(
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl p-8 relative max-h-[90vh] overflow-y-auto">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold"
        >
          ✕
        </button>

        <h3 className="text-2xl font-semibold mb-8">Filtros avanzados</h3>

        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-2 max-[600px]:grid-cols-1">
          {/* BAÑOS */}
          <div className="relative">
            <FaBath className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 text-black focus:ring-1 focus:ring-black"
              value={filters.banios || ""}
              onChange={(e) =>
                setFilters({ ...filters, banios: e.target.value })
              }
            >
              <option value="">Baños</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          {/* M2 CUBIERTOS */}
          <div className="relative">
            <FaRulerCombined className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="number"
              placeholder="m² Cubiertos (mín)"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.supcubierta || ""}
              onChange={(e) =>
                setFilters({ ...filters, supcubierta: e.target.value })
              }
            />
          </div>

          {/* M2 TOTALES */}
          <div className="relative">
            <FaRulerCombined className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="number"
              placeholder="m² Totales (mín)"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.suptotal || ""}
              onChange={(e) =>
                setFilters({ ...filters, suptotal: e.target.value })
              }
            />
          </div>

          {/* PISOS */}
          <div className="relative">
            <FaRulerCombined className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="number"
              placeholder="Pisos"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.pisos || ""}
              onChange={(e) =>
                setFilters({ ...filters, pisos: e.target.value })
              }
            />
          </div>

          {/* ANTIGÜEDAD MIN */}
          <div className="relative">
            <FaClock className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="number"
              placeholder="Antigüedad mínima"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.antiguedadMin || ""}
              onChange={(e) =>
                setFilters({ ...filters, antiguedadMin: e.target.value })
              }
            />
          </div>

          {/* ANTIGÜEDAD MAX */}
          <div className="relative">
            <FaClock className="absolute left-3 top-2.5 text-xl text-black" />
            <input
              type="number"
              placeholder="Antigüedad máxima"
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.antiguedadMax || ""}
              onChange={(e) =>
                setFilters({ ...filters, antiguedadMax: e.target.value })
              }
            />
          </div>

          {/* GARAGE */}
          <div className="relative">
            <FaCar className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.garage || ""}
              onChange={(e) =>
                setFilters({ ...filters, garage: e.target.value })
              }
            >
              <option value="">Garage</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* LUZ */}
          <div className="relative">
            <FaBolt className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.luz || ""}
              onChange={(e) => setFilters({ ...filters, luz: e.target.value })}
            >
              <option value="">Luz</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* CLOACAS */}
          <div className="relative">
            <FaToilet className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.cloacas || ""}
              onChange={(e) =>
                setFilters({ ...filters, cloacas: e.target.value })
              }
            >
              <option value="">Cloacas</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* INTERNET */}
          <div className="relative">
            <FaWifi className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.internet || ""}
              onChange={(e) =>
                setFilters({ ...filters, internet: e.target.value })
              }
            >
              <option value="">Internet</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* AIRE */}
          <div className="relative">
            <TbTemperatureSnow className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.aire || ""}
              onChange={(e) => setFilters({ ...filters, aire: e.target.value })}
            >
              <option value="">Aire acondicionado</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* CALEFACCIÓN */}
          <div className="relative">
            <TbTemperatureSun className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.calefaccion || ""}
              onChange={(e) =>
                setFilters({ ...filters, calefaccion: e.target.value })
              }
            >
              <option value="">Calefacción</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* DESTACADO */}
          <div className="relative">
            <FaStar className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.destacado || ""}
              onChange={(e) =>
                setFilters({ ...filters, destacado: e.target.value })
              }
            >
              <option value="">Destacado</option>
              <option value="true">Sí</option>
              <option value="false">No</option>
            </select>
          </div>

          {/* AGUA */}
          <div className="relative">
            <FaTint className="absolute left-3 top-2.5 text-xl text-black" />
            <select
              className="w-full border border-black rounded-lg pl-10 pr-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.agua || ""}
              onChange={(e) => setFilters({ ...filters, agua: e.target.value })}
            >
              <option value="">Agua</option>
              <option value="fria">Solo fría</option>
              <option value="fria_caliente">Fría y caliente</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        {/* BOTONES */}
        <div className="flex justify-end gap-4 mt-10">
          <button
            onClick={() => {
              const cleaned = { ...filters };

              [
                "banios",
                "supcubierta",
                "suptotal",
                "pisos",
                "antiguedadMin",
                "antiguedadMax",
                "garage",
                "luz",
                "cloacas",
                "internet",
                "aire",
                "calefaccion",
                "destacado",
                "agua",
              ].forEach((key) => delete cleaned[key]);

              setFilters(cleaned);
            }}
            className="border border-black rounded-lg px-6 py-2"
          >
            Limpiar
          </button>

          <button
            onClick={onClose}
            className="bg-black text-white rounded-lg px-6 py-2"
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default AdvancedFiltersModal;
