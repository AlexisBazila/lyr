import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import "./ourServicesHomeSection.css";
import IconAndLabel from "../../components/IconAndLabel/IconAndLabel";
import {
  TbHomeDollar,
  TbHomeSearch,
  TbHomeShield,
  TbHomeStats,
} from "react-icons/tb";

import { FaLaptopHouse } from "react-icons/fa";

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
        <IconAndLabel
          label={"ADMINISTRACION DE PROPIEDADES"}
          icon={<TbHomeShield />}
        />
        <IconAndLabel
          label={"ASESORAMIENTO PERSONALIZADO"}
          icon={<TbHomeSearch />}
        />
        <IconAndLabel label={"VENTA Y ALQUILERES"} icon={<TbHomeDollar />} />
        <IconAndLabel
          label={"DESARROLLOS, LOTEOS, INVERSIONES"}
          icon={<TbHomeStats />}
        />
      </div>
    </section>
  );
}

export default OurServicesHomeSection;
