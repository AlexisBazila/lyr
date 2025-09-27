import React from "react";
import "./iconAndLabel.css";
import { FaHouse } from "react-icons/fa6";
function IconAndLabel({ icon, label }) {
  return (
    <div className="iconLabel">
      <div className="icon">{icon}</div>
      <div className="label">{label}</div>
    </div>
  );
}

export default IconAndLabel;
