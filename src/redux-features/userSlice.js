import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  userName: "",
  email: "",
  admin: false,
  favHotel: [],
  bookedHotel: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.admin = action.payload.admin;
    },
    addFavHotel: (state, action) => {
      // state.favHotel = action.payload;
      let exists = true;
      state.favHotel.map(function (hotel) {
        if (exists === true && hotel.hotel_id === action.payload.hotel_id) {
          exists = false;
          // break;
        }
      });
      exists && state.favHotel.push(action.payload);
      if (exists) {
        toast.success("Added to your favourites 😄!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (!exists) {
        toast.info("Hotel already in your favourites !", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      console.log(state.favHotel);
    },

    deleteFavHotel: (state, action) => {
      let updatedFavHotels = state.favHotel.filter(
        (hotel) => hotel.hotel_id != action.payload.hotel_id
      );
      state.favHotel = updatedFavHotels;
    },

    bookHotel: (state, action) => {
      state.bookedHotel = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { addUser, addFavHotel, bookHotel, deleteFavHotel } =
  userSlice.actions;
