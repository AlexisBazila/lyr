import React from "react";
import { createPortal } from "react-dom";

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
          <div>
            <label className="block mb-1 font-medium">Baños</label>
            <select
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.banios || ""}
              onChange={(e) =>
                setFilters({ ...filters, banios: e.target.value })
              }
            >
              <option value="">Cantidad</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          {/* M2 CUBIERTOS */}
          <div>
            <label className="block mb-1 font-medium">m² Cubiertos (mín)</label>
            <input
              type="number"
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.supcubierta || ""}
              onChange={(e) =>
                setFilters({ ...filters, supcubierta: e.target.value })
              }
            />
          </div>

          {/* M2 TOTALES */}
          <div>
            <label className="block mb-1 font-medium">m² Totales (mín)</label>
            <input
              type="number"
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.suptotal || ""}
              onChange={(e) =>
                setFilters({ ...filters, suptotal: e.target.value })
              }
            />
          </div>

          {/* PISOS */}
          <div>
            <label className="block mb-1 font-medium">Pisos</label>
            <input
              type="number"
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.pisos || ""}
              onChange={(e) =>
                setFilters({ ...filters, pisos: e.target.value })
              }
            />
          </div>

          {/* ANTIGÜEDAD */}
          <div>
            <label className="block mb-1 font-medium">Antigüedad mínima</label>
            <input
              type="number"
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.antiguedadMin || ""}
              onChange={(e) =>
                setFilters({ ...filters, antiguedadMin: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Antigüedad máxima</label>
            <input
              type="number"
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.antiguedadMax || ""}
              onChange={(e) =>
                setFilters({ ...filters, antiguedadMax: e.target.value })
              }
            />
          </div>

          {/* BOOLEAN FIELDS */}
          {[
            ["garage", "Garage"],
            ["luz", "Luz"],
            ["cloacas", "Cloacas"],
            ["internet", "Internet"],
            ["aire", "Aire acondicionado"],
            ["calefaccion", "Calefacción"],
            ["destacado", "Destacado"],
          ].map(([key, label]) => (
            <div key={key}>
              <label className="block mb-1 font-medium">{label}</label>
              <select
                className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
                value={filters[key] || ""}
                onChange={(e) =>
                  setFilters({ ...filters, [key]: e.target.value })
                }
              >
                <option value="">Indiferente</option>
                <option value="true">Sí</option>
                <option value="false">No</option>
              </select>
            </div>
          ))}

          {/* AGUA */}
          <div>
            <label className="block mb-1 font-medium">Agua</label>
            <select
              className="w-full border border-black rounded-lg px-3 py-2 focus:ring-1 focus:ring-black"
              value={filters.agua || ""}
              onChange={(e) => setFilters({ ...filters, agua: e.target.value })}
            >
              <option value="">Indiferente</option>
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
              setFilters({});
              onClose();
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
