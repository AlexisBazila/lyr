import React from "react";
import "./titleAndSubtitle.css";

import { RxBorderSolid } from "react-icons/rx";

function TitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="titleAndSubtitle">
      <div className="title">
        <div className="linea"></div>
        <h2>{title}</h2>
      </div>
      <div className="subtitle">
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default TitleAndSubtitle;
