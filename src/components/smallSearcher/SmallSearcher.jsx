import React, { useEffect } from "react";
import "./smallSearcher.css";
import { LuMapPin } from "react-icons/lu";
import { BsBuildings } from "react-icons/bs";
import { LiaKeySolid } from "react-icons/lia";
import "flyonui/flyonui.js";
import SmallButton from "../smallButton/SmallButton";

function SmallSearcher() {
  useEffect(() => {
    if (window.FlyonUI) {
      window.FlyonUI.init();
    }
  }, []);
  return (
    <div className="smallSearcher">
      <div className="searcherContent">
        <div className="title">
          <h3 className="text-3xl text-black">
            Encontrá lo que estas buscando
          </h3>
        </div>
        <form className="formSearch " action="">
          <div className="relative  mb-6 mr-9 w-full md:w-auto max-[1160px]:mr-3">
            {" "}
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              {" "}
              <LuMapPin className="text-black" />{" "}
            </div>{" "}
            <input
              type="text"
              id="location"
              className="bg-white border border-black text-black text-1xl rounded-lg block w-100  ps-12 p-2.5 placeholder-black  focus:ring-1 focus:ring-black max-[1160px]:w-70 max-[950px]:w-50 max-[650px]:w-full"
              placeholder="Ubicación"
            />{" "}
          </div>
          {/*SELECT*/}
          <div class="relative  mb-6 mr-9 max-[1160px]:mr-3">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <BsBuildings className="text-black" />
            </div>
            <select
              id="countries"
              class="bg-white border border-black text-black text-1xl rounded-lg  block w-55 ps-12 p-2.5 placeholder-black focus:ring-1 focus:ring-black  max-[950px]:w-30 max-[650px]:w-full"
            >
              <option selected>Tipo de propiedad</option>
              <option value="casa">Casa</option>
              <option value="departamento">Departamento</option>
              <option value="lote">Lote</option>
              <option value="oficina">Oficina</option>
              <option value="local">Local comercial</option>
            </select>
          </div>
          {/*SELECT*/}
          {/*SELECT*/}
          <div class="relative mb-6 mr-9 max-[1160px]:mr-3">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <LiaKeySolid className="text-black" />
            </div>
            <select
              id="countries"
              class="bg-white border border-black text-black text-1xl rounded-lg  block w-50 ps-12 p-2.5 placeholder-black focus:ring-1 focus:ring-black max-[950px]:w-30 max-[650px]:w-full"
            >
              <option selected>Operación</option>
              <option value="venta">Venta</option>
              <option value="alquiler">Alquiler</option>
            </select>
          </div>
          {/*SELECT*/}
          <SmallButton caption={"Buscar"} />
        </form>
      </div>
    </div>
  );
}

export default SmallSearcher;
