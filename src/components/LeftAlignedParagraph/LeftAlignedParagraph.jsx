import React from "react";

const LeftAlignedParagraph = ({ paragraphs = [] }) => {
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p
          className="text-2xl max-w-[50vw] px-2.5 py-1.5 mt-2.5 mb-6 max-[1700px]:text-lg max-[1600px]:text-sm max-[1160px]:text-center max-[1160px]:max-w-full "
          key={index}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default LeftAlignedParagraph;
