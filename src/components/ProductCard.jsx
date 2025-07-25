import React from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="col-md-3 mb-4">
            <div className="card border-0 shadow-sm rounded-4 h-100 product-card">
                <div className="overflow-hidden rounded-top-4">
                    <img
                        src={product.image}
                        className="card-img-top product-img"
                        alt={product.name}
                        style={{ objectFit: 'cover', height: '220px', transition: 'transform 0.3s ease' }}
                    />
                </div>
                <div className="card-body d-flex flex-column justify-content-between p-4">
                    <h5 className="card-title fw-semibold mb-2">{product.name}</h5>
                    <p className="text-primary fw-bold fs-6">₹{product.price}</p>
                    <button
                        className="btn btn-outline-primary mt-3 rounded-pill w-100 fw-medium add-to-cart-btn"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};