import React, { useEffect, useState } from "react";
import { IndividualPlaceCard } from "./IndividualPlaceCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import loader from "../assests/loader.svg";
export const PlaceCard = () => {
  const hotels = useSelector((state) => state.hotelFeature.hotels);
  const bothtrue = useSelector((state) => state.hotelFeature.bothtrue);
  const userEnteredDetails = useSelector(
    (state) => state.enteredHotelDetailsFeature
  );
  const isFreeCancellableHotels = useSelector(
    (state) => state.hotelFeature.isFreeCancellableHotels
  );

  const hasFreeParkingHotels = useSelector(
    (state) => state.hotelFeature.hasFreeParkingHotels
  );

  let hasFreeParkingHotels1 = [...hasFreeParkingHotels];
  let hasFreeParkingHotels2 = [...hasFreeParkingHotels];

  hasFreeParkingHotels1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  hasFreeParkingHotels2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );

  let bothTrue1 = [...bothtrue];
  let bothTrue2 = [...bothtrue];
  bothTrue1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  bothTrue2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );
  let isFreeCancellableHotels1 = [...isFreeCancellableHotels];
  isFreeCancellableHotels1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  let isFreeCancellableHotels2 = [...isFreeCancellableHotels];
  isFreeCancellableHotels2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );

  const isFreeCancellable = useSelector(
    (state) => state.filterFeature.is_free_cancellable
  );
  const hasFreeParking = useSelector(
    (state) => state.filterFeature.has_free_parking
  );
  let lowToHigh = useSelector((state) => state.filterFeature.lowToHigh);

  let hotel1 = hotels.map((obj1) => {
    return obj1;
  });
  let hotel2 = hotels.map((obj1) => {
    return obj1;
  });

  console.log("hotel1 : ", hotel1);
  function formatCurrency(amount, currencyCode) {
    // Create a formatter based on the currency code
    const formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    });

    // Format the amount
    return formatter.format(amount);
  }
  const loading = useSelector((state) => state.hotelFeature.loading);
  const error = useSelector((state) => state.hotelFeature.error);

  const [allHotels, setAllHotels] = useState([]);
  const [finalHoteList, setfinalHoteList] = useState([]);
  const [DescHowItisSorted, setDescHowItisSorted] = useState(null);
  const [TextisFreeCancellable, setTextisFreeCancellable] = useState(false);
  const [TexthasFreeParking, setTexthasFreeParking] = useState(false);
  const [noFilter, setNoFilter] = useState(true);
  const [
    filteredArrayisFreeCancellableHotels,
    setFilteredArrayisFreeCancellableHotels,
  ] = useState(isFreeCancellableHotels);
  const [
    filteredArrayhasFreeParkingHotels,
    setFilteredArrayhasFreeParkingHotels,
  ] = useState(hasFreeParkingHotels);
  hotel1.sort(
    (a, b) =>
      a.price_breakdown.all_inclusive_price -
      b.price_breakdown.all_inclusive_price
  );
  hotel2.sort(
    (a, b) =>
      b.price_breakdown.all_inclusive_price -
      a.price_breakdown.all_inclusive_price
  );
  // let filteredArray = [...hotel1];

  useEffect(() => {
    setAllHotels(hotels);
    console.log("isFreeCancellableHotels : ", isFreeCancellableHotels);
    console.log("hasFreeParkingHotels : ", hasFreeParkingHotels);
    console.log("bothtrue : ", bothtrue);
    setfinalHoteList(lowToHigh === false ? hotel2 : hotel1);
    setDescHowItisSorted(lowToHigh === false ? "High to Low" : "Low to High");
    setTexthasFreeParking(hasFreeParking === false ? "false" : "true");
    setTextisFreeCancellable(isFreeCancellable === false ? "false" : "true");

    if (hasFreeParking === false && isFreeCancellable === false) {
      setNoFilter(true);
    } else setNoFilter(false);
    console.log(`hasFreeParking :${hasFreeParking}`);
    console.log(`isFreeCancellable :${isFreeCancellable}`);
    console.log("---------------------------");
  }, [
    hotels,
    loading,
    error,
    lowToHigh,
    isFreeCancellable,
    hasFreeParking,
    TexthasFreeParking,
    TextisFreeCancellable,
  ]);

  return (
    <div className=" w-full ml-2 h-full">
      <div className="w-full ">
        {loading && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold animate-pulse">
            Loading the Hotel Info 🔃....
            <img className="svg " src={loader} />
          </div>
        )}
        {loading == false &&
          userEnteredDetails.city != "" &&
          hotels.length === 0 && (
            <div className=" w-full  rounded-lg m-3   flex justify-center items-center p-4 text-gray-600 text-bold">
              <div className="p-5 text-center">
                Oops! 😬 We couldn't find the data you need right now. 📊 There
                might be a small hiccup with the info you entered. 🤔 Please
                double-check your details to ensure accuracy. 🕵️‍♂️
              </div>
            </div>
          )}
        {/* {hotels.length > 0 && (
          <div className="text-3xl w-full  rounded-lg my-2  flex justify-center items-center text-bold">
            {DescHowItisSorted} 📃....
            <br />
            TextisFreeCancellable: {TextisFreeCancellable}
            <br />
            TexthasFreeParking :{TexthasFreeParking}
            <br />
            noFilter :{noFilter == true ? "True" : "False"}
          </div>
        )} */}
        {/* {!loading && !error && hotels.length == 0 && (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold">
            No hotels in India for the particular city...
          </div>
        )} */}
        {loading == false &&
          isFreeCancellable &&
          hasFreeParking &&
          lowToHigh &&
          bothTrue1.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  currency={hotel.price_breakdown.currency}
                  hotel_id={hotel.hotel_id}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                  // price_breakdown={hotel.price_breakdown.all_inclusive_price}
                />
              </div>
            );
          })}

        {loading == false &&
          isFreeCancellable &&
          hasFreeParking &&
          lowToHigh == false &&
          bothTrue2.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  currency={hotel.price_breakdown.currency}
                  hotel_id={hotel.hotel_id}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })}

        {loading == false &&
          isFreeCancellable == true &&
          hasFreeParking == false &&
          lowToHigh &&
          isFreeCancellableHotels1.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  currency={hotel.price_breakdown.currency}
                  hotel_id={hotel.hotel_id}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })}
        {loading == false &&
          isFreeCancellable == true &&
          hasFreeParking == false &&
          lowToHigh == false &&
          isFreeCancellableHotels2.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  hotel_id={hotel.hotel_id}
                  currency={hotel.price_breakdown.currency}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })}

        {loading == false &&
          isFreeCancellable == false &&
          hasFreeParking == true &&
          lowToHigh &&
          hasFreeParkingHotels1.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  currency={hotel.price_breakdown.currency}
                  hotel_id={hotel.hotel_id}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })}

        {loading == false &&
          isFreeCancellable == false &&
          hasFreeParking == true &&
          lowToHigh == false &&
          hasFreeParkingHotels2.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  currency={hotel.price_breakdown.currency}
                  hotel_id={hotel.hotel_id}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })}

        {userEnteredDetails.city == "" ||
        userEnteredDetails.firstDay == "" ||
        userEnteredDetails.secondDay == "" ||
        userEnteredDetails.roomsGuests == "" ? (
          <div className="text-3xl w-full  rounded-lg my-3  flex justify-center items-center p-4 text-bold animate-bounce">
            Fill the form above to load hotel info 🛎️🏩....
          </div>
        ) : (
          loading == false &&
          hasFreeParking == false &&
          isFreeCancellable == false &&
          // { noFilter==false &&}

          finalHoteList.map((hotel) => {
            return (
              <div key={hotel.hotel_id}>
                <IndividualPlaceCard
                  currencyPrice={hotel.price_breakdown.all_inclusive_price}
                  hotel_id={hotel.hotel_id}
                  currency={hotel.price_breakdown.currency}
                  webUrl={hotel.url}
                  Hotel_obj={hotel}
                  address={hotel.address}
                  city={hotel.city_trans}
                  district={hotel.district}
                  hotel_name={hotel.hotel_name}
                  main_photo_url={hotel.main_photo_url}
                  review_score={hotel.review_score}
                  review_score_word={hotel.review_score_word}
                  url={hotel.url}
                  price_breakdown={formatCurrency(
                    hotel.price_breakdown.all_inclusive_price,
                    hotel.price_breakdown.currency
                  )}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
