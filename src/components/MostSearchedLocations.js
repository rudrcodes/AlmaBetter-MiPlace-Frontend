import React from "react";
import img from "../images/Delhi.webp";
import img1 from "../images/ahmedabad.webp"
import img2 from "../images/Pune.webp";
import img3 from "../images/jaipur.webp"
import img4 from "../images/Hotelimages/Hotel1.webp"
import "./styles.css";
export const MostSearchedLocations = () => {
  const placesObj = [
    {
      url: img,
      placeName: "Delhi",
    },
    {
      url: img1,
      placeName: "Ahmedabad",
    },
    {
      url: img2,
      placeName: "Pune",
    },
    {
      url: img3,
      placeName: "Banglore",
    },
    {
      url: img4,
      placeName: "Jaipur",
    },
  ];
  return (
    <div className=" flex justify-center items-center mt-[3.625rem]">
      <div className="    mostSearchedPlaces w-11/12 ">
        <p id="para" className="text-start text-2xl font-bold mb-[2.246875rem] font-mullish  ">Most Searched Locations</p>
        <div id="box"className="flex justify-between items-center w-full my-5 md:flex-wrap gap-4">
          {placesObj.map((elem) => {
            return (
              <div className="flex flex-col justify-center items-center mr-16 " key={Math.random() * 1000}>
                <img className="rounded-xl " src={elem.url} alt="img" />
                <div className="p-2  ">
                  <p className="text-lg font-semibold font-mullish">{elem.placeName}</p>
                  {/* <p className="text-base ">{elem.numOfPlaces}</p> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
