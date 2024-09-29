import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import OrderForm from './components/OrderForm';
import logo from './Images/logo.svg';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [category, setCategory] = useState('');

  const addToCart = (product) => {
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateCart = (productId, quantity) => {
    setCartItems(
      cartItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const handleResetCategory = () => {
    setCategory(''); 
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <div className='logo'>
              <Link to="/"><img src={logo} alt="" />Ecommerce</Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products" onClick={handleResetCategory}>Products</Link></li>
            </ul>
            <Link className="btn" to="/cart">Cart-{getTotalItems()}</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home setCategory={setCategory} />} />
          <Route path="/home" element={<Home setCategory={setCategory} />} />
          <Route path="/products" element={<Products addToCart={addToCart} category={category} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} updateCart={updateCart} removeFromCart={removeFromCart} setCategory={setCategory} />} />
          <Route path="/order" element={<OrderForm cartItems={cartItems} clearCart={clearCart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
