import React from "react";
import { FilterTabComponent } from "../components/FilterTabComponent";
import { PlaceCard } from "../components/PlaceCard";
import { PlaceSearchBarComponent } from "../components/PlaceSearchBarComponent";
import { useSelector } from "react-redux";
import "../components/styles.css";
// import { useSelector } from "react-redux/es/hooks/useSelector";

function SearchResults() {
  const enteredHotelDetailsFeature = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );
  return (
    <div className="h-full p-6 font-mullish">
      <div className="">
        <div className="mb-2">
          <PlaceSearchBarComponent />
          {/* <div id="searchdetails" className="flex justify-center items-center  m-2 rounded-lg  bg-gray-300 p-3 ">
            <div id="searchbar"className="flex justify-center	 items-center">
              <h1 className="text-xl text-bold">Entered Details -{`>`} </h1>
              <span className="m-2">
                {" "}
                <span className="text-bold">City: </span>
                {enteredHotelDetailsFeature.city || "Empty"}
              </span>
              <span className="m-2">
                {" "}
                <span className="text-bold">checkIn: </span>
                {enteredHotelDetailsFeature.firstDay || "Empty"}
              </span>
              <span className="m-2">
                <span className="text-bold">checkOut: </span>
                {enteredHotelDetailsFeature.secondDay || "Empty"}
              </span>

              <span className="m-2">
                <span className="text-bold">noOfDays: </span>
                {enteredHotelDetailsFeature.noOfDays || "Empty"}
              </span>
              <span className="m-2">
                <span className="text-bold">roomsGuests: </span>
                {enteredHotelDetailsFeature.roomsGuests || "Empty"}
              </span>
            </div>
          </div> */}
        </div>
        <div className="flex font-mullish justify-center items-center">
          <div className=" flex justify-between items-start w-11/12">
            {/* <div className=" flex justify-between items-center "> */}
            <FilterTabComponent />
            <div className=" flex justify-center items-center flex-col w-full">
              <PlaceCard />
              {/* <button className="bg-black text-white rounded-md w-full p-3 transition ease-in-out delay-250  hover:bg-gray-800 duration-300 text-bold  ">
                Show more results
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
