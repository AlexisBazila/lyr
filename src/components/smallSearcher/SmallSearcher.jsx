import React from "react";
import "./smallSearcher.css";
import { LuMapPin } from "react-icons/lu";

function SmallSearcher() {
  return (
    <div className="smallSearcher">
      <div className="searcherContent">
        <div className="title">
          <h3>Encontrá lo que estas buscando</h3>
        </div>
        <form className="formSearch" action="">
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <LuMapPin />
            </div>
            <input
              type="text"
              id="location"
              class="bg-white border border-black text-black text-1xl rounded-lg  block w-70 ps-12 p-2.5 placeholder-black"
              placeholder="Ubicación"
            />
          </div>

          {/* SELECT */}
          <div class="max-w-sm">
            <select
              data-select='{
    "placeholder": "<span class=\"inline-flex items-center\"><span class=\"icon-[tabler--filter] shrink-0 size-4 me-2\"></span> Filter</span>",
    "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
    "toggleClasses": "advance-select-toggle select-disabled:pointer-events-none select-disabled:opacity-40",
    "dropdownClasses": "advance-select-menu",
    "optionClasses": "advance-select-option selected:select-active",
    "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"icon-[tabler--check] shrink-0 size-4 text-primary hidden selected:block \"></span></div>",
    "extraMarkup": "<span class=\"icon-[tabler--caret-up-down] shrink-0 size-4 text-base-content absolute top-1/2 end-3 -translate-y-1/2 \"></span>"
  }'
              class="hidden"
            >
              <option value="">Choose</option>
              <option value="name">Full Name</option>
              <option value="email">Email Address</option>
              <option value="description">Project Description</option>
              <option value="user_id">User Identification Number</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SmallSearcher;
