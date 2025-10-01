import React from "react";
import alquiler1 from "../../assets/images/alquiler1.jpg";
import alquiler2 from "../../assets/images/alquiler2.jpg";
import alquiler3 from "../../assets/images/alquiler3.jpg";
import alquiler4 from "../../assets/images/alquiler4.jpg";
import alquiler5 from "../../assets/images/alquiler5.jpg";
import { FaCamera } from "react-icons/fa";

function PropertyGalerySection() {
  return (
    <section className="pl-[5%] pr-[10%] pb-[2%]">
      <div className="grid grid-cols-[60%_40%] gap-4">
        <div className="relative">
          <img
            className="w-full max-h-[70vh] object-cover rounded-sm border-1"
            src={alquiler1}
            alt=""
          />

          <div className="absolute bottom-5 left-5">
            <a
              href="#"
              className="flex bg-[#00000098] p-2 rounded-sm text-[#fff] items-center"
            >
              <i className="mr-2">
                <FaCamera />
              </i>
              Ver las N fotos
            </a>
          </div>
          <div className="flex bg-[#00000098] py-2 px-5 rounded-sm text-[#fff] items-center absolute bottom-5 right-5">
            1/N
          </div>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler2}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler3}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler4}
            alt=""
          />
          <img
            className="w-full h-full object-cover rounded-sm"
            src={alquiler5}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default PropertyGalerySection;
