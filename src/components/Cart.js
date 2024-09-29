import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems, updateCart, removeFromCart, setCategory }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const incrementQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item) {
      updateCart(productId, item.quantity + 1);
    }
  };

  const decrementQuantity = (productId) => {
    const item = cartItems.find(item => item.id === productId);
    if (item && item.quantity > 1) {
      updateCart(productId, item.quantity - 1);
    }
  };

  return (
    <div className="cart-container">
      <div className="cart">
      <h1>Cart</h1>
        {cartItems.length === 0 ? (
          <Link className="Link" to="/products" onClick={() => setCategory('')}>Go to Products</Link>
        ) : (
          <div className="cart-items">
            <div className='cart-box'>
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <div className="image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="title">
                    <h4>{item.title.length > 20 ? `${item.title.slice(0, 20)}...` : item.title}</h4>
                  </div>
                  <div className="price">
                    <p>${item.price}</p>
                  </div>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className="remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
            </div>
            <div className="total">
              <h2>Total: ${getTotalPrice().toFixed(2)}</h2>
              <Link to="/order">
                <button className='proceed'>Proceed to Checkout</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
