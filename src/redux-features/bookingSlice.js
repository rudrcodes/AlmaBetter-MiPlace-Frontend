
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    addBooking(state, action) {
      state.bookings.push(action.payload);
    },
    removeBooking(state, action) {
      const bookingIdToRemove = action.payload;
      state.bookings = state.bookings.filter((booking) => booking.id !== bookingIdToRemove);
    },
    updateBookingStatus(state, action) {
      const { bookingId, status } = action.payload;
      const bookingToUpdate = state.bookings.find((booking) => booking.id === bookingId);
      if (bookingToUpdate) {
        bookingToUpdate.status = status;
      }
    },
  },
});

export const { addBooking, removeBooking, updateBookingStatus } = bookingSlice.actions;

export default bookingSlice.reducer;
