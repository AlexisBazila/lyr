import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fechGaleria, fetchPropiedad } from "../services/strapi";
import HeroSection from "../layouts/heroSection/HeroSection";
import PropertyTitleAndSubtitle from "../components/propertyTitleandsubtitle/PropertyTitleAndSubtitle";
import PropertyGalerySection from "../layouts/PropertyGalerySection/PropertyGalerySection";
import PropertyInfoSection from "../layouts/propertyInfoSection/PropertyInfoSection";
import PropertyExtraInfoSection from "../layouts/propertyExtraInfoSection/PropertyExtraInfoSection";
import PropertyMapSection from "../layouts/propertyMapSection/PropertyMapSection";

function InfoPropiedades() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["propiedad", id],
    queryFn: () => fetchPropiedad(id),
    enabled: !!id,
  });
  if (isLoading) return <p className="p-10 text-xl">Cargando propiedad...</p>;
  if (error)
    return (
      <p className="p-10 text-xl text-red-600">Error cargando la propiedad.</p>
    );
  if (!data)
    return <p className="p-10 text-xl">No se encontró la propiedad.</p>;

  const propiedad = data;
  console.log(propiedad);

  return (
    <>
      <div className="relative">
        <HeroSection title={""} subtitle={""} className="h-[60vh]" />
        <section className="px-[5%] py-[2%]">
          <PropertyTitleAndSubtitle
            title={propiedad.titulo}
            subtitle={propiedad.direccion}
            tipo={propiedad.tipo}
            operacion={propiedad.operacion}
          />
        </section>
        <div className="px-[5%]">
          <PropertyGalerySection
            galeriaId={propiedad.galeria?.documentId ?? null}
          />
          <PropertyInfoSection propiedad={propiedad} />
          <PropertyExtraInfoSection descripcion={propiedad.descripcion} />
          <PropertyMapSection coordenadas={propiedad.coordenadas} />
        </div>
      </div>
    </>
  );
}

export default InfoPropiedades;
