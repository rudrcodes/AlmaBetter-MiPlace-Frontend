import { configureStore } from "@reduxjs/toolkit";
import hotelSlice from "../redux-features/hotelSlice";
import userSlice from "../redux-features/userSlice";
import indiHotelInfoSlice from "../redux-features/indiHotelInfoSlice";
import enteredHotelDetailsSlice from "../redux-features/enteredHotelDetailsSlice";
import filterSlice from "../redux-features/filterSlice";
// We will import all the individual slices here
const store = configureStore({
  reducer: {
    hotelFeature: hotelSlice,
    userFeature: userSlice,
    indiHotelInfoFeature: indiHotelInfoSlice,
    enteredHotelDetailsFeature: enteredHotelDetailsSlice,
    filterFeature: filterSlice,
  },
});
export default store;