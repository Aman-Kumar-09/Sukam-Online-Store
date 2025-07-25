import React, { useEffect } from 'react';
import { useCart } from '../context/CartContext.jsx';
import { useNavigate } from 'react-router-dom';

export default function CartModal({ showModal, closeModal }) {
    const { cart, cartTotal, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        const modalElement = document.getElementById('cartModal');
        if (modalElement) {
            if (showModal) {
                modalElement.classList.add('show');
                modalElement.style.display = 'block';
            } else {
                modalElement.classList.remove('show');
                modalElement.style.display = 'none';
            }
        }
    }, [showModal]);

    const handleCheckout = () => {
        closeModal(true);
        navigate('/checkout');
    };

    return (
        <div
            className={`modal fade ${showModal ? 'show' : ''}`}
            id="cartModal"
            tabIndex="-1"
            aria-labelledby="cartModalLabel"
            aria-hidden={!showModal}
            style={{ display: showModal ? 'block' : 'none' }}
        >
            <div className="modal-dialog modal-lg">
                <div className="modal-content rounded-4 shadow-lg">
                    <div className="modal-header border-0">
                        <h5 className="modal-title" id="cartModalLabel">Your Shopping Cart</h5>
                        <button type="button" className="btn-close" onClick={closeModal}></button>
                    </div>
                    <div className="modal-body">
                        {cart.length === 0 ? (
                            <div className="text-center py-5">
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="cart-item d-flex justify-content-between align-items-center mb-4 p-3 border-bottom">
                                    <div className="d-flex align-items-center">
                                        <img src={item.image} alt={item.name} className="cart-item-img" />
                                        <div className="ms-3">
                                            <h6>{item.name}</h6>
                                            <p className="text-muted">₹{item.price}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <button
                                            className="btn btn-sm btn-outline-primary me-2"
                                            onClick={() => updateQuantity(item.id, -1)}
                                        >
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button
                                            className="btn btn-sm btn-outline-primary me-2"
                                            onClick={() => updateQuantity(item.id, 1)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="btn btn-sm btn-outline-danger ms-3"
                                            onClick={() => removeFromCart(item.id)}
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="cart-total mt-4">
                            <h5>Total: ₹{cartTotal}</h5>
                        </div>
                    </div>
                    <div className="modal-footer border-0">
                        <button type="button" className="btn btn-outline-secondary" onClick={closeModal}>Continue Shopping</button>
                        <button type="button" className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};