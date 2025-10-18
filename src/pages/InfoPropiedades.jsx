import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import PropertyTitleAndSubtitle from "../components/propertyTitleandsubtitle/PropertyTitleAndSubtitle";
import PropertyGalerySection from "../layouts/PropertyGalerySection/PropertyGalerySection";
import PropertyInfoSection from "../layouts/propertyInfoSection/PropertyInfoSection";
import PropertyExtraInfoSection from "../layouts/propertyExtraInfoSection/PropertyExtraInfoSection";
import PropertyMapSection from "../layouts/propertyMapSection/PropertyMapSection";

function InfoPropiedades() {
  return (
    <>
      <div className="relative">
        <HeroSection className={"h-[60vh]"} />
        <section className="px-[5%] py-[2%]">
          <PropertyTitleAndSubtitle
            title={"Nombre propiedad"}
            subtitle={"Direccion propiedad"}
          />
        </section>
        <div className="px-[5%]">
          <PropertyGalerySection />
          <PropertyInfoSection />
          <PropertyExtraInfoSection />
          <PropertyMapSection />
        </div>
      </div>
    </>
  );
}

export default InfoPropiedades;
