import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import LeftAlignedParagraph from "../../components/LeftAlignedParagraph/LeftAlignedParagraph";
function PropertyValue() {
  return (
    <section className="h-full bg-white flex flex-row items-center justify-center gap-12 px-[10%] py-16 relative max-[1160px]:flex-col max-[1160px]:px-[20%] max-[1160px]:pb-60 max-[800px]:px-[5%] max-[700px]:pb-80 max-[400px]:pb-140">
      {/* Contenedor relativo (imagen + texto superpuesto) */}
      <div className="relative flex justify-center items-center flex-[3] max-[1160px]:flex-[unset] w-full max-[700px]:w-[90vw]">
        {/* Imagen cuadrada */}
        <div className="w-full aspect-square bg-gray-400 rounded-sm overflow-hidden flex justify-center items-center">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Valor"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Texto superpuesto SOLO en móvil */}
        <div className="hidden max-[1160px]:flex absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[70%] bg-white w-[90%] p-4 rounded-md shadow-md z-10 max-[400px]:translate-y-[90%]">
          <div className="flex-col">
            <TitleAndSubtitle
              title="CUANTO VALE TU PROPIEDAD"
              subtitle="Analizamos cada detalle de tu inmueble para brindarte una valoración precisa y realista."
            />
            <LeftAlignedParagraph
              paragraphs={[
                "El valor de una propiedad depende de múltiples factores: ubicación, dimensiones, estado, servicios, proyección de la zona y, por supuesto, la demanda del mercado. Nuestro equipo analiza todos estos elementos de manera objetiva y profesional, brindándote un informe detallado para que tomes decisiones con tranquilidad y seguridad.",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Texto (versión escritorio) */}
      <div className="relative right-30 md:w-1/2 bg-white p-6 rounded-md shadow-md max-[1160px]:hidden ">
        <TitleAndSubtitle
          title="CUANTO VALE TU PROPIEDAD"
          subtitle="Analizamos cada detalle de tu inmueble para brindarte una valoración precisa y realista."
        />
        <LeftAlignedParagraph
          paragraphs={[
            "El valor de una propiedad depende de múltiples factores: ubicación, dimensiones, estado, servicios, proyección de la zona y, por supuesto, la demanda del mercado. Nuestro equipo analiza todos estos elementos de manera objetiva y profesional, brindándote un informe detallado para que tomes decisiones con tranquilidad y seguridad.",
          ]}
        />
      </div>
    </section>
  );
}

export default PropertyValue;
