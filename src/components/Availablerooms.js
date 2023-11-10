import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import "./styles.css";
import Slides from "./Slides";
import { Slide } from "react-toastify";
const Availablerooms = ({ room, price, text }) => {

  return (
    <>
      <div className=" max-w-1409px mx-auto p-8 h-600px font-mullish">
        <div>
          <h1 className=" rounded inline-block text-2xl font-bold mb-4 font-mullish">
            Available rooms
          </h1>
        </div>

        <div class="flex justify-between my-2">
          <div class="flex font-mullish">
            <img />
            <p className="text-bold text-xl ">{room}</p>
          </div>
          <div id="available" class="flex space-x-3 font-bold font-mullish text-xl">
            <h2>{price}/night</h2>
            <Link to="/bookingInfoandBill">
              <Button text={text} />{" "}
            </Link>{" "}
          </div>
        </div>
      
        <Slides/>

      </div>
      <hr class="h-1px my-8 bg-black"></hr>
    </>
  );
};

export default Availablerooms;
