import React from "react";
import "./titleAndSubtitle.css";

import { RxBorderSolid } from "react-icons/rx";

function TitleAndSubtitle() {
  return (
    <div className="titleAndSubtitle">
      <div className="title">
        <div className="linea"></div>
        <h2>TITULO</h2>
      </div>
      <div className="subtitle">
        <h3>Subtitulo</h3>
      </div>
    </div>
  );
}

export default TitleAndSubtitle;
