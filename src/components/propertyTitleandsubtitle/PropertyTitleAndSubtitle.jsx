import React from "react";
import "./propertyTitleAndSubtitle.css";
import { GoDotFill } from "react-icons/go";
import { LuMapPinHouse } from "react-icons/lu";
import { RxBorderSolid } from "react-icons/rx";

function PropertyTitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="PropertyTitleAndSubtitle">
      <div>
        {/* La ruta debe ser intercambiada por la ruta real de la propiedad en la base de datos */}
        <p className="propertyRuta">
          Propiedades &gt; Departamentos &gt; Alquiler &gt;{" "}
          <strong>{title}</strong>
        </p>
      </div>
      <div className="title">
        <div className="linea"></div>
        {/* El titulo debe ser cambiado por el nombre de la pripiedad */}
        <h2>{title}</h2>
        <div className="propertyTipeOfTransaction">
          <i className="text-[#75f94c] text-3xl">
            <GoDotFill />
          </i>
          {/* Esto debe ser reemplazado por el tipo de transaccion (Alquiler, Venta) */}
          <p>Alquiler</p>
        </div>
      </div>
      <div className="subtitle">
        {/* El subtitulo debe ser Reemplazado por la direccion de la propiedad */}
        <i className="mr-3 text-lg text-[#EC1F24]">
          <LuMapPinHouse />
        </i>
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default PropertyTitleAndSubtitle;
