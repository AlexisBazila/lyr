import React from "react";

function TitleAndSubtitle({ title, subtitle }) {
  return (
    <div className="m-[5px] text-black">
      <div className="flex items-center text-[36px] uppercase max-[1500px]:text-[26px] max-[1160px]:flex-col max-[1160px]:text-center  ">
        <div className="h-[1px] w-[25px] bg-black mr-[7px]  max-[1160px]:mb-[2%] max-[1160px]:mr-0"></div>

        <h2>{title}</h2>
      </div>

      <div className="text-[40px] max-[1500px]:text-[30px] max-[1160px]:flex-col max-[1160px]:text-center">
        <h3>{subtitle}</h3>
      </div>
    </div>
  );
}

export default TitleAndSubtitle;
