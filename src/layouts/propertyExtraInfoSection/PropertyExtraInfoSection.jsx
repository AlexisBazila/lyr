import React, { useState } from "react";

function PropertyExtraInfoSection() {
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
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga soluta
            veritatis minima sequi neque corporis libero expedita, nemo ab aut
            quis et eius pariatur nihil sed adipisci veniam! Repudiandae, velit!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            reprehenderit in tempore hic inventore similique quidem incidunt,
            architecto harum reiciendis ipsum ullam esse, ea nihil? Voluptas
            debitis quaerat dicta corrupti! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Exercitationem nobis sed, quod
            sapiente ut earum veritatis eius, quibusdam totam voluptate eum
            laborum atque pariatur, dolor ratione! Neque nisi ipsa harum! Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum atque
            suscipit, ut ratione voluptatibus voluptate porro pariatur inventore
            fugit, eos maxime autem enim distinctio ex optio expedita deleniti
            praesentium? Magni!
          </p>
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
