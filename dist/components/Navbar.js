"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("../assets/navbar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/Navbar.js

function Navbar() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "nav-link"
  }, "Products"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/cart",
    className: "nav-link"
  }, "Cart"));
}
var _default = exports.default = Navbar;