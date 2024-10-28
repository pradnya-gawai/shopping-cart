// src/ProductList.js
import React from 'react';
import useFetchData from '../hooks/useFetchData';
import { useDispatch } from 'react-redux';
import { setData, setLoading, setError } from '../redux/features/productSlice';
import { addToCart } from '../redux/features/cartSlice'; // Import the addToCart action
import '../assets/productlist.css'; // Import CSS styles

function ProductList() {
  const dispatch = useDispatch();
  const { data, loading, error } = useFetchData(
    'https://fakestoreapi.com/products',
    { setData, setLoading, setError }
  );

  // Function to handle adding a product to the cart
  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); // Dispatch the addToCart action
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="product-list-container">
      <h1>Products</h1>
      <div className="product-grid">
        {data.map((product) => (
          <div className="product-card" key={product?.id}>
            <img src={product?.image} alt={product?.title} className="product-image" />
            <div className="product-info">
              <h2 className="product-title">{product?.title}</h2>
              <p className="product-price">₹{product?.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
