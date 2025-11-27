import React from "react";
import { useEffect, useState } from "react";
import { getPropiedades } from "../services/propiedades";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import PropertyCard from "../components/propertyCard/PropertyCard";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import BigSearcher from "../components/bigSearcher/BigSearcher";

function Propiedades() {
  const [propiedades, setPropiedades] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPropiedades();
      console.log(data);
      setPropiedades(data);
    };
    fetchData();
  }, []);

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
            subtitle={`(Filtros Aplicados) - ${propiedades.length} Resueltados `}
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
              tipo={prop.tipo.tipo}
              transaccion={prop.operacion.operacion}
              moneda={prop.moneda.simbolo}
              estado={prop.estado.estado}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Propiedades;
