import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.item.name === action.payload.item.name
      );

      if (existingIndex !== -1) {
        state.items[existingIndex].quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    reduceItem: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item.item.name === action.payload.item.name
      );

      if (existingIndex !== -1) {
        let newQuantity;
        if (state.items[existingIndex].quantity > 0) {
          newQuantity =
            state.items[existingIndex].quantity - action.payload.quantity;
        }

        if (newQuantity <= 0) {
          state.items.splice(existingIndex, 1);
        } else {
          state.items[existingIndex].quantity = newQuantity;
        }
      }
    },
    deleteFromCart: (state, action) => {
      const existingIndex = state.items.findIndex((item) => {
        return item.item.name === action.payload;
      });
      state.items.splice(existingIndex, 1);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, reduceItem, deleteFromCart, clearCart } =
  CartSlice.actions;

export default CartSlice.reducer;
