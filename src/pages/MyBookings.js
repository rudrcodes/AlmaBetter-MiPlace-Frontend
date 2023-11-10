import React, { useEffect, useState } from "react";
import Bookingreceipt from "../components/Bookingreceipt";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import HotelNamebooking from "../components/HotelNamebooking.js";

function MyBookings() {
  const [hotelObj, setHotelObj] = useState({});
  const [userEneterdHotelDetailsObj, setuserEneterdHotelDetailsObj] = useState(
    {}
  );

  useEffect(() => {
    const hotelobj = JSON.parse(localStorage.getItem("hotelObj"));
    const userEneterdHotelDetailsObj = JSON.parse(
      localStorage.getItem("userEneterdHotelDetailsObj")
    );
    setHotelObj(hotelobj);
    setuserEneterdHotelDetailsObj(userEneterdHotelDetailsObj);
    console.log(hotelObj);
    console.log(userEneterdHotelDetailsObj);
  }, []);

  return (
    <div class=" justify-between mx-[3.125rem]  space-x-4 ">
      <HotelNamebooking
        hotelOBJ={hotelObj}
        hotel_id={hotelObj.hotel_id}
        hotelname={hotelObj.hotel_name}
        city={hotelObj.city}
        district={hotelObj.district}
        address={hotelObj.address}
        // currency={hotelObj.currency}
        price={hotelObj.price_breakdown}
        currencyPrice={hotelObj.currencyPrice}
        currency={hotelObj.currency}
        url={hotelObj.main_photo_url}
        text="Download"
        review={hotelObj.review_score_word}
        noOfDays={userEneterdHotelDetailsObj.noOfDays}
        rooms={userEneterdHotelDetailsObj.roomsGuests}
      />
      <Bookingreceipt
        hotel_id={hotelObj.hotel_id}
        hotel_name={hotelObj.hotel_name}
        city={hotelObj.city}
        district={hotelObj.district}
        address={hotelObj.address}
        price={hotelObj.price_breakdown}
        url={hotelObj.main_photo_url}
        text="Download"
        review={hotelObj.review_score_word}
        firstDay={userEneterdHotelDetailsObj.firstDay}
        secondDay={userEneterdHotelDetailsObj.secondDay}
        noOfDays={userEneterdHotelDetailsObj.noOfDays}
      />
      <div class="mx-[3.125rem] my-[2.125rem] ">
        <h1 className="mb-[2.125rem] text-2xl font-semibold font-[Montserrat] ">
          Terms and Conditions
        </h1>
        <h2 className="mb-[1rem] font-bold font-[Montserrat]">Payments</h2>
        <p>
          <li className="mb-[1rem]">
            If you are purchasing your ticket using a debit or credit card via
            the Website, we will process these payments via the automated secure
            common payment gateway which will be subject to fraud screening
            purposes.{" "}
          </li>
          <li className="mb-[1rem]">
            If you do not supply the correct card billing address and/or
            cardholder information, your booking will not be confirmed and the
            overall cost may increase. 
          </li>
          <li className="mb-[1rem]">
            Golobe may require the card holder to provide additional payment
            verification upon request by either submitting an online form or
            visiting the nearest Golobe office, or at the airport at the time of
            check-in. 
          </li>
        </p>
      </div>
    </div>
  );
}

export default MyBookings;
