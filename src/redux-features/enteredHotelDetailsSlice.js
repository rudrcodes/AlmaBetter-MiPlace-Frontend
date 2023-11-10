import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialState = {
  city: "",
  firstDay: "",
  secondDay: "",
  roomsGuests: "",
  noOfDays: "",
  //   Hotel_obj:"",
};
const noOfDays = function getNumberOfNightsBetweenDates(start_date, end_date) {
  if (start_date && end_date) {
    if (start_date > end_date) {
      console.log(Date());
      toast.warning(
        "⚠️ Start Date should be smaller than end date.Please correct the start or the end date!",
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      window.location.reload();
      // setFirstDay(Date());
      return 0;
    }
    const start_date_obj = new Date(start_date);
    const end_date_obj = new Date(end_date);

    // Calculate the number of days between the two dates.
    const days_between =
      (end_date_obj - start_date_obj) / (1000 * 60 * 60 * 24);

    // Subtract 1 to account for the fact that the first day is not a night.
    const nights_between = days_between;

    if (nights_between < 0) return 0;
    return nights_between;
  }
  return 0;
};
const enteredHotelDetailsSlice = createSlice({
  name: "indiHotelInfo",
  initialState,
  reducers: {
    setEnteredHotelDetails: (state, action) => {
      state.city = action.payload.city;
      state.firstDay = action.payload.firstDay;
      state.secondDay = action.payload.secondDay;
      state.roomsGuests = action.payload.roomsGuests;
      state.noOfDays = noOfDays(
        action.payload.firstDay,
        action.payload.secondDay
      );
      console.log(action.payload);
      console.log(state);
    },
  },
});

export default enteredHotelDetailsSlice.reducer;
export const { setEnteredHotelDetails } = enteredHotelDetailsSlice.actions;
