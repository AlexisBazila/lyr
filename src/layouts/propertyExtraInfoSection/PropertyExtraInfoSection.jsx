import React, { useState } from "react";

function PropertyExtraInfoSection({ descripcion }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="pb-[2%]">
      <div className="bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_6px_rgba(0,0,0,0.1)] p-6 flex-1">
        <h3 className="text-xl font-bold mb-6">Descripción de la propiedad</h3>

        <div
          className={`text-gray-800 transition-all duration-500 ease-in-out overflow-hidden ${
            isExpanded ? "max-h-[1000px]" : "max-h-[5.5rem]"
          }`}
        >
          <p className="leading-relaxed">{descripcion}</p>
        </div>

        {/* Botón */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 text-red-600 font-semibold hover:underline"
        >
          {isExpanded ? "Ver menos ▲" : "Ver más ▼"}
        </button>
      </div>
    </section>
  );
}

export default PropertyExtraInfoSection;
