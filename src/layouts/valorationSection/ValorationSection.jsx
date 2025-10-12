import React from "react";
import backPhoto from "../../assets/images/tasaciones-presentacion.jpg";
import TitleParagpraphAndButton from "../titleParagraphAndButton/TitleParagpraphAndButton";
function ValorationSextion() {
  return (
    <section className="grid grid-cols-[1.2fr_1fr] px-[10%] mb-20 gap-8 items-center max-[1160px]:grid-cols-1 max-[1024px]:px-[5%]">
      {/* Imagen adaptable */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[700px] aspect-[4/3] overflow-hidden rounded-md">
          <img src={backPhoto} alt="" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Contenido de texto */}
      <TitleParagpraphAndButton
        title={"TASACIONES PROFESIONALES"}
        subtitle={"Valorá tu propiedad con confianza"}
        paragraphs={[
          "Conocer el valor real de su propiedad es el primer paso para tomar decisiones seguras. Nuestro equipo realiza tasaciones precisas basadas en un análisis detallado del mercado, la ubicación, las características del inmueble y la demanda actual. De esta manera, podrá definir el mejor precio de venta o alquiler, asegurando operaciones rápidas y justas.",
        ]}
        caption="Quiero mi tasación"
        to="/tasaciones"
      />
    </section>
  );
}

export default ValorationSextion;
