// Import Dependencies
import WebDevLogo from "../images/cses-webdev-transparent.png"
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

export default function Navbar(){
    return(
        <div className="navContainer">
            <Link to="/"><img src={WebDevLogo} alt="CSESWebDev Logo" id="logo" /></Link>

            <div className="navText">
                <Link to="/about" className="navLinks">About Us</Link>
                <Link to="/events" className="navLinks">Events</Link>
                <Link to="/media" className="navLinks">Media</Link>
            </div>
        
        </div>
    );
}