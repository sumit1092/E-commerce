#Ecommerce
Welcome to the E-Commerce Store! This is a React-based single-page e-commerce application where users can browse products, add them to the cart, and place orders. The application features product categories, a shopping cart, and an order form.
https://e-commerce-1092.netlify.app/

Features
Product Catalog: Browse a list of products fetched from an API.
Categories: Filter products based on categories like electronics, men's clothing, women's clothing, and jewelry.
Shopping Cart: Add products to the cart, update quantities, and view the total price.
Order Form: Enter customer details (name, address, phone) to place an order.
Responsive Design: Mobile-first design for optimal viewing on all devices.
Notifications: Real-time toast notifications when adding products to the cart.
Dynamic Product Filtering: Ability to filter products by categories and clear filters.

Tech Stack
React: Frontend framework for building user interfaces.
React Router: For managing different routes (pages) in the app.
Axios: For making API calls to fetch product data.
React Toastify: For notifications and user feedback on actions like adding to cart.
CSS: For styling the components and layout.

Description of the Folders
components/: Contains all the React component files (.js) and their associated CSS files.

Category.js: Component to display product categories.
Product.js: Displays individual product information.
Cart.js: Manages the shopping cart and its functionality.
OrderForm.js: Handles the order form for users to submit their details.
Home.js: The landing page of the application.
Feature.js: Displays featured products.
Footer.js: Footer of the website.
Images/: Contains static image files like the logo.svg.
App.js: The main application file that brings together all components.
App.css: Global CSS for the overall styling of the application.
index.js: Entry point for the React application.

1. Clone the repository:
git clone https://github.com/your-username/ecommerce-store.git
cd ecommerce-store

2.Install dependencies:
npm install

3. Run the app locally:
npm start

4. Access the app: Once the app is running, open http://localhost:3000 to view it in the browser.

Usage
Home Page: You will be greeted with a welcome message and a link to browse products.
Categories: Select a category to filter products. You can clear the filter to see all products.
Shopping Cart: Add products to the cart, update their quantity, or remove items.
Order Form: Place an order by filling in your details and submitting the form.

API Used
This app fetches data from the Fake Store API.

