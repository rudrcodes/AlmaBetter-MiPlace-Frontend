import React from "react";
import { BiSolidLocationPlus } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsFillCupFill } from "react-icons/bs";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { addFavHotel, deleteFavHotel } from "../redux-features/userSlice";
import { useNavigate } from "react-router-dom";
import { setHotelDetails } from "../redux-features/indiHotelInfoSlice";
import Hotel15 from "../images/Hotelimages/Hotel15.webp";
import "./styles.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const FavoritesPlaceCardComponent = ({
  hotel_id,
  webUrl,
  address,
  city,
  currency,
  district,
  hotel_name,
  main_photo_url,
  review_score,
  review_score_word,
  url,
  price_breakdown,
  Hotel_obj,
}) => {
  let dispatch = useDispatch();
  let favHotel = useSelector((state) => state.userFeature.favHotel);
  const deleteHotel = () => {
    toast.success("🗑️ Deleted the hotel from the Favorites list !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    dispatch(deleteFavHotel(Hotel_obj));
    console.log(Hotel_obj)
  };
  const navigate = useNavigate();

  const handleViewPlace = async () => {
    // navigate(`/hotel/${Hotel_obj._id}`);
    const hotelObj = {
      hotel_id,
      webUrl,
      currency,
      hotel_name,
      address,
      city,
      district,
      main_photo_url,
      review_score,
      review_score_word,
      url,
      price_breakdown,
      checkIn: "",
      checkOut: "",
    };
    console.log(hotelObj);
    dispatch(setHotelDetails(hotelObj));
    navigate("/hotelInfo");
  };

  return (
    <div className=" w-full   border-b-2 border-black p-3">
      {/* Divide into two parts */}
      <div id="placecard" className="flex items-center justify-center w-full  ">
        {/* IMG */}
        <div className="overflow-none h-[230px] w-[340px] 	rounded-md  bg-fixed	bg-center	bg-no-repeat	bg-cover	">
          <img
            src={Hotel15}
            alt="asd"
            className="object-center	object-cover	h-full	"
          />
        </div>

        {/* Written */}
        <div className="flex justify-center items-center flex-col w-full ">
          <div className="flex justify-center items-end w-full ">
            {/* Hotel info */}
            <div className="  w-full  ">
              {/* <div className="  w-9/12   "> */}
              <div className=" text-bold ">
                <div className=" flex  items-start m-2">
                  <p className="text-2xl text-bold font-mullish">
                    {hotel_name}{" "}
                  </p>
                  <p className=" text-xs   border-2 mx-3 inline border-gray-500  p-1.5 rounded-md text-bold  text-gray-700	">
                    {review_score || "No review posted"}
                  </p>
                </div>
                <div className="text-sm text-gray-600 m-2">
                  {/* {HotelAddress} */}
                  <BiSolidLocationPlus className="inline text-lg font-mullish text-green-800" />
                  {address},{district} ,{city}
                  {/* <div className="flex justify-between items-center text-bold">
                    <div className="flex justify-between items-center">
                      <div className="flex justify-center items-center ">
                        <Rating value="5" className="inline " />
                        <p className="inline   ">5 Star Hotel</p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <BsFillCupFill className="mr-2" />
                      <p className="inline   "> 20+ Aminities</p>
                    </div>
                  </div> */}
                  {/* <div className="flex  items-center my-4">
                    <p className="border-2 mr-4 inline border-sky-700 bg-white p-2 rounded-md text-bold  	">
                      {review_score || "No review posted"}
                    </p>
                    <p className="text-lg">
                    371 reviews
                    </p>
                  </div> */}
                  <p className="text-bold my-2">
                    {" "}
                    <span className="text-bold text-black "> Review</span> : {review_score_word || "No review Posted "}
                  </p>{" "}
                </div>
              </div>
            </div>

            {/* Price Part */}
            <div className="  p-2 text-right w-6/12">
              <p> starting from</p>
              <p className="text-lg text-bold text-blue-600 ">
                {price_breakdown} /night
              </p>
              <p className="">excl. tax</p>
            </div>
          </div>

          {/* Add to fav and view place button */}
          <div className=" flex justify-evenly items-center w-full">
            <button
              className="text-2xl hover:scale-75    transition ease-in-out delay-250 border-2 border-black p-2  rounded-md m-2"
              onClick={deleteHotel}
            >
              <AiFillDelete className="text-red-600" />
            </button>

            <button
              className=" w-full bg-[#1E91B6] rounded-mdw-full p-3 border-none  mr-4 inline rounded-md text-white transition ease-in-out delay-250  hover:bg-blue-700 duration-300 text-bold "
              onClick={handleViewPlace}
            >
              View Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
