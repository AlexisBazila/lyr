import React from "react";
import CentredTitleAndSubtitle from "../../components/centredtitleandsubtitle/CentredTitleAndSubtitle";
import IconAndDescription from "../../components/iconAndDescription/IconAndDescription";
import FeatureCard from "../featureCard/FeatureCard";
import { TbTargetArrow } from "react-icons/tb";

function WhyChoseUsSection() {
  return (
    <section>
      <div>
        <CentredTitleAndSubtitle
          title="por que elegirnos"
          subtitle="Tu tranquilidad es nuestra mejor garantía"
        />
      </div>
      {/* Contenedor de fichas */}
      <div className="px-[20%] my-5 flex flex-wrap gap-8 justify-center max-[1500px]:px-[10%]">
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
        <FeatureCard
          label={"Transparencia en cada operación"}
          icon={<TbTargetArrow />}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
        />
      </div>
    </section>
  );
}

export default WhyChoseUsSection;
