import React from "react";
import Button from "./Button";
import { BiSolidLocationPlus } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import Rating from "./Rating";
import "./styles.css";
import { useDispatch } from "react-redux";
import { addFavHotel } from "../redux-features/userSlice";
import Share from "./Share";
const HotelNamebooking = ({
  url,
  hotel_id,
  hotelOBJ,
  hotelname,
  city,
  price,
  text,
  review,
  address,
  district,
  noOfDays,
  rooms,
  currencyPrice,
  currency,
}) => {
  function formatCurrency(amount, currencyCode) {
    // Create a formatter based on the currency code
    const formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    });

    // Format the amount
    return formatter.format(amount);
  }

  const dispatch = useDispatch();
  // const totalPrice=
  const handleAddtoFav = () => {
    dispatch(addFavHotel(hotelOBJ));
    // console.log("favHotel : ", favHotel);
    console.log(hotelOBJ);
  };

  return (
    <div id ="hotelname"class="flex justify-between p-8 text-black rounded">
      <div>
        <h1 className="font-[Montserrat] text-[2.125rem] font-semibold">
          {hotelname}
        </h1>

        <h3 className=" flex font-[Montserrat]  font-medium justify-start items-start">
          <BiSolidLocationPlus className="mr-2" />
          {address}, {city}
        </h3>
        {/* <h3 className=" flex font-[Montserrat]  font-medium">
          <BiSolidLocationPlus /> {district}
        </h3> */}

        <div className="flex gap-[1rem] ">
          <p>
            <span className="text-bold"> Review :</span> {review}{" "}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="font-[Montserrat] text-[2.125rem] font-bold text-[#1E91B6] ">
          {price}/night
          {/* {formatCurrency(price, currency)}/night */}
        </h1>
        {/* <div id="icons" className="flex justify-between space-x-2"> */}
        {/* <FcLike className="text-xl hover:scale-75 cursor-pointer transition ease-in-out delay-250" /> */}
        {/* <button
            className="border-2 border-black p-2  rounded-md m-2"
            onClick={handleAddtoFav}
          >
            <FcLike className="text-2xl hover:scale-75    transition ease-in-out delay-250" />
          </button> */}
        {/* <div className="border-2 border-black inline-block h-6 w-6 px-1 ">
            <BsFillShareFill className="pt-2 snap-center" /></div>
          {/* <Button className="md:text-sm inline-block" text={text} /> */}
        <Share
          label="Share"
          title="My Web Share Adventures"
          text="Hello World! I shared this content via Web Share"
        />
      </div>

      {/* </div> */}
    </div>
  );
};

export default HotelNamebooking;
