import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Address: 123 E-commerce St, Shop City, EC 12345</p>
                    <p>Email: support@example.com</p>
                    <p>Phone: +1 (234) 567-8910</p>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <ul className="social-media">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                <div className="footer-section newsletter">
                    <h2>Newsletter</h2>
                    <p>Sign up for our newsletter to get the latest updates and offers.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} E-commerce Website. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
