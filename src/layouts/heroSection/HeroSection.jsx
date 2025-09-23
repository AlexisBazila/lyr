import React from "react";
import "./heroSection.css";

function HeroSection({ title, subtitle }) {
  return (
    <section className="heroSection">
      <div className="overlay">
        <div className="heroTitle">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
