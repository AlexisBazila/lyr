import React from "react";
import "./smallSearcher.css";
import { LuMapPin } from "react-icons/lu";

function SmallSearcher() {
  return (
    <div className="smallSearcher">
      <div className="searcherContent">
        <div className="title">
          <h3 className="text-3xl text-black">
            Encontrá lo que estas buscando
          </h3>
        </div>
        <form className="formSearch" action="">
          <div class="relative mb-6">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-2xl">
              <LuMapPin className="text-black" />
            </div>
            <input
              type="text"
              id="location"
              class="bg-white border border-black text-black text-1xl rounded-lg  block w-70 ps-12 p-2.5 placeholder-black"
              placeholder="Ubicación"
            />
          </div>

          {/* SELECT */}
          <div class="w-96 select">
            <span class="icon-[tabler--movie] text-base-content/80 my-auto size-5 shrink-0"></span>
            <label class="sr-only" for="favorite-simpson">
              Pick your favorite Movie
            </label>
            <select id="favorite-simpson">
              <option>The Godfather</option>
              <option>The Shawshank Redemption</option>
              <option>Pulp Fiction</option>
              <option>The Dark Knight</option>
              <option>Schindler's List</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SmallSearcher;
