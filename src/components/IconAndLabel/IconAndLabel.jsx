import React from "react";
import "./iconAndLabel.css";
import { FaHouse } from "react-icons/fa6";
function IconAndLabel({ icon, label }) {
  return (
    <div className="iconLabel">
      <div className="icon">
        <FaHouse />
      </div>
      <div className="label">VENTA Y ALQUILERES</div>
    </div>
  );
}

export default IconAndLabel;
