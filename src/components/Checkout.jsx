import React from 'react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
    const { cart, cartTotal } = useCart();

    const shippingFee = 100;
    const tax = 0;
    const total = cartTotal + shippingFee + tax;

    return (
        <main className="checkout-page py-5 bg-light min-vh-100">
            <div className="container">
                <div className="row g-4">
                    {/* Shipping & Payment Section */}
                    <div className="col-lg-8">
                        {/* Shipping Info */}
                        <div className="card border-0 shadow-custom mb-4 rounded-4">
                            <div className="card-header bg-white border-bottom-custom rounded-top-4">
                                <h5 className="mb-0 fw-semibold text-primary">Shipping Information</h5>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <label className="form-label">First Name</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Last Name</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Email</label>
                                            <input type="email" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Phone</label>
                                            <input type="tel" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="form-label">Address</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">City</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">State</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">ZIP Code</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Country</label>
                                            <input type="text" className="form-control input-custom" required />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="card border-0 shadow-custom rounded-4">
                            <div className="card-header bg-white border-bottom-custom rounded-top-4">
                                <h5 className="mb-0 fw-semibold text-primary">Payment Information</h5>
                            </div>
                            <div className="card-body">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">Name on Card</label>
                                        <input type="text" className="form-control input-custom" required />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label">Card Number</label>
                                        <input type="text" className="form-control input-custom" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Expiry Date</label>
                                        <input type="text" className="form-control input-custom" placeholder="MM/YY" required />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">CVV</label>
                                        <input type="text" className="form-control input-custom" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-custom rounded-4">
                            <div className="card-header bg-white border-bottom-custom rounded-top-4">
                                <h5 className="mb-0 fw-semibold text-primary">Order Summary</h5>
                            </div>
                            <div className="card-body">
                                {cart.length === 0 ? (
                                    <p className="text-muted">Your cart is empty.</p>
                                ) : (
                                    <div className="mb-3">
                                        {cart.map(item => (
                                            <div key={item.id} className="d-flex justify-content-between align-items-center mb-2">
                                                <div>
                                                    <p className="mb-1 fw-semibold">{item.name}</p>
                                                    <small className="text-muted">Qty: {item.quantity}</small>
                                                </div>
                                                <span className="text-muted">₹{item.price * item.quantity}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <hr />
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>₹{cartTotal}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Shipping</span>
                                    <span>₹{shippingFee}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <span>Tax</span>
                                    <span>₹{tax}</span>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold">
                                    <span>Total</span>
                                    <span>₹{total}</span>
                                </div>
                                <button className="btn btn-primary w-100 mt-4">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};