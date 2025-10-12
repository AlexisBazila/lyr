import React from "react";
import { FaHouse } from "react-icons/fa6";
function IconAndDescription({ icon, label, desc }) {
  return (
    <div className="max-w-[500px] text-center m-8 flex flex-col items-center max-[1500px]:max-w-full">
      <div className="text-[150px] text-[#ec1f24] flex justify-center max-[1500px]:text-[90px]">
        {icon}
      </div>
      <h4 className="text-3xl font-semibold mt-2 max-[1500px]:text-xl">
        {label}
      </h4>
      <p className="text-xl mt-1 text-gray-700 max-[1500px]:text-sm">{desc}</p>
    </div>
  );
}

export default IconAndDescription;
