import React, { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  fechPropiedades,
  fechTipos,
  fechOperaciones,
  fechMonedas,
} from "../services/strapi";
import HeroSection from "../layouts/heroSection/HeroSection";
import BigSearcher from "../components/bigSearcher/BigSearcher";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import PropertyCard from "../components/propertyCard/PropertyCard";

function parseSearchToFilters(search) {
  const params = new URLSearchParams(search);
  const out = {};
  for (const [k, v] of params.entries()) {
    out[k] = v;
  }
  return out;
}

function Propiedades() {
  const location = useLocation();

  const filtros = useMemo(
    () => parseSearchToFilters(location.search),
    [location.search],
  );

  const activeFilters = Object.entries(filtros).filter(
    ([_, value]) => value !== "" && value !== undefined,
  );

  const {
    data: propiedades = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["propiedades", filtros],
    queryFn: () => fechPropiedades(filtros),
    keepPreviousData: true,
    staleTime: 1000 * 60,
  });

  const { data: tipos = [] } = useQuery({
    queryKey: ["tipos"],
    queryFn: fechTipos,
  });

  const { data: operaciones = [] } = useQuery({
    queryKey: ["operaciones"],
    queryFn: fechOperaciones,
  });

  const { data: monedas = [] } = useQuery({
    queryKey: ["monedas"],
    queryFn: fechMonedas,
  });

  const formatFilterLabel = (key, value) => {
    const labels = {
      tipo: "Tipo",
      operacion: "Operación",
      moneda: "Moneda",
      ambientes: "Ambientes",
      banios: "Baños",
      supcubierta: "Sup. Cubierta",
      suptotal: "Sup. Total",
      pisos: "Pisos",
      antiguedadMin: "Antigüedad Min",
      antiguedadMax: "Antigüedad Max",
      garage: "Garage",
      luz: "Luz",
      cloacas: "Cloacas",
      internet: "Internet",
      aire: "Aire",
      calefaccion: "Calefacción",
      destacado: "Destacado",
      agua: "Agua",
      min: "Precio Min",
      max: "Precio Max",
    };

    let formattedValue = value;

    if (key === "tipo") {
      const found = tipos.find((t) => String(t.id) === String(value));
      formattedValue = found?.tipo || value;
    }

    if (key === "operacion") {
      const found = operaciones.find((o) => String(o.id) === String(value));
      formattedValue = found?.operacion || value;
    }

    if (key === "moneda") {
      const found = monedas.find((m) => String(m.id) === String(value));
      formattedValue = found?.simbolo || value;
    }

    if (value === "true") formattedValue = "Sí";
    if (value === "false") formattedValue = "No";

    if (key.includes("sup")) {
      formattedValue = `${value} m²`;
    }

    if (key === "min" || key === "max") {
      const number = Number(value);
      if (!isNaN(number)) {
        formattedValue = `$${number.toLocaleString()}`;
      }
    }

    return `${labels[key] || key}: ${formattedValue}`;
  };

  if (isLoading) {
    return <p className="text-center mt-20">Cargando propiedades...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-600 mt-20">Error cargando datos.</p>
    );
  }

  return (
    <>
      <div className="relative">
        <HeroSection title="" subtitle="" className="h-[60vh]" />
        <div className="w-[80%] absolute left-1/2 transform -translate-x-1/2 -bottom-25 z-20 bg-white rounded-lg max-[650px]:-bottom-[30vh]">
          <BigSearcher />
        </div>
      </div>

      <div className="mt-[25vh] max-[650px]:mt-[35vh]">
        <div className="m-[5%]">
          <TitleAndSubtitle
            title="PROPIEDADES ENCONTRADAS"
            subtitle={`${propiedades.length} Resultados`}
          />

          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {activeFilters.map(([key, value]) => (
                <div
                  key={key}
                  className="bg-black text-white text-sm px-4 py-1 rounded-full"
                >
                  {formatFilterLabel(key, value)}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex gap-7 flex-wrap px-[5%] mb-20">
          {propiedades.map((prop) => (
            <PropertyCard
              key={prop.id}
              id={prop.documentId}
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
              miniatura={prop.miniatura}
              destacado={prop.destacado}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Propiedades;
