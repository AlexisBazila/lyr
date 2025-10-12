import React from "react";
import IconAndDescription from "../../components/iconAndDescription/IconAndDescription";
import { TbTargetArrow } from "react-icons/tb";

function FeatureCard({ label, icon, desc }) {
  return (
    <>
      {/* Etiqueta caracteristica */}
      <div className="border-[1px] border-gray-300 w-[300px]">
        <IconAndDescription
          label={label}
          icon={icon}
          // Entre 25 y 60 palabras
          desc={desc}
        />
      </div>
    </>
  );
}

export default FeatureCard;
