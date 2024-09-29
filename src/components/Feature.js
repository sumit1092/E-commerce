import React from 'react';
import './Feature.css';

const Feature = () => {
    const features = [
        {
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders above $50.",
            icon: "🚚"
        },
        {
            title: "24/7 Support",
            description: "Our support team is available around the clock to help you.",
            icon: "📞"
        },
        {
            title: "Easy Returns",
            description: "Hassle-free returns within 30 days of purchase.",
            icon: "🔄"
        },
        {
            title: "Exclusive Discounts",
            description: "Get access to exclusive discounts and promotions.",
            icon: "💸"
        },
    ];

    return (
        <div className="feature">
            <div className="feature-container">
                <h1>Features</h1>
                <div className="feature-card">
                    {features.map((feature, index) => (
                        <div className="cd" key={index}>
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="delivery">
                                <p>{feature.title}</p>
                            </div>
                            <div className="text">
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Feature;

