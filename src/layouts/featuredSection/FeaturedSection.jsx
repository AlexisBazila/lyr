import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import "./featuredSection.css";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import { fechPropiedades } from "../../services/strapi";
import { useQuery } from "@tanstack/react-query";

function FeaturedSection() {
  const {
    data: propiedades = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["propiedades-destacadas"],
    queryFn: () =>
      fechPropiedades({
        destacado: true,
        pageSize: 3,
      }),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return null;
  if (isError) return null;
  if (!propiedades.length) return null;

  return (
    <section className="FeaturedSection relative">
      <div className="mb-10">
        <TitleAndSubtitle
          title="DESTACADOS"
          subtitle="Nuestras propiedades destacadas"
        />
      </div>

      {/* CARDS */}
      <div className="relative z-10 grid gap-6 min-[1160px]:grid-cols-3 px-4 -mb-90">
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

      {/* FRANJA DE FONDO */}
      <div className="featuredProperties"></div>
    </section>
  );
}

export default FeaturedSection;
