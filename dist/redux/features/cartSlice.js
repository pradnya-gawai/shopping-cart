"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.default = exports.addToCart = void 0;
var _toolkit = require("@reduxjs/toolkit");
// src/redux/features/cartSlice.js

const cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1
        });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    }
  }
});
const {
  addToCart,
  removeFromCart
} = cartSlice.actions;
exports.removeFromCart = removeFromCart;
exports.addToCart = addToCart;
var _default = exports.default = cartSlice.reducer;