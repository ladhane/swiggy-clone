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
            // item already exists, update its quantity
            state.items[existingIndex].quantity += action.payload.quantity;
          } else {
            // item doesn't exist, add it to the cartItems array
            state.items.push(action.payload);
          }
    },
    reduceItem: (state, action) => {
        const existingIndex =  state.items.findIndex(item => item.item.name === action.payload.item.name);

        if (existingIndex !== -1) {
          // item exists in the cartItems array, reduce its quantity
          const currentItem = state.items[existingIndex];
          const newQuantity = currentItem.quantity - action.payload.quantity;
        
          if (newQuantity <= 0) {
            // if newQuantity is zero or negative, remove the item from the cartItems array
            state.items.splice(existingIndex, 1);
          } else {
            // otherwise, update the item's quantity property
            currentItem.quantity = newQuantity;
          }
        }
        
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, reduceItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
