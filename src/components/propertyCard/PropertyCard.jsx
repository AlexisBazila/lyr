import React from "react";
import "./propertyCard.css";
import SmallButton from "../smallButton/SmallButton";
import image from "../../assets/images/noimage.png";
import sellExample from "../../assets/images/sellExample.jpg";
import { GoDotFill } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";
import { TbRulerMeasure2 } from "react-icons/tb";
import { IoIosBed } from "react-icons/io";
import { GiBathtub } from "react-icons/gi";

function PropertyCard() {
  return (
    <div className="w-full max-w-[370px] max-h-[550px] mx-auto bg-white border border-gray-200 rounded-lg shadow-s">
      {/* IMAGE */}
      <a href="#">
        <img
          className="rounded-t-lg w-full max-h-3/6"
          src={sellExample}
          alt=""
        />
      </a>
      {/* CONTENT */}
      <div className="p-5">
        {/* TITLE */}
        <div className="flex ">
          <i className="text-[#75f94c] text-3xl">
            <GoDotFill />
          </i>
          <h4 className="mb-0 text-xl tracking-tight text-black">
            Alquiler - Departamento
          </h4>
        </div>
        <h5 className="mb-2 text-xl font-bold tracking-tight text-black">
          Nombre propiedad
        </h5>
        {/* FEATURES */}
        <div className="mb-6 mt-6 flex flex-col min-[400px]:flex-row justify-between">
          {/* FEATURE 1 */}
          <div>
            <div className="flex">
              <i className="text-[40px] text-red-600">
                <TbRulerMeasure2 />
              </i>
              <div className="leading-tight">
                <p className=" font-bold">
                  120 m<sup>2</sup>
                </p>
                <p className="text-gray-600">Cubiertos</p>
              </div>
            </div>
          </div>
          {/* FEATURE 2 */}
          <div>
            <div className="flex">
              <i className="text-[40px] text-red-600">
                <IoIosBed />
              </i>
              <div className="leading-tight">
                <p className=" font-bold">2</p>
                <p className="text-gray-600">Ambientes</p>
              </div>
            </div>
          </div>
          {/* FEATURE 3 */}
          <div>
            <div className="flex">
              <i className="text-[40px] text-red-600">
                <GiBathtub />
              </i>
              <div className="leading-tight">
                <p className=" font-bold">1</p>
                <p className="text-gray-600">Baños</p>
              </div>
            </div>
          </div>
        </div>
        {/* PROPERTI LOCATION */}
        <div className="flex items-center mb-3">
          <i className="mr-3 text-lg">
            <LuMapPinHouse />
          </i>
          <p>Direccion de la propiedad</p>
        </div>
        <div className="flex items-center">
          <SmallButton caption="Ver" className="mr-6 px-8 py-3 font-bold" />
          <h5 className="text-3xl font-bold border-black border-l-2 pl-2">
            500.000 AR$
          </h5>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
