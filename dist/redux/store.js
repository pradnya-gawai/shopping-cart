"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toolkit = require("@reduxjs/toolkit");
var _cartSlice = _interopRequireDefault(require("./features/cartSlice"));
var _productSlice = _interopRequireDefault(require("./features/productSlice"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/redux/store.js

const store = (0, _toolkit.configureStore)({
  reducer: {
    cart: _cartSlice.default,
    products: _productSlice.default // Make sure to include the product reducer if used
  }
});
var _default = exports.default = store;