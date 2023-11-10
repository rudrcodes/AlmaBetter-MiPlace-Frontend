import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // currencyPrice: "",
  hotel_id: "",
  webUrl: "",
  hotel_name: "",
  currency: "",
  address: "",
  city: "",
  district: "",
  main_photo_url: "",
  review_score: "",
  review_score_word: "",
  url: "",
  price_breakdown: "",
  checkIn: "",
  checkOut: "",
  //   Hotel_obj:"",
};

// function formatCurrency(amount, currencyCode) {
//   // Create a formatter based on the currency code
//   const formatter = new Intl.NumberFormat(undefined, {
//     style: "currency",
//     currency: currencyCode,
//   });

//   // Format the amount
//   return formatter.format(amount);
// }

// Example usage:
// const amount1 = 1000.5;
// const currencyCode1 = "USD";

// const amount2 = 500.75;
// const currencyCode2 = "EUR";

// console.log(formatCurrency(amount1, currencyCode1)); // Output: $1,000.50
// console.log(formatCurrency(amount2, currencyCode2)); // Output: €500.75

const indiHotelInfoSlice = createSlice({
  name: "indiHotelInfo",
  initialState,
  reducers: {
    setHotelDetails: (state, action) => {
      state.hotel_id = action.payload.hotel_id;
      state.currencyPrice = Number(action.payload.currencyPrice);
      state.webUrl = action.payload.webUrl;
      state.currency = action.payload.currency;
      state.hotel_name = action.payload.hotel_name;
      state.address = action.payload.address;
      state.city = action.payload.city;
      state.district = action.payload.district;
      state.main_photo_url = action.payload.main_photo_url;
      state.review_score = action.payload.review_score;
      state.review_score_word = action.payload.review_score_word;
      // state.price_breakdown = formatCurrency(
      //   action.payload.price_breakdown,
      //   action.payload.currency
      // );
      state.price_breakdown = action.payload.price_breakdown;
      // state.price_breakdown = new Intl.NumberFormat("en-IN").format(
      //   action.payload.price_breakdown
      // );
      // state.price_breakdown = action.payload.price_breakdown;
      console.log(action.payload);
      console.log(state);
    },
  },
});

export default indiHotelInfoSlice.reducer;
export const { setHotelDetails } = indiHotelInfoSlice.actions;
