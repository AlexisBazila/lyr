import React from "react";
import "./LeftAlignedParagraph.css";

const LeftAlignedParagraph = ({ paragraphs = [] }) => {
  return (
    <div className="LeftAlignedParagraph">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LeftAlignedParagraph;
