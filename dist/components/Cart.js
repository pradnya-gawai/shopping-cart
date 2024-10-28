"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
var _cartSlice = require("../redux/features/cartSlice");
require("../assets/cart.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/Cart.js

// Import the removeFromCart action

function Cart() {
  const dispatch = (0, _reactRedux.useDispatch)(); // Initialize dispatch
  const cartItems = (0, _reactRedux.useSelector)(state => state.cart.items);
  const handleRemoveFromCart = id => {
    dispatch((0, _cartSlice.removeFromCart)({
      id
    })); // Dispatch the action to remove the item
  };
  if (cartItems.length === 0) {
    return /*#__PURE__*/_react.default.createElement("p", {
      className: "cart-empty"
    }, "Your cart is empty!");
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-container"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "cart-header"
  }, "Your Cart"), cartItems.map(item => /*#__PURE__*/_react.default.createElement("div", {
    key: item.id,
    className: "cart-item"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: item.image,
    alt: item.title
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "cart-item-details"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "cart-item-title"
  }, item.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "cart-item-price"
  }, "\u20B9", item.price), /*#__PURE__*/_react.default.createElement("p", null, "Quantity: ", item.quantity), /*#__PURE__*/_react.default.createElement("button", {
    className: "remove-button",
    onClick: () => handleRemoveFromCart(item.id) // Call the remove function
  }, "Remove from Cart")))));
}
var _default = exports.default = Cart;