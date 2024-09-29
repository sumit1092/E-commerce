import React, { useState } from 'react';
import './OrderForm.css';

function OrderForm({ cartItems, clearCart }) {
  const [formData, setFormData] = useState({ name: '', address: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, phone, email } = formData;

    if (!name || !address || !phone || !email) {
      alert('Please fill all the fields');
      return;
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
      alert('Phone number must be exactly 10 digits');
      return;
    }

    if (!email.includes('@')) {
      alert('Email must contain @ symbol');
      return;
    }

    setSubmitted(true);
    clearCart();
  };

  return (
    <div className="order-form">
      <div className="order-form-container">
        <h1>Order Form</h1>
        {submitted ? (
          <p className="success-message">Order placed successfully!</p>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name: </label>
              <input type="text" placeholder="Enter your name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Address: </label>
              <input type="text" placeholder="Enter your address" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Phone: </label>
              <input type="tel" placeholder="1234567890" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Email: </label>
              <input type="email" placeholder="example@ex.com" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <button className="submit-btn" type="submit">Place Order</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default OrderForm;
