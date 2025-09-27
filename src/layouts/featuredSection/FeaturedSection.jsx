import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import "./featuredSection.css";
import PropertyCard from "../../components/propertyCard/PropertyCard";

function FeaturedSection() {
  return (
    <section className="FeaturedSection">
      <div className="mb-10">
        <TitleAndSubtitle
          title={"DESTACADOS"}
          subtitle={"Nuestras propiedades destacadas"}
        />
      </div>
      <div className="relative z-10 grid gap-6  min-[1160px]:grid-cols-3 px-4 -mb-90">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>

      <div className="featuredProperties"></div>
    </section>
  );
}

export default FeaturedSection;
