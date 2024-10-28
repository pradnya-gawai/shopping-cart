// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Products</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
    </nav>
  );
}

export default Navbar;
