import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import SmallSearcher from "../components/smallSearcher/SmallSearcher";
import PropertyCard from "../components/propertyCard/PropertyCard";
import TitleAndSubtitle from "../components/titleandsubtitle/TitleAndSubtitle";
import BigSearcher from "../components/bigSearcher/BigSearcher";

function Propiedades() {
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
            subtitle={"(Filtros Aplicados) - ### Resueltados "}
          />
        </div>

        <div className="flex gap-7 flex-wrap px-[5%] mb-20">
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
          <PropertyCard />
        </div>
      </div>
    </>
  );
}

export default Propiedades;
