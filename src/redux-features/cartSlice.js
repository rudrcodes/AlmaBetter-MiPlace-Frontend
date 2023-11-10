
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            state.items.push(newItem);
        },
        removeItem(state, action) {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter((item) => item.id !== itemIdToRemove);
        },
        updateItemQuantity(state, action) {
            const { itemId, quantity } = action.payload;
            const itemToUpdate = state.items.find((item) => item.id === itemId);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }
        },
    },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
