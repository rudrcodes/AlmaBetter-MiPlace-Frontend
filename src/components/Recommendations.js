import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
const Recommendations = ({ district, hotelName }) => {
  let recommondations = useSelector((state) => state.hotelFeature.hotels);
  let newRecom = recommondations?.filter((hotel) => {
    return hotel.hotel_name !== hotelName && hotel.district == district;
  });
  //   let district = useSelector((state) => state.indiHotelInfoFeature.district);
  //   let hotelName = useSelector((state) => state.indiHotelInfoFeature.hotel_name);
  //   let hotelName = useSelector((state) => state.indiHotelInfoFeature.hotel_name);

  //   let [districtVar, setDistrict] = useState("");
  // let [upadtedRecommendations, setUpadtedRecommendations] = useState([]);

  useEffect(() => {
    console.log("recommondations : ", newRecom);
  }, [district, hotelName]);
  return (
    <div className="text-semibold font-mullish p-8">
      {/* <h1 className="text-2xl text-bold text-center ">
        District : {district || <span>NULL</span>}
      </h1>
      <h1 className="text-2xl text-bold text-center">
        HotelName : {hotelName || <span>NULL</span>}
      </h1> */}
      <h1 className="text-5xl text-bold text-start my-2">Recommendations : </h1>
      {district == "" && (
        <h1 className="text-2xl text-bold text-center my-4">
          No recommondations for this one
        </h1>
      )}
      {district != "" &&
        newRecom.map((hotel) => {
          return (
            <div key={hotel.hotel_id}>
              <IndividualPlaceCard
                hotel_id={hotel.hotel_id}
                Hotel_obj={hotel}
                address={hotel.address}
                city={hotel.city_trans}
                district={hotel.district}
                hotel_name={hotel.hotel_name}
                main_photo_url={hotel.main_photo_url}
                review_score={hotel.review_score}
                review_score_word={hotel.review_score_word}
                url={hotel.url}
                price_breakdown={hotel.price_breakdown.all_inclusive_price}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Recommendations;
