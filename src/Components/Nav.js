import React, { useState} from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons

/**
 * Navigation component rendering the main menu.
 * Uses React Router's <Link> for client-side navigation between pages,
 * and anchor tags for intra-page navigation sections (About, Menu, etc.).
 */
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
console.log("isOpen:", isOpen);

    return (
    <nav>
    <button
        aria-label="Toggle Menu"
        className="mobileMenuBtn"
        onClick={() => setIsOpen(!isOpen)}
        >
        {isOpen ? <FaTimes size={36} /> : <FaBars size={36} />}
    </button>

        <ul className={`menuLinks ${isOpen ? "open" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><Link to="/reservation">Reservation</Link></li>
            <li><a href="#order-online">Order Online</a></li>
            <li><a href="#login">Login</a></li>
        </ul>
    </nav>
    );
}
export default Nav;