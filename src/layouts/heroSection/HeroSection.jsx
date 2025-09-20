import React from "react";
import "./heroSection.css";

function HeroSection({ title, subtitle }) {
  return (
    <section className="heroSection">
      <div className="heroTitle">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  );
}

export default HeroSection;
