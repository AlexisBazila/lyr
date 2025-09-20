import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import "./ourServicesHomeSection.css";
import IconAndLabel from "../../components/IconAndLabel/IconAndLabel";

function OurServicesHomeSection() {
  return (
    <section className="ourServicesHomeSection">
      <div className="ourServicesHomeHeader">
        <TitleAndSubtitle
          title={"NUESTROS SERVICIOS"}
          subtitle={"Como podemos ayudarlo"}
        />
      </div>
      <div className="servicesIcons">
        <IconAndLabel />
        <IconAndLabel />
        <IconAndLabel />
        <IconAndLabel />
      </div>
    </section>
  );
}

export default OurServicesHomeSection;
