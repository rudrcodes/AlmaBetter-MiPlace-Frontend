import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lowToHigh: true,
  is_free_cancellable: false,
  has_free_parking: false,
  has_swimming_pool: false,
  hotel_include_breakfast: false,
};

// is_free_cancellable
// has_free_parking
// has_swimming_pool
// hotel_include_breakfast

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setLowToHigh: (state, action) => {
      state.lowToHigh = true;
      //   console.log(state.lowToHigh);
    },
    sethHighToLow: (state, action) => {
      state.lowToHigh = false;
      //   console.log(state.lowToHigh);
    },
    setisfreecancellable: (state, action) => {
      state.is_free_cancellable = action.payload;
      //   console.log(state.lowToHigh);
    },
    sethasfreeparking: (state, action) => {
      state.has_free_parking = action.payload;
      //   console.log(state.lowToHigh);
    },
    sethasswimmingpool: (state, action) => {
      state.has_swimming_pool = action.payload;
      //   console.log(state.lowToHigh);
    },
    sethotelincludebreakfast: (state, action) => {
      state.hotel_include_breakfast = action.payload;
      //   console.log(state.lowToHigh);
    },
  },
});

export default filterSlice.reducer;

export const {
  setLowToHigh,
  sethHighToLow,
  setisfreecancellable,
  sethasfreeparking,
  sethasswimmingpool,
  sethotelincludebreakfast,
} = filterSlice.actions;
