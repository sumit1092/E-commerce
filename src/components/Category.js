import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

const Category = ({ setCategory }) => {
    console.log('setCategory:', setCategory);

    const categories = ['electronics', "men's clothing", "women's clothing", 'jewelery'];

    const category = x => (
            <div className='category-card'>
                <div className="button">
                    <Link
                        key={x}
                        to="/products"
                        className="category-link"
                        onClick={() => setCategory(x)}
                    >
                        {x}
                    </Link>
                </div>
            </div>
    );

    const ansCategory = categories.map(category);

    return (
        <div className="category-container">
            <div className='category'>
                <div className='category-details'>
                    <div className="heading">
                        <h1 className='title'>Shop By Category</h1>
                    </div>
                    <div className="categories">
                        {ansCategory}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
