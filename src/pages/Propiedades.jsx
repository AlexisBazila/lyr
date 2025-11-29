import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPropiedades } from "../services/strapi";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import PropertyCard from "../components/propertyCard/PropertyCard";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import BigSearcher from "../components/bigSearcher/BigSearcher";

function Propiedades() {
  const {
    data: propiedades = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["propiedades"], // nombre unico del cache
    queryFn: getPropiedades, // función que obtiene los datos
  });

  if (isLoading)
    return <p className="text-center mt-20">Cargando propiedades...</p>;
  if (isError)
    return (
      <p className="text-center text-red-600 mt-20">Error cargando datos.</p>
    );

  return (
    <>
      <div className="relative ">
        <HeroSection title={""} subtitle={""} className={"h-[60vh]"} />
        <div className="w-[80%] absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh] ">
          <BigSearcher />
        </div>
      </div>

      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <div className="m-[5%]">
          <TitleAndSubtitle
            title={"PROPIEDADES ENCONTRADAS"}
            subtitle={`(Filtros Aplicados) - ${propiedades.length} Resultados`}
          />
        </div>

        <div className="flex gap-7 flex-wrap px-[5%] mb-20">
          {propiedades.map((prop) => (
            <PropertyCard
              key={prop.id}
              titulo={prop.titulo}
              precio={prop.precio}
              direccion={prop.direccion}
              ambientes={prop.ambientes}
              banios={prop.banios}
              supcubierta={prop.supcubierta}
              tipo={prop.tipo?.tipo}
              transaccion={prop.operacion?.operacion}
              moneda={prop.moneda?.simbolo}
              estado={prop.estado?.estado}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Propiedades;
