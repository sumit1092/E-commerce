import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Category from './Category';
import Footer from './Footer';
import Feature from './Feature';

function Home({ setCategory }) {
  return (
    <div className="home-container">
      <div className="bg">
        <div className="home">
          <div className='top-text'>
            <h2>welcome to the e-commerce store</h2>
            <Link className="link" to="/products" onClick={() => setCategory('')}> Go to Products </Link>
          </div>
        </div>
      </div>
      <Category setCategory={setCategory}/>
      <Feature/>
      <Footer/>
    </div>
  );
}

export default Home;
