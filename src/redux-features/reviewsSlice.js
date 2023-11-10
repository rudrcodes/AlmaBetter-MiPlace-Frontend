
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    reviews: [],
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        addReview(state, action) {
            state.reviews.push(action.payload);
        },
        updateReview(state, action) {
            const updatedReview = action.payload;
            const index = state.reviews.findIndex((review) => review.id === updatedReview.id);
            if (index !== -1) {
                state.reviews[index] = updatedReview;
            }
        },
    },
});
export const { addReview ,updateReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;