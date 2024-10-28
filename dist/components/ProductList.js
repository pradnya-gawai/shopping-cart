"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _useFetchData = _interopRequireDefault(require("../hooks/useFetchData"));
var _reactRedux = require("react-redux");
var _productSlice = require("../redux/features/productSlice");
var _cartSlice = require("../redux/features/cartSlice");
require("../assets/productlist.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/ProductList.js

// Import the addToCart action
// Import CSS styles

function ProductList() {
  const dispatch = (0, _reactRedux.useDispatch)();
  const {
    data,
    loading,
    error
  } = (0, _useFetchData.default)('https://fakestoreapi.com/products', {
    setData: _productSlice.setData,
    setLoading: _productSlice.setLoading,
    setError: _productSlice.setError
  });

  // Function to handle adding a product to the cart
  const handleAddToCart = product => {
    dispatch((0, _cartSlice.addToCart)(product)); // Dispatch the addToCart action
  };
  if (loading) return /*#__PURE__*/_react.default.createElement("p", null, "Loading products...");
  if (error) return /*#__PURE__*/_react.default.createElement("p", null, "Error: ", error);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product-list-container"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "Products"), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-grid"
  }, data.map(product => /*#__PURE__*/_react.default.createElement("div", {
    className: "product-card",
    key: product === null || product === void 0 ? void 0 : product.id
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: product === null || product === void 0 ? void 0 : product.image,
    alt: product === null || product === void 0 ? void 0 : product.title,
    className: "product-image"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-info"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "product-title"
  }, product === null || product === void 0 ? void 0 : product.title), /*#__PURE__*/_react.default.createElement("p", {
    className: "product-price"
  }, "\u20B9", product === null || product === void 0 ? void 0 : product.price), /*#__PURE__*/_react.default.createElement("button", {
    className: "add-to-cart-btn",
    onClick: () => handleAddToCart(product)
  }, "Add to Cart"))))));
}
var _default = exports.default = ProductList;