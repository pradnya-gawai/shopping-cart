"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLoading = exports.setError = exports.setData = exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
// src/features/productSlice.js

const productSlice = (0, _toolkit.createSlice)({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
    error: null
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});
const {
  setData,
  setLoading,
  setError
} = productSlice === null || productSlice === void 0 ? void 0 : productSlice.actions;
exports.setError = setError;
exports.setLoading = setLoading;
exports.setData = setData;
var _default = exports.default = productSlice.reducer;