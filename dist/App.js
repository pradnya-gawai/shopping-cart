"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _Navbar = _interopRequireDefault(require("./components/Navbar"));
var _ProductList = _interopRequireDefault(require("./components/ProductList"));
var _Cart = _interopRequireDefault(require("./components/Cart"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/App.js

function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Navbar.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_ProductList.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/cart",
    element: /*#__PURE__*/_react.default.createElement(_Cart.default, null)
  })));
}
var _default = exports.default = App;