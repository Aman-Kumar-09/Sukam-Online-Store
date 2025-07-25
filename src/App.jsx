import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Products from "./components/Products.jsx";
import CustomerFeedback from "./components/CustomerFeedback.jsx";
import Footer from "./components/Footer.jsx";
import {CartProvider} from "./context/CartContext.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Checkout from "./components/Checkout.jsx";
import BrandsSection from "./components/BrandsSection.jsx";

export default function App() {
    return (
        <CartProvider>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path={'/'} element={
                        <>
                            <Hero />
                            <Products />
                            <CustomerFeedback />
                            <BrandsSection />
                        </>
                    } />
                    <Route path={'checkout'} element={<Checkout />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </CartProvider>
    );
};