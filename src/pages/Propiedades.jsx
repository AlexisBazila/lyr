import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { fechPropiedades } from "../services/strapi";
import HeroSection from "../layouts/heroSection/HeroSection";
import BigSearcher from "../components/bigSearcher/BigSearcher";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import PropertyCard from "../components/propertyCard/PropertyCard";

function Propiedades() {
  // 🔹 Detectamos si vienen filtros desde otra página (query params)
  const location = useLocation();
  const filtros = location.state?.filtros || {}; // ← si no hay filtros, objeto vacío

  const {
    data: propiedades = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["propiedades", filtros], // cache independiente por filtros!
    queryFn: () => fechPropiedades(filtros), //  acepta filtros dinámicos
    keepPreviousData: true, // mantiene resultados previos mientras busca
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
        <HeroSection title={""} subtitle={""} className="h-[60vh]" />
        <div className="w-[80%] absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <BigSearcher />
        </div>
      </div>

      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <div className="m-[5%]">
          <TitleAndSubtitle
            title="PROPIEDADES ENCONTRADAS"
            subtitle={`${
              Object.keys(filtros).length > 0 ? "(Filtros Aplicados) - " : " "
            }${propiedades.length} Resultados obtenidos`}
          />
        </div>

        {/* 🔹 Render Cards */}
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
