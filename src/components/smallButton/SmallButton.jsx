import React from "react";
import "./smallButton.css";

function SmallButton({ caption, className = "" }) {
  return (
    <a href="#" className={`SmallButton ${className}`}>
      {caption}
    </a>
  );
}

export default SmallButton;
