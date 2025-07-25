import React, { createContext, useContext, useState, useEffect } from 'react';

// Create CartContext
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
    return useContext(CartContext);
};

// CartProvider to wrap the app and provide context values
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    // Load cart from localStorage on first render
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        calculateCart(savedCart);
    }, []);

    // Calculate cart count and total
    const calculateCart = (cartItems) => {
        const count = cartItems.reduce((total, item) => total + item.quantity, 0);
        const total = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setCartCount(count);
        setCartTotal(total);
    };

    // Add item to cart
    const addToCart = (product) => {
        const updatedCart = [...cart];
        const existingItem = updatedCart.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            updatedCart.push({ ...product, quantity: 1 });
        }

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateCart(updatedCart);
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateCart(updatedCart);
    };

    // Update item quantity in cart
    const updateQuantity = (id, change) => {
        const updatedCart = cart.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + change } : item
        ).filter(item => item.quantity > 0);

        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calculateCart(updatedCart);
    };

    return (
        <CartContext.Provider value={{ cart, cartCount, cartTotal, addToCart, removeFromCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};
