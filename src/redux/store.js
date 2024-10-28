// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice';
import productReducer from './features/productSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer, // Make sure to include the product reducer if used
  },
});

export default store;
