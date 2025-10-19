import React from "react";
import CentredTitleAndSubtitle from "../../components/centredtitleandsubtitle/CentredTitleAndSubtitle";
import IconAndDescription from "../../components/iconAndDescription/IconAndDescription";
import FeatureCard from "../featureCard/FeatureCard";
import { TbTargetArrow } from "react-icons/tb";
import { FaRegHandshake, FaRegLightbulb } from "react-icons/fa6";
import { RiShieldCheckLine } from "react-icons/ri";
import { FaMapMarkedAlt } from "react-icons/fa";
import { LuUserCheck } from "react-icons/lu";
import { IoTimeOutline } from "react-icons/io5";

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
          desc="Cada paso se realiza con claridad, confianza y documentación precisa para tu tranquilidad. "
        />
        <FeatureCard
          label={"Atención personalizada"}
          icon={<LuUserCheck />}
          desc="Te acompañamos en todo el proceso, brindando asesoramiento según tus necesidades."
        />
        <FeatureCard
          label={"Amplia oferta de propiedades"}
          icon={<FaMapMarkedAlt />}
          desc="Contamos con una variada cartera de inmuebles en las mejores zonas de la región."
        />
        <FeatureCard
          label={"Agilidad y eficiencia"}
          icon={<IoTimeOutline />}
          desc="Optimizamos los procesos para que cada operación sea rápida, clara y segura. "
        />
        <FeatureCard
          label={"Experiencia y compromiso"}
          icon={<FaRegLightbulb />}
          desc="Años de trayectoria avalan nuestro trabajo y la satisfacción de nuestros clientes."
        />
        <FeatureCard
          label={"Seguridad en tus inversiones"}
          icon={<RiShieldCheckLine />}
          desc="Garantizamos respaldo legal y asesoramiento profesional en cada paso."
        />
      </div>
    </section>
  );
}

export default WhyChoseUsSection;
