import React from "react";
import "./smallButton.css";

function SmallButton({ caption }) {
  return (
    <a href="#" className="SmallButton">
      {caption}
    </a>
  );
}

export default SmallButton;
