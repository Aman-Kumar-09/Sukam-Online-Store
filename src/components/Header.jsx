import React, { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';
import logo from '/images/logo.png';
import cart from '/images/cart.png';
import CartModal from './CartModal';

const navItems = [
    { label: 'Home', href: '/#' },
    { label: 'Products', href: '/#products' },
    { label: 'About', href: '/#footer' },
    { label: 'Contact', href: '/#footer' },
];

export default function Header() {
    const { cartCount } = useCart();
    const [showCart, setShowCart] = useState(false);

    return (
        <>
            <header className="py-3 sticky-top" style={{ backdropFilter: 'blur(12px)', background: 'rgba(255, 255, 255, 0.8)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <a href="/" className="d-flex align-items-center text-decoration-none">
                        <img src={logo} alt="Logo" style={{ height: '48px' }} />
                    </a>

                    <nav className="d-none d-md-flex gap-4">
                        {navItems.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                className="text-dark fw-semibold text-decoration-none px-3 py-2 rounded nav-link-glass"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="btn position-relative p-0 border-0 bg-transparent"
                        onClick={() => setShowCart(true)}
                    >
                        <img src={cart} alt="Cart" width="28" height="28" />
                        {cartCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger text-white px-2 py-1 fs-6">
                            {cartCount}
                        </span>
                        )}
                    </button>
                </div>
            </header>

            <CartModal showModal={showCart} closeModal={() => setShowCart(false)} />
        </>
    );
};