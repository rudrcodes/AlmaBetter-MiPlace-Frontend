import React from "react";
import "../styles/PriceFilter.css";

export const PlaceSearchBarRating = () => {
  return (
    <div className=" w-full p-2 mx-4 ">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      <p className="  pb-1  text-bold text-xl">Rating</p>
      <div className="price-input flex  flex-col">
        <div className="flex justify-between items-center">
          <button className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md transition ease-in-out delay-250  hover:bg-sky-300 duration-300	 ">
            0+
          </button>
          <button className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	">
            2+
          </button>
          <button className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	">
            4+
          </button>
          <button className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	">
            6+
          </button>
          <button className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	">
            8+
          </button>
        </div>
      </div>
    </div>
  );
};
