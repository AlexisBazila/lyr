import React from "react";
import "./redCounter.css";

function RedCounter({ valor, label }) {
  return (
    <div className="redCounter">
      <div className="valorCounter">
        <h4>{valor}</h4>
      </div>
      <div className="labelCounter">
        <h3>{label}</h3>
      </div>
    </div>
  );
}

export default RedCounter;
