import React from "react";
import Logo from '../assets/footerLogo.png'
import { Link } from "react-router-dom";

/**
 * Footer Component
 *
 * Footer section includes:
 * - Restaurant logo
 * - Navigation links
 * - Contact information
 * - Social media links
 * - Copyright
 */
const Footer = () => {
    return (
    <footer aria-label="Page Footer">
        <img src={Logo} alt="footer-logo"/>
        <div aria-label="Page Links" className="footerLinksContainer">
            <div className="navigation">
                <h4>Navigation</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><Link to="/reservation">Reservation</Link></li>
                    <li><a href="#order-online">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>
            </div>
            <div aria-label="Contact Us" className="contactUs">
                <h4>Contact Us</h4>
                <ul>
                    <li>101 Michigan Avenue</li>
                    <li>(312) 555-0179</li>
                    <li><a href="mailto:contact@example.com" >Email Us</a></li>
                </ul>
            </div>
            <div aria-label="Links For Socials Of The Restaurant" className="socials">
                <h4>Socials</h4>
                <ul>
                    <li><a href="http://wwww.facebook.com" >Facebook</a></li>
                    <li><a href="http://x.com" >Twitter</a></li>
                    <li><a href="http://www.instagram.com" >Instagram</a></li>
                </ul>
            </div>
        </div>
        <div aria-label="Copyright" className="copyright">
            <p>2025 © Little Lemon</p>
        </div>
    </footer>
    );
}

export default Footer;