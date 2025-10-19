import React from "react";
import TitleAndSubtitle from "../../components/titleandsubtitle/TitleAndSubtitle";
import IconAndDescription from "../../components/iconAndDescription/IconAndDescription";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineLightBulb } from "react-icons/hi2";
import mision from "../../assets/images/mision.jpg";
import vision from "../../assets/images/vision.jpg";

function MisionAndVisionSection() {
  return (
    <section className="px-[5%] py-20 bg-white">
      {/* Encabezado */}
      <div className="mb-0 grid min-[1160px]:grid-cols-[40%_60%] items-center">
        <div>
          <TitleAndSubtitle
            title="lo que nos caracteriza"
            subtitle="Nuestra misión y visión"
          />
        </div>
        {/* Imagen */}
        <div className="bg-gray-200 h-[25vw] flex justify-center items-center rounded-sm overflow-hidden max-[1500px]:h-[40vh] max-[1160px]:mb-2 max-[1160px]:h-[25vh]">
          <img
            src={mision}
            alt="mision-vision"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Contenido principal */}
      <div className="grid min-[1160px]:grid-cols-[40%_60%]  items-center ">
        {/* Imagen */}
        <img
          src={vision}
          alt="mision-vision"
          className="w-full h-full object-cover object-center bg-gray-200  flex justify-center items-center rounded-sm overflow-hidden max-[1500px]:h-[40vh] max-[1160px]:mb-2 max-[1160px]:h-[25vh]"
        />

        {/* Misión y Visión */}
        <div className="grid grid-cols-2 justify-around gap-2 max-[1160px]:items-start max-[700px]:grid-cols-1">
          {/* Misión */}
          <div className="flex flex-col text-center md:items-start md:text-left">
            <IconAndDescription
              label={"Mision"}
              icon={<TbTargetArrow />}
              // Entre 25 y 60 palabras
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />
          </div>
          <div className="flex flex-col text-center md:items-start md:text-left">
            <IconAndDescription
              label={"Vision"}
              icon={<HiOutlineLightBulb />}
              // entre 20 y 50 palabras
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MisionAndVisionSection;
