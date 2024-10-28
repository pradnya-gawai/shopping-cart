// src/Cart.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/features/cartSlice'; // Import the removeFromCart action
import '../assets/cart.css';

function Cart() {
  const dispatch = useDispatch(); // Initialize dispatch
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id })); // Dispatch the action to remove the item
  };

  if (cartItems.length === 0) {
    return <p className="cart-empty">Your cart is empty!</p>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div className="cart-item-details">
            <h2 className="cart-item-title">{item.title}</h2>
            <p className="cart-item-price">₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button 
              className="remove-button"
              onClick={() => handleRemoveFromCart(item.id)} // Call the remove function
            >
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
