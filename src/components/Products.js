import React, { useState, useEffect } from 'react';
import './Product.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  const Products = ({ addToCart, category }) => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(category || 'All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setAllProducts(response.data);
        if (category) {
          const filteredProducts = response.data.filter((x) => x.category === category);
          setProducts(filteredProducts);
          setCurrentCategory(category);
          console.log('Filtered Products:', filteredProducts);
        } else {
          setProducts(response.data);
          setCurrentCategory('All');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, [category]);

  const clearFilter = () => {
    setProducts(allProducts);
    setCurrentCategory('All');
  };

  const handleAddToCart = (x) => {
    addToCart(x);
    toast.success(`${x.title.length > 20 ?
      `${x.title.substring(0, 10)}...` : x.title} 
                  added, Go to cart!`,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        pauseOnHover: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
  };

  const product = x => (
    <div className='product-card' key={x.id}>
      <div className="card">
        <img src={x.image} alt={x.title} />
        <div className="info">
          <h3>{x.title.length > 20 ? `${x.title.substring(0, 20)}...` : x.title}</h3>
          <p>Category: {x.category}</p>
          <h4>Price: ${x.price}</h4>
          <button className="cart-btn" onClick={() => handleAddToCart(x)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );

  const ansProducts = products.map(product);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='product'>
      <div className="products">
        <h1>{currentCategory} Products</h1>
      </div>
      {currentCategory !== 'All' && (
        <div className="clear">
          <button className="clear-btn" onClick={clearFilter}>Clear Filter</button>
        </div>
      )}
      <div className="product-container">
        {ansProducts}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Products;
