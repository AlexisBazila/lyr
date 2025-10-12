import React from "react";

function CentredTitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="m-[5px] text-black">
      <div className="flex items-center text-[36px] uppercase flex-col text-center max-[1500px]:text-[26px] ">
        <div className="h-[1px] w-[50px] bg-black  mb-[2%]"></div>

        <h2>{title}</h2>
      </div>

      <div className="text-[40px] text-center max-[1500px]:text-[30px] ">
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default CentredTitleAndSubtitle;
