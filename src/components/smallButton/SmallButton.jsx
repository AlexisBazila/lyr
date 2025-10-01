import React from "react";
import { Link } from "react-router-dom";
import "./smallButton.css";

function SmallButton({ caption, className = "", to }) {
  return (
    <Link to={to} className={`SmallButton ${className}`}>
      {caption}
    </Link>
  );
}

export default SmallButton;
