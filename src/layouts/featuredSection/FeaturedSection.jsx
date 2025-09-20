import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import "./featuredSection.css";

function FeaturedSection() {
  return (
    <section className="FeaturedSection">
      <div>
        <TitleAndSubtitle
          title={"DESTACADOS"}
          subtitle={"Nuestras propiedades destacadas"}
        />
      </div>
      <div className="featuredProperties"></div>
    </section>
  );
}

export default FeaturedSection;
