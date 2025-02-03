import { useState } from "react";
import "./Navbar1.css";

const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">InterestFusion</div>
            <ul className={isOpen ? "nav-links active" : "nav-links"}>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>&#9776;</div>
        </nav>
    );
};

export default Navbar1;