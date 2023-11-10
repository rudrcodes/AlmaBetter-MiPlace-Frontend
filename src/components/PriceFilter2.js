import React, { useState } from "react";
import "../styles/PriceFilter.css";
import { useDispatch, useSelector } from "react-redux";

import { setLowToHigh, sethHighToLow } from "../redux-features/filterSlice";

export const PriceFilter2 = () => {
  const [rangeVal, setRangeVal] = useState(700);
  let lowToHigh = useSelector((state) => state.filterFeature.lowToHigh);

  // the height of the box

  // This function is called when the first range slider changes
  const changeRangeVal = (event) => {
    setRangeVal(event.target.value);
  };

  const dispatch = useDispatch();
  const handlesetLowToHigh = () => {
    dispatch(setLowToHigh());
    console.log(lowToHigh);
  };
  const handlesetHighToLow = () => {
    dispatch(sethHighToLow());
    console.log(lowToHigh);
  };
  //   console.log(rangeVal);
  return (
    <div className=" w-full p-2 font-mullish">
      {/* <div className="bg-green-900 w-full flex items-center justify-center flex-col"> */}
      {/* <div flex justify-center items-center flex-col> */}
      <p className="  pb-1  text-bold text-xl">Prices</p>
      <div className="flex  items-center flex-col">
        <button
          className="border-2 text-bold   p-2 rounded-md  2 transition ease-in-out delay-100 bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2"
          onClick={handlesetLowToHigh}
        >
          Sort Low to high
        </button>
        <button
          className="border-2 text-bold   p-2 rounded-md  2 transition ease-in-out delay-100 bg-[#1E91B6] hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 text-white my-2"
          // className="border-2 text-bold border-sky-700 bg-white p-2 rounded-md  transition ease-in-out delay-250  hover:bg-sky-300 duration-300	m-2"
          onClick={handlesetHighToLow}
        >
          Sort High to Low
        </button>
      </div>
      {/* <div className="flex  items-center flex-col">
        <div className="">
          <label className="mx-2">Rs 500</label>
          <input
          className="w-48"
            type="range"
            onChange={changeRangeVal}
            min={500}
            max={20000}
            step={100}
            value={rangeVal}
          ></input>
        <label className="mx-2">Rs 20000</label>
        </div>
        <p className="rounded-md border-2 border-black p-1">Upto Price : {rangeVal}</p>
      </div> */}
    </div>
  );
};
