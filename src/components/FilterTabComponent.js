import { PriceFilter } from "./PriceFilter";
import { PlaceSearchBarRating } from "./PlaceSearchBarRating";
import { Freebies } from "./Freebies";
import { Amenities } from "./Amenities";
import { PriceFilter2 } from "./PriceFilter2";
import { Link } from "react-router-dom";

export const FilterTabComponent = () => {
  return (
    <div className=" sticky w-[300px] bg-gray-200 m-3 p-3 rounded-lg">
      <div className="  p-2 w-full min-w-max	text-start">
        <div className="  flex   flex-col">
          <h2 className=" text-bold text-3xl border-b-2 border-b-black pb-2 ">
            Filters
          </h2>
          <div className="text-left  flex  items-center flex-col">
            {/* <div className="flex justify-center items-center flex-row">
            <p>Price</p>
            <input
              type="text"
              value={rangeVal}
              onChange={(e) => {
                setRangeVal(+e.target.value);
              }}
            />
            <input
              id="small-range"
              type="range"
              value={rangeVal}
              min="500"
              max="20000"
              onChange={(e) => setRangeVal(e.target.value)}
              class="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
            />
          </div> */}
            {/* <AccordionPrice title="Accordion #1" /> */}
            <PriceFilter2 />
            <hr />
            {/* <PlaceSearchBarRating /> */}
            <hr />
            <Freebies />
            <hr />
            {/* <Amenities /> */}
            <Link to="/Favorites">
              <button
                className="border-2 text-bold   p-2 rounded-md  2 transition ease-in-out delay-100 bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2"
                // className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	m-2"
              >
                View My Favorites{" "}
              </button>
            </Link>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
