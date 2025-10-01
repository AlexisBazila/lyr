import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import PropertyTitleAndSubtitle from "../components/propertyTitleandsubtitle/PropertyTitleAndSubtitle";
import PropertyGalerySection from "../layouts/PropertyGalerySection/PropertyGalerySection";

function InfoPropiedades() {
  return (
    <>
      <div className="relative">
        <HeroSection />
        <section className="px-[5%] py-[2%]">
          <PropertyTitleAndSubtitle
            title={"Nombre propiedad"}
            subtitle={"Direccion propiedad"}
          />
        </section>
        <PropertyGalerySection />

        {/* INFO SECTION */}
        <section>
          <div>
            <div>|500.000 AR$</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default InfoPropiedades;
