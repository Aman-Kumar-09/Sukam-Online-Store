export default function Footer() {
    return (
        <footer className="modern-footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <h6>Company</h6>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6>Support</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Shipping & Returns</a></li>
                            <li><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6>Legal</h6>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Cookies</a></li>
                            <li><a href="#">Accessibility</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6>Connect</h6>
                        <div className="socials">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-x-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Sukam Empire. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};